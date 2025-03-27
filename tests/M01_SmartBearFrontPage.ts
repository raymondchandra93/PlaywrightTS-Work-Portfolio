import {expect, test} from "@playwright/test";

test("Test to open smartbear website", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Go to Smartbear website
    await page.goto("http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Login.aspx");

    // Get the title of the page
    // Remember to put await because if not then it will basically fail
    await expect(page).toHaveTitle("Web Orders Login");
});

test("Test to login smartbear website", async ({page}) => {
    await page.goto("http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Login.aspx");

    // Locating the username & fill it
    await page.locator("#ctl00_MainContent_username").fill("Tester");
    await page.waitForTimeout(3000);
    
    // Locating the password & fill it
    await page.locator("#ctl00_MainContent_password").fill("test");
    await page.waitForTimeout(3000);
    
    // Locating the login button and click on it
    await page.locator("#ctl00_MainContent_login_button").click();
    
    // Expect to contains Web Orders as the title
    await expect(page.locator("h1")).toContainText("Web Orders");
});

test("Test to open google website", async ({page}) => {
    // Go to page
    await page.goto("https://www.google.com/");

    // Get the title of the page
    // Remember to put await because if not then it will basically fail
    await expect(page).toHaveTitle("Google");
});