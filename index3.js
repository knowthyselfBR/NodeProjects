import puppeteer from 'puppeteer';

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://folha.qconcursos.com/e/concursos-rio-de-janeiro-rj');

    // Set screen size and wait for selector
    await page.setViewport({width: 1080, height: 1024});
    await page.waitForSelector('.c-PJLV-iidiZWQ-css');

    // get the text content of all the `title` elements:
    const ReturnedTestArray = await page.$$eval('.c-PJLV-iidiZWQ-css div.c-jABvLw.c-jABvLw-iTKOFX-flow-column.c-jABvLw-ifVlWzK-css h3', AllTest => {
        return AllTest.map(test => test.textContent);
    });
    console.log(ReturnedTestArray);

    // get the text content of all the `link` elements:
    const ReturnedLinkArray = await page.$$eval('.PJLV.PJLV-iidVuNQ-css', AllTest => {
        return AllTest.map(test => test.href);
    });
    console.log(ReturnedLinkArray);

    // get the text content of all the `last updated` elements:
    const ReturnedLastUpdateArray = await page.$$eval('.c-iPYhUp.c-iPYhUp-dUtxta-variant-sm.c-iPYhUp-dYJjti-weight-regular.c-iPYhUp-ihaZWjp-css', AllTest => {
        return AllTest.map(test => test.textContent);
    });
    console.log(ReturnedLastUpdateArray);

    await browser.close();
})();