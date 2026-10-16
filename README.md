# ATLAS · Bitácora personal de entrenamiento

Aplicación web local-first para registrar entrenamientos, medidas corporales y nutrición, y generar un informe semanal para revisar el progreso del proyecto ATLAS. No usa cuentas, APIs, analítica externa ni servicios de pago.

## Cómo usarla gratis

- **Uso rápido en computadora:** abre `index.html` en un navegador moderno. El registro de datos funciona en el mismo navegador; algunas funciones de instalación/offline requieren servir la carpeta por HTTP/HTTPS.
- **Uso recomendado con instalación y modo offline:** publica la carpeta estática en un hosting gratuito de tu elección o ejecútala desde un servidor local estático. El service worker requiere `localhost` o HTTPS. No se necesita backend.
- **Importante:** los datos se guardan en `localStorage` del navegador/dispositivo. No se sincronizan automáticamente entre celular y computadora. No borres los datos del sitio sin exportar antes un respaldo.

## Reporte semanal ATLAS

1. Abre la pestaña **Reporte**.
2. Selecciona las fechas que quieras revisar y pulsa **Actualizar reporte**.
3. **Descargar reporte JSON** genera el informe estructurado para compartirlo con ChatGPT.
4. **Descargar series CSV** genera una tabla con cada serie registrada, ideal para hojas de cálculo.
5. **Imprimir / Guardar PDF** abre un informe legible; desde el diálogo de impresión del navegador elige “Guardar como PDF”. Si el navegador bloquea la ventana emergente, se descarga un HTML que puedes abrir e imprimir.

Los promedios de nutrición solo usan días con alimentos registrados. Los datos ausentes se dejan como no disponibles; no se inventan. El volumen se calcula como peso registrado en kg multiplicado por repeticiones, y es una métrica de seguimiento, no una estimación de calorías.

## Respaldos

Usa el botón de ajustes/engranaje y descarga un respaldo JSON con frecuencia. Guárdalo fuera del navegador. Para mover tus datos a otro dispositivo, abre la app allí y restaura ese archivo desde el mismo menú. El reporte semanal no sustituye al respaldo completo.

## Privacidad y costo

Todo el cálculo del informe se realiza localmente en el navegador. La app no transmite automáticamente los datos. Compartir el JSON/CSV/PDF con otra persona o servicio es una acción manual. El proyecto no requiere API keys, suscripciones ni bases de datos alojadas.
