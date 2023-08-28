import puppeteer from 'puppeteer';

(async () => {
    //movie url
    const movieUrl = 'https://www.imdb.com/title/tt0133093/?ref_=fn_al_tt_1';
    //open browser and wait it to load
    const browser = await puppeteer.launch({
        headless: false,
        // `headless: true` (default) enables old Headless;
        // `headless: 'new'` enables new Headless;
        // `headless: false` enables “headful” mode.
    });

    const page = await browser.newPage();
    await page.setViewport({width: 1080, height: 1024});
    
    await page.goto(movieUrl, { waitUntil: "domcontentloaded" });
    
    const data = await page.evaluate(() => {
        const title = document.querySelector('span[class="sc-afe43def-1 fDTGTb"]').textContent;
        const rating = document.querySelector('span[class="sc-bde20123-1 iZlgcd"]').textContent;
        const ratingCount = document.querySelector('div[class="sc-bde20123-3 bjjENQ"]').textContent;
        return {
            title,
            rating,
            ratingCount
        }
    })
    console.log(data);

    //await browser.close();
})();