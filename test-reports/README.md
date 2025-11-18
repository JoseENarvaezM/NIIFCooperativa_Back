# 📊 Matriz de Pruebas Unitarias - Documentación

Este directorio contiene la matriz de pruebas unitarias generada automáticamente a partir de los archivos de prueba del proyecto.

## 📁 Archivos Generados

### 1. `matriz-pruebas.csv`
Archivo CSV que contiene todos los casos de prueba con la siguiente estructura:

| Columna | Descripción |
|---------|-------------|
| **ID** | Identificador único del caso de prueba (TC001, TC002, etc.) |
| **Archivo** | Nombre del archivo de prueba |
| **Módulo** | Nombre del módulo bajo prueba |
| **Categoría** | Dominio o Infraestructura |
| **Clase/Componente** | Clase o componente que se está probando |
| **Método/Función** | Método o función específica bajo prueba |
| **Descripción de la Prueba** | Descripción completa del caso de prueba |
| **Tipo de Prueba** | Normal, Exitoso, Error/Excepción, o Límite |
| **Estado** | Estado actual (Implementada) |
| **Prioridad** | Alta, Media, o Normal |

### 2. `estadisticas-pruebas.txt`
Archivo de texto con estadísticas resumidas:
- Total de pruebas
- Distribución por categoría (Dominio vs Infraestructura)
- Distribución por tipo de prueba
- Distribución por módulo

### 3. `matriz-pruebas.md`
Documento Markdown con formato legible que incluye:
- Estadísticas generales
- Detalle por módulo con tablas organizadas

## 🚀 Cómo Generar la Matriz

### Opción 1: Usando npm script (Recomendado)
```bash
npm run test:matrix
```

### Opción 2: Ejecutar directamente con ts-node
```bash
npx ts-node scripts/generate-test-matrix.ts
```

## 📈 Tipos de Prueba

El sistema clasifica automáticamente las pruebas en:

- **Normal**: Casos de prueba estándar que verifican funcionalidad básica
- **Exitoso**: Casos que verifican operaciones exitosas específicas
- **Error/Excepción**: Casos que verifican manejo de errores y excepciones
- **Límite**: Casos que prueban valores límite, null, undefined, vacíos, etc.

## 🎯 Prioridades

Las prioridades se asignan automáticamente:

- **Alta**: Pruebas de error/excepción (críticas para la estabilidad)
- **Media**: Pruebas de límite (importantes para robustez)
- **Normal**: Pruebas normales y exitosas

## 📊 Estadísticas Actuales

**Total de pruebas:** 250

### Por Categoría
- **Dominio**: 79 pruebas (31.6%)
- **Infraestructura**: 171 pruebas (68.4%)

### Por Tipo
- **Normal**: 89 pruebas (35.6%)
- **Límite**: 84 pruebas (33.6%)
- **Error/Excepción**: 48 pruebas (19.2%)
- **Exitoso**: 29 pruebas (11.6%)

## 🔄 Actualización

La matriz se regenera automáticamente cada vez que ejecutas el comando. Los archivos anteriores se sobrescriben con la información más reciente.

## 📝 Uso del CSV

El archivo CSV puede ser:
- Importado a Excel o Google Sheets
- Usado en herramientas de gestión de pruebas
- Analizado con herramientas de BI
- Compartido con el equipo de QA

## 🛠️ Personalización

Si necesitas modificar el formato o agregar campos adicionales, edita el archivo:
```
scripts/generate-test-matrix.ts
```

## 📧 Soporte

Para reportar problemas o sugerencias sobre la matriz de pruebas, contacta al equipo de desarrollo.

---

**Última actualización:** Generada automáticamente
**Versión del script:** 1.0.0
