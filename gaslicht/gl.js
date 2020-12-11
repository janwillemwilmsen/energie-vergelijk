const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // args: [
        //     '--incognito',
        //   ]
        // slowMo: 250  
        });
//   const browser = await puppeteer.launch();
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();

    // const page = await browser.newPage();

    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
      });
    await page.goto('https://gaslicht.com/');

  
    await page.setCookie({ 'name': 'CookieConsent', 'value': '{stamp:%27DQjxVyxpycO23xBj45i1WSp+tx1daFTpEg/zgFjqEBkbv0vL0r/+Fg==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cver:1%2Cutc:1607294267096%2Cregion:%27nl%27}' });
    await page.reload({waitUntil: 'networkidle2'});
    
  

    // await page.addStyleTag({content: '.c-comparison-list__item {width: 10px;}'})

    await page.waitForTimeout(1500);
    // Wait for it
// await page.waitForSelector('body > section > section.c-site__footer > footer > section.c-footer__external.o-container > div > div.layout__item.u-1\/5.u-1\/2-palm.palm-pt- > a > img');

// Vul postcode in
await page.type('#postal', '5216EK');
await page.type('#housenr', '27');

// aantal mensen -- NEE - verbruikselector
// await page.click("body > section > section.c-site__body.c-site__body--nav-offset > div:nth-child(2) > div > div > div.layout__item.c-homepage__compareform-col.lap-pl0.palm-pb\+\+ > div > div > div.o-toggle__wrapper--inverse > div > form > div > div.o-toggle__wrapper--inverse.mt > div.pb-- > div:nth-child(2) > div > div.layout.layout--small > div.layout__item.u-1\/2-desk.u-13\/24-portable.u-white-space--nowrap > div > div:nth-child(5)");
await page.waitForTimeout(500);

// Clik op 'ik weet mijn verbruik'

// await page.focus("label.js-compare-widget-trigger");
// await page.click("label.js-compare-widget-trigger");

await page.waitForSelector('.pb-- > .u-position--relative > .c-gl-compare-widget__usage-box > .zeta > .js-compare-widget-trigger')
await page.click('.pb-- > .u-position--relative > .c-gl-compare-widget__usage-box > .zeta > .js-compare-widget-trigger')
  

// await page.evaluate(() => {
//     document.querySelector('body > section > section.c-site__body.c-site__body--nav-offset > div:nth-child(2) > div > div > div.layout__item.c-homepage__compareform-col.lap-pl0.palm-pb\+\+ > div > div > div.o-toggle__wrapper--inverse > div > form > div > div.o-toggle__wrapper--inverse.mt > div.pb-- > div:nth-child(2) > div > div.zeta.mt-- > label').click();
//   });

// await page.evaluate(() => { document.querySelector('body > section > section.c-site__body.c-site__body--nav-offset > div:nth-child(2) > div > div > div.layout__item.c-homepage__compareform-col.lap-pl0.palm-pb\+\+ > div > div > div.o-toggle__wrapper--inverse > div > form > div > div.o-toggle__wrapper--inverse.mt > div.pb-- > div:nth-child(2) > div > div.zeta.mt-- > label').style.display = 'yes'; });

await page.waitForTimeout(500);

// Vul verbruik in  E en G

// Elek verbruik wijzigen -- Eerst veld-leegmaken
let elekVerbruik = await page.$('#usageElectricitySingle');
await elekVerbruik.click({clickCount: 3});
await elekVerbruik.press('Backspace'); 
await elekVerbruik.type('8976');

await page.waitForTimeout(500);

// await page.type('#usageElectricitySingle', '1234');



// Gas verbruik wijzigen -- Eerst veld-leegmaken
let gasVerbruik = await page.$('#usageGas');
await gasVerbruik.click({clickCount: 3});
await gasVerbruik.press('Backspace'); 
await gasVerbruik.type('888');
// await page.type('#usageGas', '432');

// Submit Formulier
await page.waitForSelector('div > .js-compare-widget__form > div > .o-toggle__wrapper--inverse > .c-button')
await page.click('div > .js-compare-widget__form > div > .o-toggle__wrapper--inverse > .c-button')

await page.waitForTimeout(1500);

//Kies looptijd - 1 jaar
await page.waitForSelector(".c-filter-section > .c-filter-section__body > .c-filter-section__filter:nth-child(2) > .inputFieldsWrapper:nth-child(3) > .c-inputfields__label");
await page.click(".c-filter-section > .c-filter-section__body > .c-filter-section__filter:nth-child(2) > .inputFieldsWrapper:nth-child(3) > .c-inputfields__label");

// Verander PrijsPerJaar in PrijsperMaand
await page.select('.layout__item #toonKosten', 'permaand')
await page.select('.layout__item #toonKosten', 'permaand')

await page.waitForTimeout(3000);
await page.select('.layout__item #toonKosten', 'permaand')


await page.evaluate(async () => {
    const style = document.createElement('style');
    style.type = 'text/css';
    const content = `.consument{background: red} #js-async-content > div.js-comparisonlist.js-gtm-autotrack > ol > li:nth-child(n+4) {display:none;width: 10px; color: red;}`;
    style.appendChild(document.createTextNode(content));
    const promise = new Promise((resolve, reject) => {
      style.onload = resolve;
      style.onerror = reject;
    });
    document.head.appendChild(style);
    await promise;
  });
await page.select('.layout__item #toonKosten', 'permaand')


await page.waitForTimeout(4500);





// CSS om LIST-items te verbergen
// await page.reload({waitUntil: 'networkidle2'});
// await page.waitForTimeout(2500);

// Element om te screenshotten
const element3 = await page.$('#js-async-content > div.js-comparisonlist.js-gtm-autotrack');
// const element3 = await page.$('#js-async-content > div.js-comparisonlist.js-gtm-autotrack > ol > li:nth-child(-2n+5)');
// const element3 = await page.$('#js-async-content > div.js-comparisonlist.js-gtm-autotrack > ol > li:nth-child(1):nth-child(2):nth-child(3)');


await element3.screenshot({path: 'gaslicht.com-1jaar-scenario-1.png', fullPage: false}); 






// Element om in txt weg te schrijven
const now3 = new Date();

// const Message3 =  await page.$eval('.c-comparison-list__item:nth-child(1) > .u-bg-color-white:nth-child(2) > .default-mb- > .layout > .layout__item > .desk-wide-pr- > .c-comparison-list__provider-logo', el => el.textContent);
// const Message3 =  await page.$eval('.c-comparison-list__item:nth-child(1) > .u-bg-color-white:nth-child(2) > .default-mb- > .layout > .layout__item > .desk-wide-pr- > .c-comparison-list__provider-logo', el => el.tagName);
// const Message3 =  await page.$eval('.c-comparison-list__item:nth-child(1) > .u-bg-color-white:nth-child(2) > .default-mb- > .layout > .layout__item > .desk-wide-pr-', el => el.innertext);
// const Message3 =  await page.$eval('.c-comparison-list__item:nth-child(1) > .u-bg-color-white:nth-child(2) > .default-mb- > .layout > .layout__item > .desk-wide-pr- > .c-comparison-list__provider-logo', el => el.value);


const leverancier1 =  await page.$eval('.c-comparison-list__item:nth-child(1) > .u-bg-color-white:nth-child(2) > .default-mb- > .layout > .layout__item > .desk-wide-pr-', el => el.innerHTML);
const leverancier2 =  await page.$eval('.c-comparison-list__item:nth-child(1) > .u-bg-color-white:nth-child(1) > .default-mb- > .layout > .layout__item > .desk-wide-pr-', el => el.innerHTML);
const leverancier3 =  await page.$eval('.c-comparison-list__item:nth-child(2) > .u-bg-color-white > .default-mb- > .layout > .layout__item > .desk-wide-pr-', el => el.innerHTML);
const leverancier4 =  await page.$eval('.c-comparison-list__item:nth-child(3) > .u-bg-color-white > .default-mb- > .layout > .layout__item > .desk-wide-pr-', el => el.innerHTML);

const product1 = await page.$eval('.c-comparison-list__item:nth-child(1) > .u-bg-color-white:nth-child(2) > .default-mb- > .layout > .layout__item:nth-child(4)', el => el.textContent);
const product2 = await page.$eval('.c-comparison-list__item:nth-child(1) > .u-bg-color-white:nth-child(1) > .default-mb- > .layout > .layout__item:nth-child(4)', el => el.textContent);
const product3 = await page.$eval('.c-comparison-list__item:nth-child(2) > .u-bg-color-white > .default-mb- > .layout > .layout__item > .u-weight--bold', el => el.textContent);
const product4 = await page.$eval('.c-comparison-list__item:nth-child(3) > .u-bg-color-white > .default-mb- > .layout > .layout__item > .u-weight--bold', el => el.textContent);

const prijs1 = await page.$eval('.c-comparison-list__item:nth-child(1) > .u-bg-color-white:nth-child(2) > .default-mb- > .layout > .js-tooltip-trigger > .c-spec', el => el.textContent);
const prijs2 = await page.$eval('.c-comparison-list__item:nth-child(1) > .u-bg-color-white:nth-child(1) > .default-mb- > .layout > .js-tooltip-trigger > .c-spec', el => el.textContent);
const prijs3 = await page.$eval('.c-comparison-list__item:nth-child(2) > .u-bg-color-white > .default-mb- > .layout > .js-tooltip-trigger > .c-spec', el => el.textContent);
const prijs4 = await page.$eval('.c-comparison-list__item:nth-child(3) > .u-bg-color-white > .default-mb- > .layout > .js-tooltip-trigger > .c-spec', el => el.textContent);




//interne logmelding
console.log("Gaslicht -- 1 jaar -- 1e scenario " 
+ now3.getFullYear() + "-"+ now3.getMonth() + "-" + now3.getDate() + " -- " 
+ leverancier1 + product1 + prijs1 + "-" 
+ leverancier2 + product2 + prijs2 + "-"
+ leverancier3 + product3 + prijs3 + "-"
+ leverancier4 + product4 + prijs4 + "-");



fs.appendFileSync('gaslicht.txt', 
`********* Gaslicht -- 1 jaar -- 1e scenario **************** 
**************** ${now3.getDate()} - ${now3.getMonth()} - ${now3.getFullYear()} ***************
****************************************************
Leverancier1-Advertentie 
${leverancier1}  
${product1} 
${prijs1}
****************************************************
Levarancier1-echt1e   
 ${leverancier2}  
 ${product2}  
 ${prijs2}
****************************************************
Leverancier2-echte
 ${leverancier3}  
 ${product3}  
 ${prijs3}
****************************************************
Leverancier3-echte
 ${leverancier4} 
 ${product4}  
 ${prijs4}
`);


/////////////////////////////////////////////////
await page.waitForTimeout(1000);

console.log('done');

await browser.close()
})()
