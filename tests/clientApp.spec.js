
const {test, expect} = require('@playwright/test'); //import test variable, expect for doing assertions from playwright config

test.only('Page playwright test - error case', async ({page}) => {
   
    page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").type("sriramtest@gmail.com");
    await page.locator("#userPassword").type("Test1234!");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    
});