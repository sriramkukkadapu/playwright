const {test, expect} = require('@playwright/test'); //import test variable, expect for doing assertions from playwright config

// test('Page playwright test - error case', async ({page}) => {
    
//     await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
//     await page.locator("#username").type("rahulshetty");
//     await page.locator("#password").type("learning");
//     await page.locator("#signInBtn").click();
//     console.log(await page.locator("[style*=block]").textContent());
//     await expect(page.locator("[style*=block]")).toContainText("Incorrect");
// });


// test.skip('Page playwright test - error case', async ({page}) => {
//     const username = page.locator("#username");
//     const password = page.locator("#password");
//     const signinbtn = page.locator("#signInBtn");

//     await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
//     await username.type("rahulshettyacademy");
//     await password.fill("learning");
//     await signinbtn.click();
    
//     console.log(await page.locator(".card-body a").first(0).textContent());
//     console.log(await page.locator(".card-body a").nth(0).textContent());
//     console.log(await page.locator(".card-body a").allTextContents());

// });


test.only('Page playwright test - promise example - click btn and wait', async ({page}) => {
    const username = page.locator("#username");
    const password = page.locator("#password");
    const signinbtn = page.locator("#signInBtn");

    await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
    await username.type("rahulshettyacademy");
    await password.fill("learning");

    await Promise.all(
        [
            page.waitForNavigation(),
            signinbtn.click()
        ]
    );

    console.log(await page.locator(".card-body a").allTextContents());

});