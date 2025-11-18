# 📊 Sistema de Generación de Matriz de Pruebas

## 🎯 Resumen

Este proyecto incluye un sistema automatizado que analiza todos los archivos de pruebas unitarias y genera una matriz completa con estadísticas y reportes en múltiples formatos.

## ✨ Características

- ✅ **Análisis automático** de todos los archivos `.test.ts`
- 📊 **Exportación a CSV** compatible con Excel y Google Sheets
- 📄 **Documentación en Markdown** con formato legible
- 📈 **Estadísticas detalladas** por categoría, tipo y módulo
- 🏷️ **Clasificación automática** de tipos de prueba
- 🎨 **Priorización inteligente** basada en el tipo de prueba

## 🚀 Uso Rápido

```bash
# Generar la matriz de pruebas
npm run test:matrix
```

Esto creará 3 archivos en `test-reports/`:
- `matriz-pruebas.csv` - Matriz completa en formato CSV
- `matriz-pruebas.md` - Documentación en Markdown
- `estadisticas-pruebas.txt` - Estadísticas resumidas

## 📊 Estructura del CSV

El archivo CSV incluye las siguientes columnas:

| Columna | Descripción | Ejemplo |
|---------|-------------|---------|
| ID | Identificador único | TC001 |
| Archivo | Archivo de prueba | UserUCAdapter.test.ts |
| Módulo | Módulo bajo prueba | UserUCAdapter |
| Categoría | Dominio o Infraestructura | Dominio |
| Clase/Componente | Clase probada | UserUCAdapter |
| Método/Función | Método específico | getUserById |
| Descripción de la Prueba | Descripción completa | "debería retornar el usuario cuando existe" |
| Tipo de Prueba | Normal, Exitoso, Error/Excepción, Límite | Normal |
| Estado | Estado actual | Implementada |
| Prioridad | Alta, Media, Normal | Normal |

## 📈 Tipos de Prueba

El sistema clasifica automáticamente las pruebas en:

### 🟢 Normal
Casos de prueba estándar que verifican la funcionalidad básica.

**Ejemplo:**
```typescript
it("debería retornar el usuario cuando existe", async () => {
  // ...
});
```

### ✅ Exitoso
Casos que verifican operaciones exitosas específicas.

**Ejemplo:**
```typescript
it("debería crear un usuario exitosamente", async () => {
  // ...
});
```

### 🔴 Error/Excepción
Casos que verifican el manejo correcto de errores y excepciones.

**Ejemplo:**
```typescript
it("debería lanzar error cuando el usuario no existe", async () => {
  // ...
});
```

### ⚠️ Límite
Casos que prueban valores límite, null, undefined, vacíos, etc.

**Ejemplo:**
```typescript
it("debería manejar contenido vacío", async () => {
  // ...
});
```

## 🎯 Sistema de Prioridades

Las prioridades se asignan automáticamente según el tipo de prueba:

| Tipo | Prioridad | Razón |
|------|-----------|-------|
| Error/Excepción | 🔴 Alta | Críticas para la estabilidad del sistema |
| Límite | 🟡 Media | Importantes para la robustez |
| Normal/Exitoso | 🟢 Normal | Verificación de funcionalidad estándar |

## 📊 Estadísticas Actuales

```
Total de pruebas: 250

Por Categoría:
  Dominio: 79 (31.6%)
  Infraestructura: 171 (68.4%)

Por Tipo de Prueba:
  Normal: 89 (35.6%)
  Límite: 84 (33.6%)
  Error/Excepción: 48 (19.2%)
  Exitoso: 29 (11.6%)

Módulos con más pruebas:
  1. UserGatewayAdapter: 33
  2. StudentGatewayAdapter: 31
  3. RoomGatewayAdapter: 26
  4. AuthAdapter: 20
  5. RoomUCAdapter: 15
```

## 📁 Estructura de Archivos

```
Pasantia/
├── scripts/
│   └── generate-test-matrix.ts    # Script de generación
├── test-reports/
│   ├── README.md                  # Documentación
│   ├── matriz-pruebas.csv         # Matriz en CSV
│   ├── matriz-pruebas.md          # Matriz en Markdown
│   └── estadisticas-pruebas.txt   # Estadísticas
└── test/
    ├── domain/
    │   └── useCases/              # Pruebas de dominio
    └── Infraestructure/
        └── output/                # Pruebas de infraestructura
```

## 🛠️ Personalización

### Modificar el formato del CSV

Edita `scripts/generate-test-matrix.ts` en la función `generateCSV()`:

```typescript
const headers = [
  'ID',
  'Tu Nueva Columna',
  // ... más columnas
];
```

### Cambiar la clasificación de tipos

Modifica la lógica en `extractTestsFromFile()`:

```typescript
if (testDescription.includes('tu_palabra_clave')) {
  tipoPrueba = 'TuNuevoTipo';
}
```

### Agregar nuevos formatos de salida

Crea una nueva función generadora:

```typescript
function generateJSON(tests: TestCase[]): string {
  return JSON.stringify(tests, null, 2);
}
```

## 💡 Casos de Uso

### 1. Revisión de Cobertura
Identifica áreas con pocas pruebas comparando el número de casos por módulo.

### 2. Reporte para Stakeholders
Exporta el CSV a Excel y crea gráficos para presentaciones.

### 3. Gestión de Calidad
Filtra por prioridad "Alta" para revisar las pruebas más críticas.

### 4. Documentación
Usa el archivo Markdown para documentar el alcance de las pruebas.

### 5. Análisis de Tendencias
Ejecuta periódicamente y compara el crecimiento del número de pruebas.

## 🔍 Ejemplos de Uso

### Abrir CSV en Excel
1. Ejecuta `npm run test:matrix`
2. Abre `test-reports/matriz-pruebas.csv` con Excel
3. Los datos se separarán automáticamente por columnas

### Filtrar por Tipo de Prueba
En Excel:
1. Selecciona la columna "Tipo de Prueba"
2. Aplica un filtro
3. Selecciona "Error/Excepción" para ver solo pruebas críticas

### Crear Gráficos
En Excel:
1. Selecciona la columna "Módulo"
2. Inserta un gráfico de barras
3. Visualiza la distribución de pruebas por módulo

## 🤝 Contribuir

Si deseas mejorar el generador de matriz:

1. Edita `scripts/generate-test-matrix.ts`
2. Ejecuta `npm run test:matrix` para verificar
3. Revisa los archivos generados en `test-reports/`

## 📝 Mantenimiento

### Actualizar después de nuevas pruebas
Simplemente ejecuta:
```bash
npm run test:matrix
```

Los archivos se regenerarán con la información actualizada.

### Limpieza
Para eliminar archivos antiguos:
```bash
# Windows (PowerShell)
Remove-Item -Path test-reports/* -Recurse

# Linux/Mac
rm -rf test-reports/*
```

## 🐛 Solución de Problemas

### Error: "Cannot find module"
```bash
npm install
```

### Los archivos no se generan
Verifica que existan archivos `.test.ts` en la carpeta `test/`

### Formato incorrecto en CSV
Asegúrate de que tu editor use UTF-8 como codificación

## 📚 Recursos Adicionales

- [Documentación de Jest](https://jestjs.io/)
- [Formato CSV](https://tools.ietf.org/html/rfc4180)
- [Markdown Guide](https://www.markdownguide.org/)

## 📧 Soporte

Para reportar problemas o sugerencias:
1. Crea un issue en el repositorio
2. Contacta al equipo de desarrollo

---

**Versión:** 1.0.0  
**Última actualización:** Noviembre 2025  
**Mantenedor:** Equipo de Desarrollo NIIFCooperativa
