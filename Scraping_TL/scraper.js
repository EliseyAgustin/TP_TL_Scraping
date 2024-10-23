const puppeteer = require('puppeteer')
const XLSX = require('xlsx')

async function scrapeRankings() {
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage()

    try {
        // Pagina de TIOBE
        await page.goto('https://www.tiobe.com/tiobe-index/', { waitUntil: 'networkidle0' })
        const tiobeRankings = await page.evaluate(() => {
            const rows = document.querySelectorAll('table.table-top20 tbody tr')
            return Array.from(rows).slice(0, 10).map(row => {
                const columns = row.querySelectorAll('td');
                return {
                    rank: columns[0].textContent.trim(),
                    language: columns[4].textContent.trim(),
                    rating: columns[5].textContent.trim()
                };
            });
        });

        // Pagina de PYPL
        await page.goto('https://pypl.github.io/PYPL.html', { waitUntil: 'networkidle0' })
        const pyplRankings = await page.evaluate(() => {
            const rows = document.querySelectorAll('table#languages tbody tr')
            return Array.from(rows).slice(0, 10).map(row => {
                const columns = row.querySelectorAll('td')
                return {
                    rank: columns[0].textContent.trim(),
                    language: columns[1].textContent.trim(),
                    rating: columns[2].textContent.trim()
                };
            });
        });

        // Pagina de Stack Overflow Trends
        await page.goto('https://survey.stackoverflow.co/2024/technology/', { waitUntil: 'networkidle0' })
        const stackOverflowRankings = await page.evaluate(() => {
            const rows = document.querySelectorAll('div[data-type="Most loved, dreaded, and wanted languages"] .bar-chart-bar')
            return Array.from(rows).slice(0, 10).map((row, index) => {
                const language = row.querySelector('div.bar-name').textContent.trim()
                const rating = row.querySelector('div.bar-percentage').textContent.trim()
                return {
                    rank: (index + 1).toString(),
                    language: language,
                    rating: rating
                };
            });
        });

        await browser.close();

        // Crear libro de trabajo en Excel
        const workbook = XLSX.utils.book_new()

        // Añadir TIOBE Rankings
        const tiobeWorksheet = XLSX.utils.json_to_sheet(tiobeRankings)
        XLSX.utils.book_append_sheet(workbook, tiobeWorksheet, "TIOBE Rankings")

        // Añadir PYPL Rankings
        const pyplWorksheet = XLSX.utils.json_to_sheet(pyplRankings)
        XLSX.utils.book_append_sheet(workbook, pyplWorksheet, "PYPL Rankings")

        // Añadir Stack Overflow Rankings
        const stackOverflowWorksheet = XLSX.utils.json_to_sheet(stackOverflowRankings)
        XLSX.utils.book_append_sheet(workbook, stackOverflowWorksheet, "Stack Overflow Rankings")

        // Generar archivo Excel
        XLSX.writeFile(workbook, 'programming_language_rankings_2024.xlsx')
        console.log('Datos guardados en programming_language_rankings_2024.xlsx')
    } catch (error) {
        console.error('Error durante el scraping:', error)
    }
}

scrapeRankings();
