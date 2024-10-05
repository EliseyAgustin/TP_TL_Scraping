const puppeteer = require('puppeteer')
const XLSX = require('xlsx')

async function scrapeTIOBERankings() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage()
  
  try {
    // Pagina de TIOBE
    await page.goto('https://www.tiobe.com/tiobe-index/', { waitUntil: 'networkidle0' })

    // Extraccion de ratings de lenguajes de programacion
    const rankings = await page.evaluate(() => {
      const rows = document.querySelectorAll('table.table-top20 tbody tr')
      return Array.from(rows).slice(0, 10).map(row => {
        const columns = row.querySelectorAll('td')
        return {
          rank: columns[0].textContent.trim(),
          language: columns[4].textContent.trim(),
          rating: columns[5].textContent.trim()
        };
      });
    });

    await browser.close();

    // Crear libro de trabajo en Excel
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(rankings)

    // Añade la hoja al Excel
    XLSX.utils.book_append_sheet(workbook, worksheet, "TIOBE Rankings")

    // Generar archivo Excel
    XLSX.writeFile(workbook, 'tiobe_rankings_2024.xlsx')

    console.log('Datos guardados en tiobe_rankings_2024.xlsx')
    console.log('Lenguajes encontrados:', rankings.length);
    console.log('Top 10 lenguajes:', rankings.map(r => r.language).join(', '))
  } catch (error) {
    console.error('Error durante el scraping:', error);
    await browser.close()
  }
}

scrapeTIOBERankings();
