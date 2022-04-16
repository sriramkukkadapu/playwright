
const {test, expect} = require('@playwright/test'); //import test variable, expect for doing assertions from playwright config

test('UI controls', async ({page}) => {
   
    const username = page.locator("#username");
    const password = page.locator("#password");
    const signinbtn = page.locator("#signInBtn");
    const dropdown = page.locator("select[class='form-control']");

    await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
    await username.type("rahulshettyacademy");
    await password.fill("learning");
    //await signinbtn.click();

    await dropdown.selectOption("consult"); //select button
    await page.locator(".radiotextsty").last().click(); //radio button
    //assert radio button is checked
    expect(page.locator(".radiotextsty").last()).toBeChecked();
    console.log(await page.locator(".radiotextsty").last().isChecked());

    await page.locator("#okayBtn").click();

    await page.locator("input[name='terms']").click();
    expect(page.locator("input[name='terms']").last()).toBeChecked();

    await page.locator("input[name='terms']").uncheck();
    expect(await page.locator("input[name='terms']").isChecked()).toBeFalsy();
    
    //await page.pause();

    await expect(page.locator("a[class='blinkingText']")).toHaveAttribute("class", "blinkingText");
 
});


test.only('Handled child windows and tabs', async ({browser}) => {
   
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
    const [page2] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator("a[class='blinkingText']").click()
    ])
    
    console.log("=========> "+JSON.stringify(page2))
    console.log( "========> "+ await  page2.locator("p[class='im-para red']").textContent());

    // Now we can perform actions in tab1 too using page.locator()..

 
});