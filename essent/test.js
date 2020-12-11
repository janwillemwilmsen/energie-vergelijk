
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 250 // slow down by 250ms
        });
//   const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.essent.nl');

//   await page.goto(url, {waitUntil: 'networkidle2'});
  await page.setCookie({ 'name': 'cookieconsent', 'value': '3' });
  await page.setCookie({ 'name': 'gdprconsent', 'value': '3' });
//   await page.goto(url, {waitUntil: 'networkidle2'});
  await page.reload({waitUntil: 'networkidle2'});

  await page.screenshot({path: 'essent-test.png'});

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  await page.evaluate(() => console.log(`url is ${location.href}`));

  await browser.close();
})();

 

