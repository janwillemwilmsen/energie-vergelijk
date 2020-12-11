const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // slowMo: 250  
        });
//   const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.energiedirect.nl');

    await page.setCookie({ 'name': 'cookieconsent', 'value': '3' });
    await page.setCookie({ 'name': 'gdprconsent', 'value': '3' });
    await page.reload({waitUntil: 'networkidle2'});

/////////////////////////////////////////////////

// Postcode en Huisnummer
await page.type('#wizard-postal', '5216EK');
await page.type('#wizard-housenumber', '27');

// Verbruik E G 
await page.type('#wizard-usage', '9191');
await page.type('#wizard-gas', '1010');

// Sumbit formulier
await page.click("#wizard-submit");

// Vertraag wacht tot prijs geladen is
await page.waitForSelector('#bestOffer-submit');

// Element om te screenshotten
const element = await page.$('body > div.jumbotron > div > div > div:nth-child(2) > ed-best-offer');      
await element.screenshot({path: 'energiedirect-1jaar-EG.png', fullPage: false}); 

// Element om in txt weg te schrijven
const now2 = new Date();
const Message2 =  await page.$eval('#bestOffer-PriceAfter', el => el.innerText);

console.log("Energiedirect -- 1e scenario -- 1jaar -- " + now2.getFullYear() + "-"+ now2.getMonth() + "-" + now2.getDate() + " -- " + Message2 );

fs.appendFileSync('energiedirect.txt', `Energiedirect -- 1e scenario -- 1jaar --  ${now2.getFullYear()}-${now2.getMonth()}-${now2.getDate()} -- ${Message2}`);
fs.appendFileSync('energiedirect.txt', '\n\n');

        // END 1e scenario 
/////////////////////////////////////////////////
        // Begin 2e scenario 

    // Gooi localstorage leeg
        // await page.evaluate(() => {  localStorage.clear();  });
        // await page.evaluate(() => {  localStorage.clear();  });

        // await page.deleteCookie(electricityGas);
        // await page.deleteCookie(...electricityGas);
        // browser.newPage({ context: 'another-context' });
        //   const page = await browser.newPage();

        await page.deleteCookie({'domain':'.www.energiedirect.nl','name': 'dms-data'});
        // await page.evaluate(() => {sessionStorage.clear() });
        await page.waitForTimeout(200);


        await page.goto('https://www.energiedirect.nl');


// Postcode en Huisnummer
await page.type('#wizard-postal', '5211Ak');
await page.type('#wizard-housenumber', '4');

// Verbruik E G 
await page.type('#wizard-usage', '600');
await page.type('#wizard-gas', '700');

// Sumbit formulier
await page.click("#wizard-submit");

// Vertraag wacht tot prijs geladen is
await page.waitForSelector('#bestOffer-submit');


await page.waitForTimeout(200);


// Klik op 2 jaar   (#bestOffer-0 is 1 jaar)
await page.click("#bestOffer-1");
await page.waitForTimeout(200);

await page.click(".dropdown-component-title");

await page.waitForTimeout(200);


// Element om te screenshotten
const element3 = await page.$('body > div.jumbotron > div > div > div:nth-child(2) > ed-best-offer');      
await element3.screenshot({path: 'energiedirect-2jaar-EG.png', fullPage: false}); 

// Element om in txt weg te schrijven
const now3 = new Date();
const Message3 =  await page.$eval('#bestOffer-PriceAfter', el => el.innerText);

console.log("Energiedirect -- 2e scenario -- 2jaar -- " + now3.getFullYear() + "-"+ now3.getMonth() + "-" + now3.getDate() + " -- " + Message3 );

fs.appendFileSync('energiedirect.txt', `Energiedirect -- 2e scenario -- 2jaar --  ${now3.getFullYear()}-${now3.getMonth()}-${now3.getDate()} -- ${Message3}`);
fs.appendFileSync('energiedirect.txt', '\n\n');

////////////////////////////////////////////////        
await page.waitForTimeout(5000);

console.log('done');

await browser.close()
})()

