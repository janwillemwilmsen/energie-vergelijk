const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // slowMo: 250  
        });
//   const browser = await puppeteer.launch();
  const page = await browser.newPage();



    await page.goto('https://www.easyswitch.nl/');


////////////////// BEGIN scenario 1 : 1 jaar 1 persoon ////////////////

await page.type('#hero > div > div > div:nth-child(4) > div > div > div:nth-child(1) > div.mini-compare.mini-compare--horizontal.mini-compare--react.mini-compare--horizontal--white > div > div > div > form > div > div:nth-child(1) > div > div > div > div.sc-1weu5e2-0.suop3u-0.ctGxBS > div > div.sc-8mf10v-0.cPFIQz > input', '5216EK');
await page.type('#hero > div > div > div:nth-child(4) > div > div > div:nth-child(1) > div.mini-compare.mini-compare--horizontal.mini-compare--react.mini-compare--horizontal--white > div > div > div > form > div > div:nth-child(1) > div > div > div > div.sc-1weu5e2-0.suop3u-0.ksfNfm > div > div.sc-1weu5e2-0.suop3u-0.sc-19o4mq8-1.bbkhmx > div > div.sc-19o4mq8-3.bLEGAP > div > input', '27');


     

/////////////////////////////////////////////////
await page.waitForTimeout(5000);

console.log('done');

await browser.close()
})()


