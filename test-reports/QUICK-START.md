# 🚀 Guía Rápida - Matriz de Pruebas

## ✅ ¿Qué se generó?

Se crearon exitosamente **4 archivos** con información de **250 pruebas unitarias**:

### 📄 Archivos Disponibles

1. **`matriz-pruebas.csv`** (50 KB)
   - Matriz completa en formato CSV
   - Listo para Excel, Google Sheets
   - 250 casos de prueba con 10 columnas de información

2. **`matriz-pruebas.md`** (25 KB)
   - Documentación en formato Markdown
   - Organizada por módulos
   - Incluye estadísticas detalladas

3. **`estadisticas-pruebas.txt`** (1 KB)
   - Resumen ejecutivo
   - Estadísticas por categoría, tipo y módulo

4. **`README.md`** (3 KB)
   - Documentación del sistema
   - Instrucciones de uso

---

## 🎯 Comandos Principales

### Generar la Matriz
```bash
npm run test:matrix
```

### Abrir en Excel (PowerShell)
```powershell
.\scripts\open-test-matrix.ps1
```

O manualmente:
```powershell
Start-Process test-reports\matriz-pruebas.csv
```

---

## 📊 Resumen Estadístico

### Total de Pruebas: **250**

#### Por Categoría
- 🏛️ **Dominio**: 79 pruebas (31.6%)
- 🔧 **Infraestructura**: 171 pruebas (68.4%)

#### Por Tipo de Prueba
- 📝 **Normal**: 89 pruebas (35.6%)
- ⚠️ **Límite**: 84 pruebas (33.6%)
- ❌ **Error/Excepción**: 48 pruebas (19.2%)
- ✅ **Exitoso**: 29 pruebas (11.6%)

#### Top 5 Módulos con Más Pruebas
1. 👤 **UserGatewayAdapter**: 33 pruebas
2. 🎓 **StudentGatewayAdapter**: 31 pruebas
3. 🏫 **RoomGatewayAdapter**: 26 pruebas
4. 🔐 **AuthAdapter**: 20 pruebas
5. 📚 **RoomUCAdapter**: 15 pruebas

---

## 💡 Casos de Uso Comunes

### 1️⃣ Ver la Matriz en Excel
```bash
# Opción 1: Usar el script de PowerShell
.\scripts\open-test-matrix.ps1

# Opción 2: Abrir manualmente
# Doble clic en: test-reports\matriz-pruebas.csv
```

### 2️⃣ Filtrar por Prioridad Alta
En Excel:
1. Abre `matriz-pruebas.csv`
2. Selecciona la columna "Prioridad"
3. Filtra por "Alta"
4. Verás las 48 pruebas críticas de error/excepción

### 3️⃣ Buscar Pruebas de un Módulo Específico
En Excel:
1. Usa Ctrl+F
2. Busca el nombre del módulo (ej: "UserGateway")
3. O filtra la columna "Módulo"

### 4️⃣ Ver Estadísticas Rápidas
```bash
Get-Content test-reports\estadisticas-pruebas.txt
```

### 5️⃣ Compartir con el Equipo
Comparte cualquiera de estos archivos:
- CSV → Para análisis en hojas de cálculo
- MD → Para documentación en repositorios
- TXT → Para reportes rápidos

---

## 🔄 Actualización

Después de agregar nuevas pruebas:
```bash
npm run test:matrix
```

Los archivos se regenerarán automáticamente con la información actualizada.

---

## 📋 Estructura del CSV

| Columna | Ejemplo | Descripción |
|---------|---------|-------------|
| ID | TC001 | Identificador único |
| Archivo | UserUCAdapter.test.ts | Archivo de prueba |
| Módulo | UserUCAdapter | Módulo bajo prueba |
| Categoría | Dominio | Dominio o Infraestructura |
| Clase/Componente | UserUCAdapter | Clase testeada |
| Método/Función | getUserById | Método específico |
| Descripción de la Prueba | "debería retornar el usuario..." | Caso de prueba |
| Tipo de Prueba | Normal | Tipo de caso |
| Estado | Implementada | Estado actual |
| Prioridad | Normal | Prioridad del caso |

---

## 🎨 Crear Visualizaciones en Excel

### Gráfico de Barras por Módulo
1. Selecciona las columnas "Módulo" e "ID"
2. Insertar → Gráfico → Barra
3. Personaliza colores y títulos

### Gráfico Circular por Tipo
1. Crea una tabla dinámica
2. Fila: "Tipo de Prueba"
3. Valores: "Cuenta de ID"
4. Insertar → Gráfico Circular

### Tabla Dinámica por Categoría
1. Selecciona todos los datos
2. Insertar → Tabla Dinámica
3. Filas: "Categoría" y "Módulo"
4. Valores: "Cuenta de ID"

---

## 📱 Importar a Google Sheets

1. Ve a Google Sheets
2. Archivo → Importar
3. Selecciona `matriz-pruebas.csv`
4. Importar datos
5. ¡Listo! Ahora puedes compartir en línea

---

## 🛠️ Solución Rápida de Problemas

### ❓ No se genera el archivo
```bash
# Verifica que tengas los paquetes instalados
npm install

# Ejecuta nuevamente
npm run test:matrix
```

### ❓ El CSV no se abre correctamente
- Asegúrate de tener Excel instalado
- O ábrelo con Google Sheets
- O usa cualquier editor de texto

### ❓ Necesito otro formato
El script genera 3 formatos:
- CSV (para hojas de cálculo)
- MD (para documentación)
- TXT (para lectura rápida)

---

## 📞 Ayuda Adicional

- 📚 **Documentación completa**: `docs/MATRIZ-PRUEBAS.md`
- 📖 **Info del directorio**: `test-reports/README.md`
- 🧪 **Ejecutar pruebas**: `npm test`
- 📊 **Ver cobertura**: `npm run test:coverage`

---

## ✨ Características del Sistema

✅ Análisis automático de 27 archivos de prueba  
✅ Extracción de 250 casos de prueba  
✅ Clasificación automática por tipo  
✅ Priorización inteligente  
✅ Múltiples formatos de salida  
✅ Estadísticas detalladas  
✅ Listo para usar en Excel  

---

**¡Disfruta analizando tus pruebas!** 🎉

Para regenerar en cualquier momento:
```bash
npm run test:matrix
```
