import {expect, test} from "@playwright/test";

test("Child windows handle", async ({browser}) => {
    // Open new context = session
    const context = await browser.newContext();
    
    // Open new page
    const page = await context.newPage();

    // Go to login pagePractice
    page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    // Get the link for interview material
    const documentLink = page.locator("[href*='documents-request']");
    
    // Since waiting and click need to happen at the same time
    // You bundle them in Promise.all
    // Until they are fulfilled, then we can proceed

    // Otherwise, the click might happen before the waitForEvent() is listening
    // Since in JS, most functions are async
    const [newPage] = await Promise.all(
    [
        context.waitForEvent('page'),       //listen for any new page pending,rejected,fulfilled
        documentLink.click(),
    ])
   
    // Using the newPage
    const text = await newPage.locator(".red").textContent();
    
    // Getting the arrayTest and then split the domain
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    console.log(`Domain: ${domain}`);

    // Put the username with the domain that we got
    await page.locator("#username").fill(domain);
    await page.waitForTimeout(5000);
    console.log(`Username: ${await page.locator("#username").inputValue()}`);
});