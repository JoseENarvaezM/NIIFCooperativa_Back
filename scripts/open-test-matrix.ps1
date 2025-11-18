# Script para abrir la matriz de pruebas en Excel
# Primero genera la matriz, luego la abre automáticamente

Write-Host "🔄 Generando matriz de pruebas..." -ForegroundColor Cyan
npm run test:matrix

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Matriz generada exitosamente!" -ForegroundColor Green
    
    $csvPath = "test-reports\matriz-pruebas.csv"
    
    if (Test-Path $csvPath) {
        Write-Host "📊 Abriendo archivo CSV en Excel..." -ForegroundColor Yellow
        Start-Process $csvPath
        
        Write-Host "`n✨ También se generaron:" -ForegroundColor Cyan
        Write-Host "   📄 test-reports\matriz-pruebas.md" -ForegroundColor White
        Write-Host "   📈 test-reports\estadisticas-pruebas.txt" -ForegroundColor White
        Write-Host "   📚 test-reports\README.md" -ForegroundColor White
    } else {
        Write-Host "❌ Error: No se encontró el archivo CSV" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Error al generar la matriz de pruebas" -ForegroundColor Red
}
