# Proyecto de Web Scraping de Rankings de Lenguajes de Programacion

Este proyecto utiliza `Puppeteer` para automatizar el navegador y extraer datos de varias páginas web sobre los lenguajes de programacion más populares en el año. Los datos se consolidan en un archivo de Excel usando `XLSX`, con cada sitio web representado en una hoja separada.

## Estructura del Codigo

El código realiza las siguientes operaciones:

1. **Inicializacion**: Se inicia un navegador sin interfaz gráfica (headless) mediante `Puppeteer` para navegar de forma automatizada.
2. **Scraping de páginas web**: 
   - **TIOBE**: Extrae el ranking de los lenguajes de programación de [TIOBE Index](https://www.tiobe.com/tiobe-index/).
   - **Tecsify**: Extrae la lista de lenguajes desde [Tecsify](https://tecsify.com/blog/top-lenguajes-2024/).
   - **StaticTimes**: Extrae datos adicionales como tendencia de los lenguajes desde [Statistics Times](https://statisticstimes.com/tech/top-computer-languages.php).
3. **Creacion de archivo Excel**: Los datos extraídos se organizan en hojas separadas (una por cada fuente) y se guardan en un archivo Excel (`ranking_lenguajes.xlsx`).
4. **Cierre de navegador**: Se cierra el navegador tras finalizar la extraccion y generacion del archivo.

### Requisitos previos

Para ejecutar este codigo, es necesario instalar las siguientes dependencias:

```bash
npm install puppeteer xlsx
```

### Ejecucion del Script

Para ejecutar el script, utiliza el siguiente comando en la terminal:

```bash
node nombre_del_archivo.js
```

El archivo Excel (`ranking_lenguajes.xlsx`) se generara en el directorio donde se ejecuta el script, conteniendo una hoja para cada fuente de datos con su respectivo ranking de lenguajes de programacion.

## Escenario de Uso: Departamento de Recursos Humanos de una Empresa de Tecnologia

Una empresa de software puede tomar decisiones informadas sobre qué lenguajes de programacion adoptar en sus futuros proyectos, asegurandose de seguir las tendencias actuales del mercado. Esto no solo les permite mantenerse actualizados con las tecnologias emergentes, sino que también garantiza que sus desarrolladores esten trabajando con herramientas que tienen una comunidad activa y un soporte robusto.

## Puntos importantes:
1- Identificacion de tendencias: Permite a las empresas reconocer que lenguajes estan en alza y cuales están perdiendo popularidad, ayudandoles a mantenerse competitivas.
2- Optimizacion de recursos: Facilita la planificacion de recursos, enfocandose en la capacitacion de lenguajes que estaran en alta demanda, maximizando el retorno de inversión en formación.
3- Alineacion con el mercado: Adoptar lenguajes populares mejora la capacidad de contratacion de desarrolladores y asegura que el software este alineado con las tendencias del mercado.

Este proceso facilita la toma de decisiones estrategicas, asegurando que los recursos de la empresa se alineen con las tendencias actuales de la industria de programacion.
