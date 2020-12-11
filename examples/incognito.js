(async () => {
    const browser = await puppeteer.launch();
    // Create a new incognito browser context.
    const context = await browser.createIncognitoBrowserContext();
    // Create a new page in a pristine context.
    const page = await context.newPage();
    // Do stuff
    await page.goto('https://example.com');
  })();