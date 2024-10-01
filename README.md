# Proyecto de Web Scraping: Referencias de JavaScript MDN

## Descripción
Este proyecto realiza web scraping en la página de referencias de JavaScript de MDN (Mozilla Developer Network). Su propósito principal es extraer una lista de referencias de JavaScript y exportarlas a un archivo Excel para facilitar su consulta y análisis.

## Características principales
- Scraping de la página de referencias de JavaScript de MDN
- Extracción de títulos y URLs de las referencias
- Exportación de datos a un archivo Excel
- Manejo de errores y registro de información en consola

## Requisitos previos
- Node.js
- npm (Node Package Manager)

## Dependencias
- puppeteer: Para la automatización del navegador y web scraping
- xlsx: Para la generación del archivo Excel

## Instalación
1. Clona este repositorio:
   ```
   git clone https://github.com/EliseyAgustin/TP_TL_Scraping.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd TP_TL_Scraping/Scraping_TL
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso
Para ejecutar el script de scraping, usa el siguiente comando en la terminal:
```
node scraper.js
```
El script realizará las siguientes acciones:
1. Abrirá un navegador headless
2. Navegará a la página de referencias de JavaScript de MDN
3. Extraerá la información de las referencias
4. Cerrará el navegador
5. Creará un archivo Excel llamado `javascript_references.xlsx` con los datos extraídos
6. Mostrará en la consola el número de referencias encontradas

## Estructura del proyecto
```
Scraping_TL/
│
├── scraper.js
├── package.json
├── javascript_references.xlsx (generado después de ejecutar el script)
└── README.md
```
