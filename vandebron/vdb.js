
'use strict';

const puppeteer = require('puppeteer');
const fs = require('fs');

// Toegevoegd om AB cookies te testen. Nog niet gedaan.
const cookies =  [
                 ];

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


// Toegevoegd om AB cookies te testen. Nog niet gedaan.
    await page.setCookie(...cookies);


    // const page = await browser.newPage();

    await page.setViewport({
        width: 1920,
        height: 1080,
      });
    await page.goto('https://vandebron.nl/');

    await page.setCookie({ 'name': 'cookieConsentStatus', 'value': 'allowed' });
    await page.reload({waitUntil: 'networkidle2'});

    /////////////////////////////////////////////////

// Wait for it
await page.waitForSelector('body > div.root > div:nth-child(1) > div.main-container > div > div > div.sc-AykKC.Container-sc-1gqd8rn-0.bMSZlz.SignupPanel-Container > div > div.SignupPanel-FormContainer');
// await page.waitForTimeout(1000);


    // Postcode en Huisnummer
// await page.type('//*[@id="submitData.shippingAddress.zipCode"]', '5211Ak');
// await page.type('//*[@id="submitData.shippingAddress.number"]', '4');
// await page.type('#submitData\.shippingAddress\.zipCode', '5211Ak');
// await page.type('#submitData\.shippingAddress\.number', '4');

await page.waitForSelector('#submitData\\.shippingAddress\\.zipCode')
await page.click('#submitData\\.shippingAddress\\.zipCode')
await page.focus('#submitData\\.shippingAddress\\.zipCode')
await page.type('#submitData\\.shippingAddress\\.zipCode', '5211Ak')
 
await page.type('#submitData\\.shippingAddress\\.number', '4');
    
// Sumbit formulier
await page.waitForTimeout(200);

await page.click("body > div.root > div:nth-child(1) > div.main-container > div > div > div.sc-AykKC.Container-sc-1gqd8rn-0.bMSZlz.SignupPanel-Container > div > div.SignupPanel-FormContainer > button");



// Woningkiezer tussen
await page.waitForTimeout(200);

await page.waitForSelector("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(2) > div > span:nth-child(1) > div > div");
await page.click("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(3) > button");
                  
// Klik op Verder in Woningkiezer
await page.waitForTimeout(200);

await page.click("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(3) > button");





// Hoeveel mensen = 2 
await page.waitForTimeout(200);

await page.waitForSelector("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(2) > div > span:nth-child(2) > div > div");
await page.click("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(2) > div > span:nth-child(2) > div > div");

// HoeveelMensen submit = 2
await page.waitForTimeout(200);

await page.click("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(3) > button");




// Product EG  alleenG
await page.waitForTimeout(200);

await page.waitForSelector("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(2) > div > span:nth-child(1) > div > div");
await page.click("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(2) > div > span:nth-child(1) > div > div");

// Product submit EG : BekijkAanbod
await page.click("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(3) > button");
await page.waitForTimeout(200);


// Wek je zelf energie op?  NEE 1
await page.waitForSelector("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div.MarginSpacing.Flex-module__d-flex.Flex-module__flex-row.Flex-module__align-items-stretch.Flex-module__justify-content-center > button");
await page.click("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div.RadioGroup__StyledRadioGroup-sc-11dzx2z-0.kdpyFg > span:nth-child(2) > div > div");

// Submit wek je zelf op:
await page.click(".Pressable-module__button.Pressable-module__button-primary.Pressable-module__button-end");


await page.waitForTimeout(200);


// Klik op wijzigen Verbruik
await page.waitForSelector("#e2e-edit-usage");
await page.click("#e2e-edit-usage");

// Elek verbruik wijzigen -- Eerst veld-leegmaken
await page.waitForSelector("#priceParameters\\.basicEstimate");

let elekVerbruik = await page.$('#priceParameters\\.basicEstimate');
await elekVerbruik.click({clickCount: 3});
await elekVerbruik.press('Backspace'); 
await elekVerbruik.type('8976');

await page.waitForTimeout(200);


// Gas verbruik wijzigen -- Eerst veld-leegmaken
let gasVerbruik = await page.$('#priceParameters\\.gasEstimate');
await gasVerbruik.click({clickCount: 3});
await gasVerbruik.press('Backspace'); 
await gasVerbruik.type('888');

await page.waitForTimeout(200);

// OK klik - na aanpassen verbruik
await page.click(".Base-sc-11hu4bh-0-button.Pressable-xp7e18-0.kjUHle");

// Wacht ff
await page.waitForTimeout(200);




// Element om te screenshotten

try {
    // div groene
    const element3 = await page.$('body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > div.Wrapper__StyledContainer-sc-1oen3wc-0.dDAPeW > div > div > div.Row-module__row.text-left > div.Col-module__col-box-sizing.Col-module__col.Col-module__order-2.Col-module__order-lg-1.Col-module__col-md-12.Col-module__col-lg-8 > div.CarouselPage-carousel-wrapper > div > div > div.slick-slider.slick-initialized > div > div > div:nth-child(2) > div > label > div');
    await element3.screenshot({path: 'vandebron-3jaar.png', fullPage: false}); 
    await page.waitForTimeout(200);


    // Element om in txt weg te schrijven
    const now3 = new Date();
    // div groen prijs
    const Message3 =  await page.$eval('body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > div.Wrapper__StyledContainer-sc-1oen3wc-0.dDAPeW > div > div > div.Row-module__row.text-left > div.Col-module__col-box-sizing.Col-module__col.Col-module__order-2.Col-module__order-lg-1.Col-module__col-md-12.Col-module__col-lg-8 > div.CarouselPage-carousel-wrapper > div > div > div.slick-slider.slick-initialized > div > div > div:nth-child(2) > div > label > div > div > div.optionBlock-content-wrapper > div', el => el.innerText);

    console.log("Vandebron -- 1e scenario -- 3jaarABtestFoto -- " + now3.getFullYear() + "-"+ now3.getMonth() + "-" + now3.getDate() + " -- " + Message3 );

    fs.appendFileSync('vandebron.txt', `Vandebron -- 1e scenario -- 3jaar --ABtestFoto --  ${now3.getFullYear()}-${now3.getMonth()}-${now3.getDate()} -- ${Message3}`);
    fs.appendFileSync('vandebron.txt', '\n\n');

} catch(err){ 
            
        // foto div
        const elementa = await page.$('body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > div.Wrapper__StyledContainer-sc-1oen3wc-0.dDAPeW > div > div > div.Row-module__row.CarouselPage-carousel-section > div.Col-module__col-box-sizing.Col-module__col.Col-module__col-md-4.CarouselItem-wrapper.active > div');
        await elementa.screenshot({path: 'vandebron-3jaarr.png', fullPage: false}); 

        await page.waitForTimeout(200);


        // Element om in txt weg te schrijven
        const nowa = new Date();
        // foto div prijs
        const Messagea =  await page.$eval('body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > div.Wrapper__StyledContainer-sc-1oen3wc-0.dDAPeW > div > div > div.Row-module__row.CarouselPage-carousel-section > div.Col-module__col-box-sizing.Col-module__col.Col-module__col-md-4.CarouselItem-wrapper.active > div > div > div:nth-child(1) > div.CarouselItem-content > div.CarouselItem-priceBlock > div > div.FloatingInfoBlock-module__floating-info-block-inner-container', el => el.innerText);

        console.log("Vandebron -- 1e scenario -- 3jaar AbtestGroen-- " + nowa.getFullYear() + "-"+ nowa.getMonth() + "-" + nowa.getDate() + " -- " + Messagea );

        fs.appendFileSync('vandebron.txt', `Vandebron -- 1e scenario -- 3jaar ABtestGroen --  ${nowa.getFullYear()}-${nowa.getMonth()}-${nowa.getDate()} -- ${Messagea}`);
        fs.appendFileSync('vandebron.txt', '\n\n');



};




/////////////////END 1e scenario
   


////////////////////////////////////////////////        



////////////////Start 2e scenario 1jaar //////
await page.waitForTimeout(500);

await page.reload({waitUntil: 'networkidle2'});

await page.type('#submitData\\.shippingAddress\\.zipCode', '5216ek')
 
await page.type('#submitData\\.shippingAddress\\.number', '27');

await page.waitForTimeout(200);


// Sumbit formulier
await page.click("body > div.root > div:nth-child(1) > div.main-container > div > div > div.sc-AykKC.Container-sc-1gqd8rn-0.bMSZlz.SignupPanel-Container > div > div.SignupPanel-FormContainer > button");










// Woningkiezer -- tussenwoning
await page.waitForSelector("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(2) > div > span:nth-child(2) > div");
await page.click("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(2) > div > span:nth-child(2) > div");

// Klik op Verder in Woningkiezer 
await page.click("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(2) > div > span:nth-child(2) > div");
await page.waitForTimeout(200);

// Hoeveel mensen = 2 
await page.waitForSelector("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(2) > div > span:nth-child(2) > div > div");
await page.click("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(2) > div > span:nth-child(2) > div > div");
await page.waitForTimeout(200);

// HoeveelMensen submit = 2
await page.click("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(2) > div > span:nth-child(4) > div > div");




// Product EG of alleenG
await page.waitForTimeout(200);

await page.waitForSelector("priceParameters\.includeGas_0");
// klik op alleen stroom
await page.click("#priceParameters\.includeGas_0");

// klik op S&G
await page.click("#priceParameters\.includeGas_1");

await page.waitForTimeout(200);
// Product submit EG : BekijkAanbod
// Product submit 
await page.click("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div > div:nth-child(3) > button");

 



// Wek je zelf energie op?  NEE
await page.waitForTimeout(200);
// await page.waitForSelector("");
await page.click('body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div.RadioGroup__StyledRadioGroup-sc-11dzx2z-0.kdpyFg > span:nth-child(2) > div > div');

await page.click('body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > form > div.MarginSpacing.Flex-module__d-flex.Flex-module__flex-row.Flex-module__align-items-stretch.Flex-module__justify-content-center > button');






await page.waitForTimeout(200);

// Klik op wijzigen Verbruik
await page.waitForTimeout(200);
await page.click("#e2e-edit-usage");

// Elek verbruik wijzigen -- Eerst veld-leegmaken
await page.waitForSelector("#priceParameters\\.basicEstimate");

let elekVerbruik5 = await page.$('#priceParameters\\.basicEstimate');
await elekVerbruik5.click({clickCount: 3});
await elekVerbruik5.press('Backspace'); 
await elekVerbruik5.type('2525');

// Gas verbruik wijzigen -- Eerst veld-leegmaken
let gasVerbruik5 = await page.$('#priceParameters\\.gasEstimate');
await gasVerbruik5.click({clickCount: 3});
await gasVerbruik5.press('Backspace'); 
await gasVerbruik5.type('456');
 
// OK klik - na aanpassen verbruik
await page.waitForTimeout(200);
await page.click("body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > div.Wrapper__StyledContainer-sc-1oen3wc-0.dDAPeW > div > div > div.CarouselPage-editUsage-container > div > div > div.EditUsageContainer-form > button");

// Wacht ff
await page.waitForTimeout(200);


// klik op 1 jaar
// test of die bestaat dan foto screenshot
try {
    await page.click("#styled-navigation > li:nth-child(1) > a");
    // foto div
       // foto div
       const elementa = await page.$('body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > div.Wrapper__StyledContainer-sc-1oen3wc-0.dDAPeW > div > div > div.Row-module__row.CarouselPage-carousel-section > div.Col-module__col-box-sizing.Col-module__col.Col-module__col-md-4.CarouselItem-wrapper.active > div');
       await elementa.screenshot({path: 'vandebron-3jaarr.png', fullPage: false}); 

       await page.waitForTimeout(200);


       // Element om in txt weg te schrijven
       const nowa = new Date();
       // foto div prijs
       const Messagea =  await page.$eval('body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > div.Wrapper__StyledContainer-sc-1oen3wc-0.dDAPeW > div > div > div.Row-module__row.CarouselPage-carousel-section > div.Col-module__col-box-sizing.Col-module__col.Col-module__col-md-4.CarouselItem-wrapper.active > div > div > div:nth-child(1) > div.CarouselItem-content > div.CarouselItem-priceBlock > div > div.FloatingInfoBlock-module__floating-info-block-inner-container', el => el.innerText);

       console.log("Vandebron -- 2e scenario -- 1jaar AbtestGroen-- " + nowa.getFullYear() + "-"+ nowa.getMonth() + "-" + nowa.getDate() + " -- " + Messagea );

       fs.appendFileSync('vandebron.txt', `Vandebron -- 2e scenario -- 1jaar ABtestGroen --  ${nowa.getFullYear()}-${nowa.getMonth()}-${nowa.getDate()} -- ${Messagea}`);
       fs.appendFileSync('vandebron.txt', '\n\n');



} catch (err) {
 // Als link 1 jaar niet bestaat dan foto van groene div + prijs


    const element3 = await page.$('body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > div.Wrapper__StyledContainer-sc-1oen3wc-0.dDAPeW > div > div > div.Row-module__row.text-left > div.Col-module__col-box-sizing.Col-module__col.Col-module__order-2.Col-module__order-lg-1.Col-module__col-md-12.Col-module__col-lg-8 > div.CarouselPage-carousel-wrapper > div > div > div.slick-slider.slick-initialized > div > div > div:nth-child(2) > div > label > div');
    await element3.screenshot({path: 'vandebron-3jaar.png', fullPage: false}); 
    await page.waitForTimeout(200);


    // Element om in txt weg te schrijven
    const now3 = new Date();
    // div groen prijs
    const Message3 =  await page.$eval('body > div.root > div:nth-child(1) > div.Modal__StyledModalContainer-snwvs4-1.EuPjm.animated.fadeIn.usage-wizard > div > div.Modal__StyledContentWrapper-snwvs4-6.eTtjLJ > div > div > div > div.Wrapper__StyledContainer-sc-1oen3wc-0.dDAPeW > div > div > div.Row-module__row.text-left > div.Col-module__col-box-sizing.Col-module__col.Col-module__order-2.Col-module__order-lg-1.Col-module__col-md-12.Col-module__col-lg-8 > div.CarouselPage-carousel-wrapper > div > div > div.slick-slider.slick-initialized > div > div > div:nth-child(2) > div > label > div > div > div.optionBlock-content-wrapper > div', el => el.innerText);

    console.log("Vandebron -- 2e scenario -- 1jaarABtestFoto -- " + now3.getFullYear() + "-"+ now3.getMonth() + "-" + now3.getDate() + " -- " + Message3 );

    fs.appendFileSync('vandebron.txt', `Vandebron -- 2e scenario -- 1jaar --ABtestFoto --  ${now3.getFullYear()}-${now3.getMonth()}-${now3.getDate()} -- ${Message3}`);
    fs.appendFileSync('vandebron.txt', '\n\n');

}  



////////////////////////////////

await page.waitForTimeout(5000);

console.log('done');

await browser.close()
})()

