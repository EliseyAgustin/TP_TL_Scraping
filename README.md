# Proyecto de Web Scraping: Ranking de Lenguajes de Programación

Este proyecto consiste en un script en Node.js que realiza scraping de tres sitios web diferentes para obtener el ranking de los lenguajes de programación más populares en el mercado. El script navega por las páginas, extrae la información relevante y genera un archivo Excel que organiza estos datos en hojas de cálculo separadas para cada fuente de datos.

## Descripción

El script utiliza la biblioteca Puppeteer para automatizar la navegación y extracción de datos de las páginas web de TIOBE, Tecsify y Statistics Times. Una vez recopilada la información, utiliza la biblioteca `xlsx` para almacenar los datos en un archivo Excel llamado `ranking_lenguajes.xlsx`, lo que permite un análisis más sencillo de los rankings en cada una de las fuentes.

## Requisitos previos

- Node.js
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona este repositorio o descarga el script.
2. Navega al directorio del proyecto.
3. Instala las dependencias necesarias ejecutando:

    ```bash
    npm install puppeteer xlsx
    ```

## Uso

Para ejecutar el script y obtener el archivo Excel con los rankings de lenguajes de programación, usa el siguiente comando en la terminal:

    ```bash
    node scraper.js
    ```

Al finalizar, el script generará un archivo Excel llamado `ranking_lenguajes.xlsx` en el mismo directorio.

## Estructura del código

El script principal `scraper.js` contiene las siguientes partes clave:

1. **Configuración de Puppeteer**: Inicializa un navegador en modo headless.
2. **Navegación y scraping de datos**: 
   - **TIOBE**: Extrae posición, lenguaje y porcentaje de popularidad de la tabla principal.
   - **Tecsify**: Extrae posición, lenguaje y porcentaje de una tabla en un artículo específico.
   - **Statistics Times**: Extrae posición, lenguaje, porcentaje y tendencia de popularidad.
3. **Procesamiento de datos**: Organiza los datos extraídos en un formato JSON.
4. **Generación del archivo Excel**: Utiliza `xlsx` para crear y guardar un archivo con una hoja de cálculo separada para cada fuente de datos.

## Análisis y utilidad

Este proyecto es ideal para quienes desean analizar y comparar las tendencias de lenguajes de programación utilizando múltiples fuentes de datos. Una empresa de tecnología podría usar estos datos para identificar los lenguajes más demandados y tomar decisiones informadas sobre el uso de tecnologías en sus proyectos. Este enfoque permite un análisis integral y actualizado del mercado de lenguajes de programación.
