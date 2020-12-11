const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // slowMo: 250  
        });
//   const browser = await puppeteer.launch();
  const page = await browser.newPage();



    await page.goto('https://www.essent.nl');
    await page.setCookie({ 'name': 'cookieconsent', 'value': '3' });
    await page.setCookie({ 'name': 'gdprconsent', 'value': '3' });
    await page.reload({waitUntil: 'networkidle2'});

////////////////// BEGIN scenario 1 : 1 jaar 3 personen ////////////////


// Postcode + huisnummer 
    await page.type('#postalcode', '5216EK');
    await page.type('#housenumbercombined', '27');

//  Selecteer E G E+G
    await page.click("#compare-offer-container--portrait > form > div > div.col-12.col-md-7.order-md-last.col-lg-5.compare-offer.compare-offer-portrait > div.compare-offer-outer > div > div.form-row.js-consumption-unknown > div:nth-child(1) > div:nth-child(2) > label",{clickCount:1});
   
// Bewoners:
    await page.select(".input-group > #occupants", "3");
    await page.waitForTimeout(500);

// Submit Formulier
    await page.click("#compare-offer-container--portrait > form > div > div.col-12.col-md-7.order-md-last.col-lg-5.compare-offer.compare-offer-portrait > div.compare-offer-outer > div > div:nth-child(6) > div > button");

// Op resultaatpagina - klik op '1 jaar'      
    await page.waitForTimeout(3500);
    await page.waitForSelector('.row > .col-12 > .form-check-label:nth-child(1) > .form-label > .form-label-name');
    await page.click('.row > .col-12 > .form-check-label:nth-child(1) > .form-label > .form-label-name');
    await page.waitForTimeout(5500);

// wacht totdat element geladen is + maak schermprint van DIV
    const element = await page.$('body > main > section.tcm301-191475.full-cover.widget-row.theme-secondary > div.product-showcase > div.product-showcase-row > div.product-showcase-carousel.flickity-enabled.is-draggable > div > div > div.product-block-b.bg-transparent.d-flex.flex-column.flex-shrink-0.product-block-b__recommended.product-showcase-carousel-cell.is-selected');        // declare a variable with an ElementHandle
    await element.screenshot({path: 'essent-3-persoon-1-jaar.png'}); // take screenshot element in puppeteer

// Haal waarde van DIV op     
    const now = new Date();
    const Message =  await page.$eval('body > main > section.tcm301-191475.full-cover.widget-row.theme-secondary > div.product-showcase > div.product-showcase-row > div.product-showcase-carousel.flickity-enabled.is-draggable > div > div > div.product-block-b.bg-transparent.d-flex.flex-column.flex-shrink-0.product-block-b__recommended.product-showcase-carousel-cell.is-selected > div.product-block-b__content.p-3.py-4.bg-white.flex-grow-1.d-flex.flex-column > div:nth-child(2) > div.text-right.mb-2', el => el.innerText);
    // const Message =  await page.$eval('body > main > section.tcm301-191475.full-cover.widget-row.theme-secondary > div.product-showcase > div.product-showcase-row > div.product-showcase-carousel.flickity-enabled.is-draggable > div > div > div.product-block-b.bg-transparent.d-flex.flex-column.flex-shrink-0.product-block-b__recommended.product-showcase-carousel-cell.is-selected > div.product-block-b__content.p-3.py-4.bg-white.flex-grow-1.d-flex.flex-column > div:nth-child(2) > div.text-right.mb-2', ele => ele.textContent);
    console.log("Essent - 1escenario : Prijs 3 persoon 1jaar : " + now.getFullYear() + "-"+ now.getMonth() + "-" + now.getDate() + ' . ' + Message );

// Schrijf waarde van DIV weg in textbestand     
    fs.appendFileSync('essent.txt', 'ESSENT -- 1escenario : 1 JR 3persoon: '  + now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() + ' . ' + Message);
    fs.appendFileSync('essent.txt', '\n\n');
    // fs.appendFileSync('essent.txt', 'ESSENT TEST - '  + now.getFullYear() + "-"+ now.getMonth() + "-" + now.getDate() + Message);


////////////////// EIND scenario1 ////////////////




///////////////// Start Scenario : postcode check op EG pagina incl Verbruik - 3 jaar ///////////

    await page.evaluate(() => {  localStorage.clear();  });
    await page.goto('https://www.essent.nl');

// Navigeer naar EG pagina vanaf de homepage
    await page.click("body > header > div > div > div > nav > ul.site-nav.unstyled > li:nth-child(2) > a");

// Wacht totdat PostcodeCheck formulier geladen is
    await page.waitForSelector('#postalcode');

// Vul postcode in
    await page.type('#postalcode', '5211AK');
    await page.type('#housenumbercombined', '4');

// Klik op 'Ik weet mijn verbruik'
    await page.click("#compare-offer-container--portrait > form > div > div.col-12.col-md-7.order-md-last.col-lg-5.compare-offer.compare-offer-portrait > div.compare-offer-outer > div > div:nth-child(3) > div > div > div:nth-child(1) > label");
    await page.waitForTimeout(500);

// Kies dubbel :  #meterType_double     -of-         KiesEnkel : #meterType_single
    await page.click("#meterType_single",{clickCount:1});

// Vul kWH en M3 in  ENKEL
    await page.type('#powerconsumptionstandard', '1234');
    await page.type('#gasconsumptionstandard', '421');
// Vul kWh Dubbel in : #powerconsumptionstandard (DIV normaal)   #powerconsumptionlow (Div laagverbruik)

// // Submit Formulier
    await page.click("#compare-offer-container--portrait > form > div > div.col-12.col-md-7.order-md-last.col-lg-5.compare-offer.compare-offer-portrait > div.compare-offer-outer > div > div:nth-child(6) > div > button");


 // // wacht totdat element geladen is + maak schermprint van DIV
    await page.waitForSelector('body > main > section.tcm301-191475.full-cover.widget-row.theme-secondary > div.product-showcase > div.product-showcase-row > div.product-showcase-carousel.flickity-enabled.is-draggable > div');
    const element3 = await page.$('body > main > section.tcm301-191475.full-cover.widget-row.theme-secondary > div.product-showcase > div.product-showcase-row > div.product-showcase-carousel.flickity-enabled.is-draggable > div > div > div.product-block-b.bg-transparent.d-flex.flex-column.flex-shrink-0.product-block-b__recommended.product-showcase-carousel-cell.is-selected');      
    await page.waitForTimeout(1000);
  
    await element3.screenshot({path: 'essent-3jaar-EG.png', fullPage: false}); 

// Schrijf waarde van DIV weg in textbestand     
    const now2 = new Date();
    const Message2 =  await page.$eval('body > main > section.tcm301-191475.full-cover.widget-row.theme-secondary > div.product-showcase > div.product-showcase-row > div.product-showcase-carousel.flickity-enabled.is-draggable > div > div > div.product-block-b.bg-transparent.d-flex.flex-column.flex-shrink-0.product-block-b__recommended.product-showcase-carousel-cell.is-selected > div.product-block-b__content.p-3.py-4.bg-white.flex-grow-1.d-flex.flex-column > div:nth-child(2) > div.text-right.mb-2', el => el.innerText);
   
    console.log("Essent - 2escenario : " + now2.getFullYear() + "-"+ now2.getMonth() + "-" + now2.getDate() +Message2 );

    fs.appendFileSync('essent.txt', `ESSENT 3 JR -- 2e scenario : ${now2.getFullYear()}-${now2.getMonth()}-${now2.getDate()}${Message2}`);
    fs.appendFileSync('essent.txt', '\n\n');

   

/////////////////////////////////////////////////
            await page.waitForTimeout(5000);

            console.log('done');

            await browser.close()
})()





							