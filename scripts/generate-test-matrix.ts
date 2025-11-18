import * as fs from 'fs';
import * as path from 'path';

interface TestCase {
  archivo: string;
  modulo: string;
  clase: string;
  metodo: string;
  descripcionPrueba: string;
  tipoPrueba: string;
  estado: string;
  categoria: string;
}

function extractTestsFromFile(filePath: string): TestCase[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const tests: TestCase[] = [];
  
  const fileName = path.basename(filePath);
  const moduleName = fileName.replace('.test.ts', '');
  const isInfrastructure = filePath.includes('Infraestructure');
  const isDomain = filePath.includes('domain');
  const categoria = isInfrastructure ? 'Infraestructura' : isDomain ? 'Dominio' : 'Otro';
  
  // Extraer el nombre de la clase principal que se está testeando
  const describeMatches = content.matchAll(/describe\("([^"]+)",/g);
  let currentClass = '';
  
  for (const match of describeMatches) {
    currentClass = match[1];
    break; // Tomamos el primer describe como la clase principal
  }
  
  // Extraer todos los describe anidados (métodos)
  const methodMatches = content.matchAll(/describe\("([^"]+)",[\s\S]*?\{/g);
  let currentMethod = '';
  const methods: string[] = [];
  
  for (const match of methodMatches) {
    if (match[1] !== currentClass) {
      methods.push(match[1]);
    }
  }
  
  // Extraer todos los casos de prueba (it statements)
  const itMatches = content.matchAll(/it\("([^"]+)",/g);
  let methodIndex = 0;
  let testCount = 0;
  
  // Analizar la estructura completa
  const lines = content.split('\n');
  let inDescribe = false;
  let describeLevel = 0;
  let currentMethodName = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detectar inicio de describe (método)
    const describeMatch = line.match(/describe\("([^"]+)"/);
    if (describeMatch && describeMatch[1] !== currentClass) {
      currentMethodName = describeMatch[1];
      describeLevel++;
    }
    
    // Detectar casos de prueba
    const itMatch = line.match(/it\("([^"]+)"/);
    if (itMatch) {
      const testDescription = itMatch[1];
      
      // Determinar el tipo de prueba basado en la descripción
      let tipoPrueba = 'Normal';
      if (testDescription.includes('error') || testDescription.includes('excepción') || 
          testDescription.includes('lanzar') || testDescription.includes('debería rechazar')) {
        tipoPrueba = 'Error/Excepción';
      } else if (testDescription.includes('límite') || testDescription.includes('vacío') || 
                 testDescription.includes('null') || testDescription.includes('undefined') ||
                 testDescription.includes('máximo') || testDescription.includes('mínimo')) {
        tipoPrueba = 'Límite';
      } else if (testDescription.includes('exitosamente') || testDescription.includes('correctamente')) {
        tipoPrueba = 'Exitoso';
      }
      
      tests.push({
        archivo: fileName,
        modulo: moduleName,
        clase: currentClass,
        metodo: currentMethodName || 'General',
        descripcionPrueba: testDescription,
        tipoPrueba: tipoPrueba,
        estado: 'Implementada',
        categoria: categoria
      });
      
      testCount++;
    }
    
    // Detectar cierre de bloques
    if (line.includes('});')) {
      if (describeLevel > 0) {
        describeLevel--;
        if (describeLevel === 0) {
          currentMethodName = '';
        }
      }
    }
  }
  
  return tests;
}

function getAllTestFiles(dir: string): string[] {
  const files: string[] = [];
  
  function traverse(currentPath: string) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      
      if (entry.isDirectory()) {
        traverse(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.test.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function generateCSV(tests: TestCase[]): string {
  const headers = [
    'ID',
    'Archivo',
    'Módulo',
    'Categoría',
    'Clase/Componente',
    'Método/Función',
    'Descripción de la Prueba',
    'Tipo de Prueba',
    'Estado',
    'Prioridad'
  ];
  
  let csv = headers.join(',') + '\n';
  
  tests.forEach((test, index) => {
    const row = [
      `TC${(index + 1).toString().padStart(3, '0')}`,
      `"${test.archivo}"`,
      `"${test.modulo}"`,
      `"${test.categoria}"`,
      `"${test.clase}"`,
      `"${test.metodo}"`,
      `"${test.descripcionPrueba}"`,
      `"${test.tipoPrueba}"`,
      `"${test.estado}"`,
      test.tipoPrueba === 'Error/Excepción' ? 'Alta' : test.tipoPrueba === 'Límite' ? 'Media' : 'Normal'
    ];
    csv += row.join(',') + '\n';
  });
  
  return csv;
}

function generateStats(tests: TestCase[]): string {
  const totalTests = tests.length;
  const byCategory = tests.reduce((acc, test) => {
    acc[test.categoria] = (acc[test.categoria] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const byType = tests.reduce((acc, test) => {
    acc[test.tipoPrueba] = (acc[test.tipoPrueba] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const byModule = tests.reduce((acc, test) => {
    acc[test.modulo] = (acc[test.modulo] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  let stats = '\n=== ESTADÍSTICAS DE PRUEBAS ===\n\n';
  stats += `Total de pruebas: ${totalTests}\n\n`;
  
  stats += 'Por Categoría:\n';
  Object.entries(byCategory).forEach(([cat, count]) => {
    stats += `  ${cat}: ${count} (${((count/totalTests)*100).toFixed(1)}%)\n`;
  });
  
  stats += '\nPor Tipo de Prueba:\n';
  Object.entries(byType).forEach(([type, count]) => {
    stats += `  ${type}: ${count} (${((count/totalTests)*100).toFixed(1)}%)\n`;
  });
  
  stats += '\nPor Módulo:\n';
  Object.entries(byModule)
    .sort((a, b) => b[1] - a[1])
    .forEach(([module, count]) => {
      stats += `  ${module}: ${count}\n`;
    });
  
  return stats;
}

// Ejecutar el script
const testDir = path.join(__dirname, '..', 'test');
const outputDir = path.join(__dirname, '..', 'test-reports');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🔍 Buscando archivos de prueba...\n');
const testFiles = getAllTestFiles(testDir);
console.log(`✅ Encontrados ${testFiles.length} archivos de prueba\n`);

console.log('📊 Extrayendo casos de prueba...\n');
const allTests: TestCase[] = [];

testFiles.forEach(file => {
  const relativePath = path.relative(testDir, file);
  console.log(`  Procesando: ${relativePath}`);
  const tests = extractTestsFromFile(file);
  allTests.push(...tests);
});

console.log(`\n✅ Total de casos de prueba extraídos: ${allTests.length}\n`);

// Generar CSV
const csvContent = generateCSV(allTests);
const csvPath = path.join(outputDir, 'matriz-pruebas.csv');
fs.writeFileSync(csvPath, csvContent, 'utf-8');
console.log(`✅ Matriz CSV generada: ${csvPath}\n`);

// Generar estadísticas
const stats = generateStats(allTests);
console.log(stats);

const statsPath = path.join(outputDir, 'estadisticas-pruebas.txt');
fs.writeFileSync(statsPath, stats, 'utf-8');
console.log(`✅ Estadísticas guardadas: ${statsPath}\n`);

// Generar resumen en Markdown
let markdown = '# Matriz de Pruebas Unitarias\n\n';
markdown += `**Fecha de generación:** ${new Date().toLocaleDateString('es-ES')}\n\n`;
markdown += `**Total de pruebas:** ${allTests.length}\n\n`;
markdown += stats;
markdown += '\n\n## Detalle por Módulo\n\n';

const byModule = allTests.reduce((acc, test) => {
  if (!acc[test.modulo]) {
    acc[test.modulo] = [];
  }
  acc[test.modulo].push(test);
  return acc;
}, {} as Record<string, TestCase[]>);

Object.entries(byModule)
  .sort((a, b) => b[1].length - a[1].length)
  .forEach(([module, tests]) => {
    markdown += `### ${module} (${tests.length} pruebas)\n\n`;
    markdown += '| Método | Descripción | Tipo |\n';
    markdown += '|--------|-------------|------|\n';
    tests.forEach(test => {
      markdown += `| ${test.metodo} | ${test.descripcionPrueba} | ${test.tipoPrueba} |\n`;
    });
    markdown += '\n';
  });

const mdPath = path.join(outputDir, 'matriz-pruebas.md');
fs.writeFileSync(mdPath, markdown, 'utf-8');
console.log(`✅ Documento Markdown generado: ${mdPath}\n`);

console.log('🎉 ¡Proceso completado exitosamente!\n');
