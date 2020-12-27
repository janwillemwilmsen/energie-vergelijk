const puppeteer = require('puppeteer');
const fs = require('fs');
// Toegevoegd om AB cookies te testen. Nog niet gedaan.
const cookies =   [{
        "domain": ".overstappen.nl",
        "expirationDate": 1671469180,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_ga",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "GA1.2.61793172.1608397103",
        "id": 1
    },
    {
        "domain": ".overstappen.nl",
        "expirationDate": 1671469146,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_ga_Z1X27LTGWF",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "GS1.1.1608397103.1.1.1608397146.0",
        "id": 2
    },
    {
        "domain": ".overstappen.nl",
        "expirationDate": 1623949146.514375,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_gcl_au",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "1.1.2080543138.1608397103",
        "id": 3
    },
    {
        "domain": ".overstappen.nl",
        "expirationDate": 1608483580,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_gid",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "GA1.2.1064889176.1608397104",
        "id": 4
    },
    {
        "domain": ".overstappen.nl",
        "expirationDate": 1608399106,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjAbsoluteSessionInProgress",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "0",
        "id": 5
    },
    {
        "domain": ".overstappen.nl",
        "expirationDate": 1608399106,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjFirstSeen",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "1",
        "id": 6
    },
    {
        "domain": ".overstappen.nl",
        "expirationDate": 1639933104,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_hjid",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "44da69b5-d14e-4d61-aa51-396686a5da33",
        "id": 7
    },
    {
        "domain": ".overstappen.nl",
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
        "domain": ".overstappen.nl",
        "expirationDate": 1623949146.514409,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_tdbu",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "t1608397146465||_ga~~GA1.1.61793172.1608397103||_uetvid~~67bf5ea0421b11eb955d45b76ab744b0||_gcl_au~~1.1.2080543138.1608397103",
        "id": 9
    },
    {
        "domain": ".overstappen.nl",
        "expirationDate": 1623949146.514443,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_tdid",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "61793172.1608397103_1_1",
        "id": 10
    },
    {
        "domain": ".overstappen.nl",
        "expirationDate": 1608483545,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_uetsid",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "67bf05a0421b11ebb24849b1bd36dce8",
        "id": 11
    },
    {
        "domain": ".overstappen.nl",
        "expirationDate": 1623949146.514337,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_uetvid",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "67bf5ea0421b11eb955d45b76ab744b0",
        "id": 12
    },
    {
        "domain": "www.overstappen.nl",
        "expirationDate": 1608397385,
        "hostOnly": true,
        "httpOnly": false,
        "name": "_hjIncludedInPageviewSample",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "1",
        "id": 13
    },
    {
        "domain": "www.overstappen.nl",
        "expirationDate": 1608397385,
        "hostOnly": true,
        "httpOnly": false,
        "name": "_hjIncludedInSessionSample",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "1",
        "id": 14
    },
    {
        "domain": "www.overstappen.nl",
        "expirationDate": 1639933104,
        "hostOnly": true,
        "httpOnly": false,
        "name": "_mailmunch_visitor_id",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "289d204d-7928-4bce-bbb3-752270b99cf2",
        "id": 15
    },
    {
        "domain": "www.overstappen.nl",
        "hostOnly": true,
        "httpOnly": false,
        "name": "fcaid",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": true,
        "storeId": "0",
        "value": "dc007145048256d64ba684f51ce4d62b7c943f23cf08d6aa96e1402c392c479a",
        "id": 16
    },
    {
        "domain": "www.overstappen.nl",
        "expirationDate": 1639933145,
        "hostOnly": true,
        "httpOnly": false,
        "name": "mailmunch_second_pageview",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "true",
        "id": 17
    },
    {
        "domain": "www.overstappen.nl",
        "expirationDate": 1639933142,
        "hostOnly": true,
        "httpOnly": false,
        "name": "userId",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "b0a6ec075afb00369cd7181c0e361cafd5cf02aa",
        "id": 18
    },
    {
        "domain": "www.overstappen.nl",
        "hostOnly": true,
        "httpOnly": false,
        "name": "wordpress_google_apps_login",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": true,
        "storeId": "0",
        "value": "fd8fc8dfd7e2ff408f89278f5a14219b",
        "id": 19
    }
    ];


(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // devtools: true, 
        // slowMo: 250  
        });
//   const browser = await puppeteer.launch();
const context = await browser.createIncognitoBrowserContext();
const page = await context.newPage();


// Toegevoegd om AB cookies te testen. Nog niet gedaan.
  await page.setCookie(...cookies);

  const navigationPromise = page.waitForNavigation()
  
  await page.setViewport({
    width: 1240,
    height: 1080,
  });
    await page.goto('https://www.overstappen.nl/energie/');

    await page.waitForTimeout(2000);

// POSTCODE
  await page.waitForSelector('.input_user_zipcode .postcodeField')
  await page.click('.input_user_zipcode .postcodeField')
  await page.type('.input_user_zipcode .postcodeField', '5223 LG')

  await page.waitForTimeout(3000);

// HUISNUMMER
  await page.waitForSelector('.input_user_housenumber .housenumberField')
  await page.click('.input_user_housenumber .housenumberField')
  await page.type('.input_user_housenumber .housenumberField','271')

  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");  
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);

// WACHT OP BUTTON EN KLIK OP BUTTON
await page.click('#esos-widget button') 
// await page.waitForTimeout(6000);
// await page.click('#esos-widget button') 

await page.waitForTimeout(2000);
await page.waitForSelector('.esos-comparator-energy-userdata')

// VOLGENDE PAGINA - Kies huidige leverancier = Geen idee
await page.waitForTimeout(1000);
await page.select('select[name="currentprovider"]', '-1');

// Type energie - klik op : Stroom en Gas
const [buttonTypeEnergie] = await page.$x('//div[text() = "Stroom en gas"]');
await buttonTypeEnergie.click({clickCount:1})

// await page.click('.sc-1dtkxxb-0 > .sc-1frk1w7-0 > .tz5sji-0 > .sc-6plppz-0:nth-child(1) > .sc-1qfopg-0')
// await page.click('/html/body/div[1]/div[1]/main/div/div/div/div/div/div[2]/div/div/form/div[4]/div[1]/div/button[1]/div[2]')
// await page.click('//div[@class="esos-comparator-energy-userdata"]//button[1]')
// await page.click('//div[@class="esos-comparator-energy-userdata"]//button[position()=1]')
// await page.click('//div[@class="esos-comparator-energy-userdata"]//button[1]')
// await page.click(' #esos-widget button') 
// const [button] = await page.$x("button[contains(., 'Stroom en gas')]");
// const [button] = await page.$x("//button[text()='Stroom en gas']");
// if (button) {
//     await button.click();
// }


// Wat is je jaarverbruik? -- ik weet mijn jaarverbruik
const [buttonWeetJaarVerbruik] = await page.$x('//button[text() = "Ik weet mijn jaarverbruik"]');
await buttonWeetJaarVerbruik.press('Enter')



// ELEK verbuik
const elekVerbruik = (await page.$x("//input[@name='electricityusagehigh']"))[0];
await elekVerbruik.click({clickCount: 3});
await elekVerbruik.press('Backspace'); 
elekVerbruik.type("1245");

// await page.waitForSelector('//body//div[@class="esos-comparator-energy-userdata"]//input[@name="electricityusagehigh"]')
// await page.click('//body//div[@class="esos-comparator-energy-userdata"]//input[@name="electricityusagehigh"]')
// await page.type('//body//div[@class="esos-comparator-energy-userdata"]//input[@name="electricityusagehigh"]', '3210')

// GAS verbruik
const gasVerbruik = (await page.$x("//input[@name='gasusage']"))[0];
await gasVerbruik.click({clickCount: 3});
await gasVerbruik.press('Backspace'); 
gasVerbruik.type("234");


// wacht
await page.waitForTimeout(1000);


/// Klik op ToonBesteDeals
 const [buttonClickBestedeals] = (await page.$x('//button[text() = "Toon beste deals"]'));
 await buttonClickBestedeals.click({clickCount:1})


// wacht
await page.waitForTimeout(1000);


 // RESULTATEN PAGINA 
 await page.waitForSelector('.esos-comparator-energy-app')
 await page.reload({waitUntil: 'networkidle2'});




// WERKT
// const elements = await page.$x('//input[@name="isFreeToTerminate" and @value="true"]');
// await elements[0].click({clickCount:1});
  

const [elements] = (await page.$x('//input[@name="isFreeToTerminate" and @value]'));
// await elements[0].click({clickCount:1});
await elements.click({clickCount:3});
/// fucking UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'click' of undefined
/// daarom 4x SHIFT TAB OM 3 JAAR TE selecteren
await page.waitForTimeout(1000);

await page.keyboard.down('Shift');
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');
await page.keyboard.up('Shift');
await page.keyboard.press('Space');
 
await page.waitForTimeout(5000);


// await page.waitForXPath('//input[@name="contractDuration" and @type="checkbox" and @value="\\36"]');
// const elements = await page.$x('//input[@name="contractDuration" and @type="checkbox" and @value="\\36"]');
// await elements[0].click({clickCount:1});

// await page.waitForXPath('//input[@name="contractDuration" and @type="checkbox" and @value="\\36"]');
// const elements = await page.$x('//input[@name="contractDuration" and @type="checkbox" and @value="\\36"]');
// await elements[0].click({clickCount:1});

// await page.waitForXPath('//input[@name="isFreeToTerminate" and @value="true"]');
// const checkbox = await page.$('//input[@name="isFreeToTerminate" and @value="true"]');
// await checkbox.click();   

// const selector = "//input[@value=36]";
// await page.waitForSelector(selector);
// await page.click(selector);

// const selector = "";
// await page.waitForXPath(selector);
// await page.click(selector);

// await Promise.all([
//     page.waitForNavigation(),
//     page.evaluate(() => {
//         document.querySelector('//input[@name="isFreeToTerminate" and @value="true"]').click();
//       })
//   ]);

// await Promise.all([
//     page.waitForNavigation(),
//     page.evaluate(() => {
//         document.querySelector('[value="36"]').click();
//       })
//   ]);

// await page.click('//input[@name="contractDuration" and @type="checkbox" and @value="36"]');
// await page.select('//input[@name="contractDuration" and @type="checkbox" and @value="36"]');

// await page.click('//input[@value="36"]');
// await page.click('[value="36"]');

// await page.waitForSelector('//input[@name="contractDuration" and @type="checkbox" and @value="36"]')
// const checkbox = await page.$('//input[@name="contractDuration" and @type="checkbox" and @value="36"]');
// await checkbox.click();

// await page.waitForSelector('[value="36"]')
// const checkbox = await page.$('[value="36"]');
// await checkbox.click();

// await page.waitForSelector('[//*[@id="esos-content"]/div/div/div/div/div/div[1]/div/div[2]/div/div/div/div[1]/div[2]/div/div[3]/div/input')
// const checkbox = await page.$('//*[@id="esos-content"]/div/div/div/div/div/div[1]/div/div[2]/div/div/div/div[1]/div[2]/div/div[3]/div/input');
// await checkbox.click();



/// ZOEK LOOPTIJD - tab 3x + SPACEBAR
// await page.evaluate(() => {
//     document.querySelector('//div[text() = "Looptijd"]').parentElement.click();
//   });
  
//   await page.keyboard.press("Tab");
//   await page.keyboard.press("Tab");  
//   await page.keyboard.press('Spacebar');

// await page.waitForSelector('//span[text() = "2 jaar, vast tarief"]//following::input')
// const [drieJaar] = (await page.$x('//span[text() = "2 jaar, vast tarief"]//following::input'));
// await drieJaar.click();
// if (drieJaar) { await drieJaar.click();   }
// await page.click(drieJaar);

// await page.waitForSelector('/span[text() = "3 jaar, vast tarief"]/..')
// const [drieJaar] = (await page.$x('//span[text() = "3 jaar, vast tarief"]'));
// await drieJaar.click();
// if (drieJaar) { await drieJaar.click();   }
// await page.click(drieJaar);

// const clickBtn = async () => {
//     try {
//       await page.evaluate(() => {
//         const btnSelector = "//input[@name='contractDuration' and @value='36']";
//         const btn = document.querySelector(btnSelector);
//         btn.focus();
//         btn.click();
//       });
//     } catch(e) {
//       console.error("Unable to click button", e);
//     }
//   };
//   clickBtn();

// let seeWorkspacesLinkSelectr = '//input[@name="contractDuration"][@type="checkbox"][@value="12"]';
//   await page.waitForXPath(seeWorkspacesLinkSelectr);
//     await page.click(seeWorkspacesLinkSelectr);

// page.$$eval('//input[@name="contractDuration"][@type="checkbox"][@value="12"]', checkboxes => {
//     checkboxes.forEach(chbox => chbox.click())
//  });




/////////////////////////////////////////////////
await page.waitForTimeout(10000);
await navigationPromise


console.log('done');

await browser.close()
})()

