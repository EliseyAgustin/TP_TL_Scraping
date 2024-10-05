# Proyecto de Web Scraping: Ranking Lenguajes de Programacion

Este proyecto consiste en un script de Node.js que realiza web scraping del índice TIOBE para obtener los rankings de los lenguajes de programación más populares.

## Descripción

El script utiliza Puppeteer para navegar y extraer datos de la página web del índice TIOBE. Luego, guarda estos datos en un archivo Excel para su posterior análisis.

## Requisitos previos

- Node.js
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona este repositorio o descarga el script.
2. Navega al directorio del proyecto.
3. Instala las dependencias necesarias:

    ```
     npm install puppeteer xlsx
    ```

## Uso

Para ejecutar el script, usa el siguiente comando en la terminal:

    ```bash
    node scraper.js
    ```

El script generará un archivo Excel llamado `tiobe_rankings_2024.xlsx` en el mismo directorio.

## Estructura del código

El script principal `scraper.js` contiene las siguientes partes clave:

1. **Configuración de Puppeteer**: Inicializa un navegador headless.
2. **Navegación a la página**: Accede a la página del índice TIOBE.
3. **Extracción de datos**: Utiliza `page.evaluate()` para extraer los datos de la tabla de rankings.
4. **Procesamiento de datos**: Organiza los datos extraídos en un formato estructurado.
5. **Generación del archivo Excel**: Utiliza la biblioteca `xlsx` para crear y guardar un archivo Excel con los datos extraídos.

## Análisis y utilidad

Este script de web scraping del índice TIOBE es útil por varias razones:

1. **Monitoreo de tendencias**: Permite seguir las tendencias en la popularidad de los lenguajes de programación a lo largo del tiempo.
2. **Automatización de recopilación de datos**: Ahorra tiempo al automatizar la recopilación de datos que de otro modo requeriría una extracción manual.
5. **Análisis comparativo**: Facilita la comparación de la popularidad de diferentes lenguajes de programación de manera rápida y eficiente.
6. **Visualización de datos**: Al exportar los datos a Excel, se simplifica el proceso de crear visualizaciones y gráficos para presentaciones o informes.
7. **Seguimiento histórico**: Ejecutando el script regularmente, se puede construir un registro histórico de los cambios en los rankings de los lenguajes de programación.

Este script sirve como una herramienta para que cualquier persona que este interesada en mantenerse al día con las tendencias en el mundo de la programación, ya sea para desarrollo profesional, planificación estratégica o investigación académica.
