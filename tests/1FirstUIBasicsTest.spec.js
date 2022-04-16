const {test, expect} = require('@playwright/test'); //import test variable, expect for doing assertions from playwright config

test('Browser Context playwright test', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com");
    console.log(await page.title());

});


test('Page playwright test', async ({page}) => {
    await page.goto("https://www.linkedin.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("LinkedIn: Log In or Sign Up");
});