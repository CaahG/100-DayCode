const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    console.log(await page.title());
    const element = await page.$('h1');
    console.log(await element.textContent());
    await browser.close();
})();

const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com/login');
    await page.fill('#username', 'myUsername');
    await page.fill('#password', 'myPassword');
    await page.click('button[type="submit"]');
    await page.waitForSelector('.dashboard');
    console.log('Login successful');
    await browser.close();
})();