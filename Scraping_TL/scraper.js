const puppeteer = require('puppeteer');
const XLSX = require('xlsx');

async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Tiobe
  await page.goto('https://www.tiobe.com/tiobe-index/');
  const tiobeData = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('.language-ranking tbody tr'));
    return rows.map(row => {
      const cells = Array.from(row.querySelectorAll('td'));
      return {
        rank: cells[0].textContent.trim(),
        language: cells[1].textContent.trim(),
        percentage: cells[2].textContent.trim(),
        year: cells[3].textContent.trim()
      };
    });
  });

  // StackOverflow
  await page.goto('https://survey.stackoverflow.co/2024/technology#most-popular-technologies');
  const stackoverflowData = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('#technologies-most-popular tbody tr'));
    return rows.map(row => {
      const cells = Array.from(row.querySelectorAll('td'));
      return {
        rank: cells[0].textContent.trim(),
        technology: cells[1].textContent.trim(),
        percentage: cells[2].textContent.trim(),
        year: cells[3].textContent.trim()
      };
    });
  });

  // Pypl
  await page.goto('https://pypl.github.io/PYPL.html');
  const pyplData = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('#data-table tbody tr'));
    return rows.map(row => {
      const cells = Array.from(row.querySelectorAll('td'));
      return {
        rank: cells[0].textContent.trim(),
        language: cells[1].textContent.trim(),
        year: cells[2].textContent.trim(),
        rank_last_year: cells[3].textContent.trim(),
        change: cells[4].textContent.trim()
      };
    });
  });

  await browser.close();

  // Guardar los datos en un archivo Excel
  const workbook = XLSX.utils.book_new();
  const tiobeSheet = XLSX.utils.json_to_sheet(tiobeData);
  XLSX.utils.book_append_sheet(workbook, tiobeSheet, 'Tiobe');
  const stackoverflowSheet = XLSX.utils.json_to_sheet(stackoverflowData);
  XLSX.utils.book_append_sheet(workbook, stackoverflowSheet, 'StackOverflow');
  const pyplSheet = XLSX.utils.json_to_sheet(pyplData);
  XLSX.utils.book_append_sheet(workbook, pyplSheet, 'Pypl');
  XLSX.writeFile(workbook, 'data.xlsx');
}

scrapeData();
