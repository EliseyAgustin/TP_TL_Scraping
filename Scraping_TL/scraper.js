const puppeteer = require('puppeteer')
const XLSX = require('xlsx')

async function scrapearLenguajes() {
    const browser = await puppeteer.launch({headless: "new"})
    const page = await browser.newPage()
    
    try {
        // Scraping TIOBE
        await page.goto('https://www.tiobe.com/tiobe-index/')
        const datosTiobe = await page.evaluate(() => {
            const filas = Array.from(document.querySelectorAll('table#top20 tr')).slice(1)
            return filas.map(fila => {
                const celdas = fila.querySelectorAll('td')
                return {
                    posicion: celdas[0].textContent.trim(),
                    lenguaje: celdas[4].textContent.trim(),
                    porcentaje: celdas[5].textContent.trim()
                };
            });
        });

        // Scraping Tecsify
        await page.goto('https://tecsify.com/blog/top-lenguajes-2024/')
        const datosTecsify = await page.evaluate(() => {
            const filas = Array.from(document.querySelectorAll('article table tr')).slice(1)
            return filas.map(fila => {
                const celdas = fila.querySelectorAll('td')
                if (celdas.length >= 3) {
                    return {
                        posicion: celdas[0].textContent.trim(),
                        lenguaje: celdas[4].textContent.trim(),
                        porcentaje: celdas[5].textContent.trim()
                    };
                }
            }).filter(item => item);
        });

        // Scraping StaticTimes
        await page.goto('https://statisticstimes.com/tech/top-computer-languages.php')
        const datosStaticTimes = await page.evaluate(() => {
            const filas = Array.from(document.querySelectorAll('#table_id1 tbody tr'))
            return filas.map(fila => {
                const celdas = fila.querySelectorAll('td')
                if (celdas.length >= 5) {
                    return {
                        posicion: celdas[0].textContent.trim(),
                        lenguaje: celdas[2].textContent.trim(),
                        porcentaje: celdas[3].textContent.trim(),
                        tendencia: celdas[4].textContent.trim()
                    };
                }
            }).filter(item => item);
        });

        // Excel con hojas separadas
        const wb = XLSX.utils.book_new()
        
        // Crear hojas para cada fuente
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(datosTiobe), "TIOBE")
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(datosTecsify), "Tecsify")
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(datosStaticTimes), "StaticTimes")

        // Guardar archivo
        XLSX.writeFile(wb, 'ranking_lenguajes.xlsx')
        console.log('Archivo Excel creado exitosamente')

    } catch (error) {
        console.error('Error durante el scraping:', error)
    } finally {
        await browser.close();
    }
}

scrapearLenguajes()
