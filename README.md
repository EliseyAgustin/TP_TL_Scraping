# Proyecto de Web Scraping de Rankings de Lenguajes de Programación

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

Una empresa de tecnología está buscando mejorar su proceso de contratación de desarrolladores y necesita saber cuáles son los lenguajes de programación más populares y en demanda actualmente. El equipo de Recursos Humanos podria usar este script para:

1. **Identificar tendencias en los lenguajes de programación**: Al analizar los datos de multiples fuentes, el equipo puede identificar qué lenguajes estan en crecimiento o declive.
2. **Planificar necesidades de contratacion**: Con esta información, la empresa puede decidir qué habilidades son prioritarias para futuras contrataciones, orientando su búsqueda hacia lenguajes con mayor tendencia de crecimiento o popularidad.
3. **Formación y desarrollo**: Los datos pueden usarse para diseñar programas de capacitacion interna, asegurando que los desarrolladores actuales aprendan o se actualicen en los lenguajes de programación más relevantes.

Este proceso facilita la toma de decisiones estrategicas, asegurando que los recursos de la empresa se alineen con las tendencias actuales de la industria de programacion.
