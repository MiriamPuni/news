const puppeteer = require("puppeteer");

export async function start() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.now14.co.il/tag/%D7%9E%D7%91%D7%96%D7%A7%D7%99%D7%9D/#518837', { waitUntil: 'networkidle0' });
    const trData = await page.$$eval('.archive-post-unit', units => {
      return units.map(unit => {
        const title = unit.querySelector('a').innerHTML.trim()
        const time = unit.querySelector('.time').innerHTML.trim()
        const text = unit.querySelector('p').innerHTML.trim()

        const link = unit.querySelector('a').href
        return { link, title ,time , text};
      });
    });

    await browser.close();
    return trData
}


