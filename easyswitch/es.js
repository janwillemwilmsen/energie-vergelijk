const puppeteer = require('puppeteer');
const fs = require('fs');
// Toegevoegd om AB cookies te testen. Nog niet gedaan.
const cookies =  [
     {
        "domain": ".easyswitch.nl",
        "expirationDate": 1608320494,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_dc_gtm_UA-9786473-1",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "1",
        "id": 1
    },
    {
        "domain": ".easyswitch.nl",
        "expirationDate": 1671392434,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_ga",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "GA1.2.1173547973.1608295884",
        "id": 2
    },
    {
        "domain": ".easyswitch.nl",
        "expirationDate": 1671392434,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_ga_6X8B1XXDYC",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "GS1.1.1608317251.2.1.1608320434.0",
        "id": 3
    },
    {
        "domain": ".easyswitch.nl",
        "expirationDate": 1616096434,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_gcl_au",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "1.1.390555305.1608320434",
        "id": 4
    },
    {
        "domain": ".easyswitch.nl",
        "expirationDate": 1608406834,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_gid",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "GA1.2.500365199.1608320434",
        "id": 5
    },
    {
        "domain": ".easyswitch.nl",
        "expirationDate": 1608322235,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjAbsoluteSessionInProgress",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "0",
        "id": 6
    },
    {
        "domain": ".easyswitch.nl",
        "expirationDate": 1639856434,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjid",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "342eb23e-7824-4559-8205-f10b8268066b",
        "id": 7
    },
    {
        "domain": ".easyswitch.nl",
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjTLDTest",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": true,
        "storeId": "0",
        "value": "1",
        "id": 8
    },
    {
        "domain": ".easyswitch.nl",
        "expirationDate": 1608406834,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_uetsid",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "bc822220412f11eba0f451181ffa87dd",
        "id": 9
    },
    {
        "domain": ".easyswitch.nl",
        "expirationDate": 1609724434,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_uetvid",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "bc826420412f11eb93464d84a67e69a1",
        "id": 10
    },
    {
        "domain": "www.easyswitch.nl",
        "expirationDate": 1608320555,
        "hostOnly": true,
        "httpOnly": false,
        "name": "_hjIncludedInPageviewSample",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "1",
        "id": 11
    },
    {
        "domain": "www.easyswitch.nl",
        "expirationDate": 1608320555,
        "hostOnly": true,
        "httpOnly": false,
        "name": "_hjIncludedInSessionSample",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "0",
        "id": 12
    },
    {
        "domain": "www.easyswitch.nl",
        "hostOnly": true,
        "httpOnly": false,
        "name": "fcaid",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": true,
        "storeId": "0",
        "value": "f2cd82c6c5f687bf22a2573e8da8ba36871404e6a0d23041c61e408f488c43f3",
        "id": 13
    },
    {
        "domain": "www.easyswitch.nl",
        "hostOnly": true,
        "httpOnly": false,
        "name": "PHPSESSID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": true,
        "storeId": "0",
        "value": "ek47eaeq8ef2r36c1l5iff00f0",
        "id": 14
    },
    {
        "domain": "www.easyswitch.nl",
        "expirationDate": 1623872440,
        "hostOnly": true,
        "httpOnly": false,
        "name": "privacystatement",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "true",
        "id": 15
    }
    ];


(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // slowMo: 250  
        });
//   const browser = await puppeteer.launch();
  const context = await browser.createIncognitoBrowserContext();
  const page = await browser.newPage();
// Toegevoegd om AB cookies te testen. Nog niet gedaan.


  await page.setCookie(...cookies);

  const navigationPromise = page.waitForNavigation()
  

    await page.goto('https://www.easyswitch.nl/');


////////////////// BEGIN scenario 1 : 1 jaar 1 persoon ////////////////
await page.waitForSelector('#hero > div > div > div:nth-child(4) > div > div > div:nth-child(1) > div.mini-compare.mini-compare--horizontal.mini-compare--react.mini-compare--horizontal--white > div > div > div > form')

await page.type('#hero > div > div > div:nth-child(4) > div > div > div:nth-child(1) > div.mini-compare.mini-compare--horizontal.mini-compare--react.mini-compare--horizontal--white > div > div > div > form > div > div:nth-child(1) > div > div > div > div.sc-1weu5e2-0.suop3u-0.ctGxBS > div > div.sc-8mf10v-0.cPFIQz > input', '5216EK');
await page.type('#hero > div > div > div:nth-child(4) > div > div > div:nth-child(1) > div.mini-compare.mini-compare--horizontal.mini-compare--react.mini-compare--horizontal--white > div > div > div > form > div > div:nth-child(1) > div > div > div > div.sc-1weu5e2-0.suop3u-0.ksfNfm > div > div.sc-1weu5e2-0.suop3u-0.sc-19o4mq8-1.bbkhmx > div > div.sc-19o4mq8-3.bLEGAP > div > input', '27');


await page.waitForTimeout(2500);

 // emailveld
await page.type('#hero > div > div > div:nth-child(4) > div > div > div:nth-child(1) > div.mini-compare.mini-compare--horizontal.mini-compare--react.mini-compare--horizontal--white > div > div > div > form > div > div > div:nth-child(2) > div > div > div > input');

                                //*[@id="kiesJouwDeal"]/div/div/div[2]/div/div/div/div[3]/div/div/div/form/div/div/div[3]/div/button
const [button] = await page.$x("//*[@id='kiesJouwDeal']/div/div/div[2]/div/div/div/div[3]/div/div/div/form/div/div/div[3]/div/button[contains(., 'Start met vergelijken')]");
// const [button] = await page.$x("//button[contains(., 'Start met vergelijken')]");
if (button) {
    await button.click();
}
//*[@id="hero"]/div/div/div[4]/div/div/div[1]/div[3]/div/div/div/form/div/div/div[3]/div/button
// await page.setViewport({ width: 894, height: 1214 })

// await page.keyboard.press("Tab");
// await page.keyboard.press("Tab");

// Submit Formulier
await page.waitForTimeout(2500);

// const BUTTON_SELECTOR = 'form > div > div:nth-child(3) > div > div > button';
// await page.click(BUTTON_SELECTOR)


// page.keyboard.press('Enter');
// await page.click('#hero > div > div > div:nth-child(4) > div > div > div:nth-child(1) > div.mini-compare.mini-compare--horizontal.mini-compare--react.mini-compare--horizontal--white > div > div > div > form > div > div > div:nth-child(3) > div')
  
     
//// Je huidige leverancier
// weet niet keuze in dropdown
await page.select("currentprovider", "-1")


// Type energie - klik op : Stroom en Gas
await page.click('#esos-content > div > div > div > div > div:nth-child(2) > div > div > form > div:nth-child(4) > div:nth-child(1) > div > button.sc-6plppz-0.bspsKT > div:nth-child(2)');


/////////////////////////////////////////////////
await page.waitForTimeout(6000);
await navigationPromise


console.log('done');

await browser.close()
})()


