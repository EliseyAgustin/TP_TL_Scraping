const puppeteer = require('puppeteer');
const XLSX = require('xlsx');

async function scrapeJavaScriptReferences() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  try {
    //JavaScript en MDN
    await page.goto('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference', { waitUntil: 'networkidle0' });

    //Extraer informacion de referencias de JavaScript
    const references = await page.evaluate(() => {
      const items = document.querySelectorAll('#sidebar-quicklinks a');
      return Array.from(items).map(item => {
        return {
          title: item.textContent.trim(),
          url: new URL(item.href, window.location.origin).href
        };
      });
    });

    await browser.close();

    //Crear un libro de trabajo de Excel
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(references);

    //Añadir la hoja al libro
    XLSX.utils.book_append_sheet(workbook, worksheet, "JavaScript References");

    //Generar Excel
    XLSX.writeFile(workbook, 'javascript_references.xlsx');

    console.log('Datos guardados en javascript_references.xlsx');
    console.log('Referencias encontradas:', references.length);
  } catch (error) {
    console.error('Error durante el scraping:', error);
    await browser.close();
  }
}

scrapeJavaScriptReferences();