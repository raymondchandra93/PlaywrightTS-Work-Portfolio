import {expect, test} from "@playwright/test";

test("Test to get the 1st row record", async ({page}) => {
    await page.goto("http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Login.aspx");

    // Locating the username & fill it
    const usernameField = page.locator("#ctl00_MainContent_username");
    await usernameField.fill("Tester");
    
    // Locating the password & fill it
    const passwordField = page.locator("#ctl00_MainContent_password");
    await passwordField.fill("test");
    
    // Locating the login button and click on it
    const loginButton = page.locator("#ctl00_MainContent_login_button");
    await loginButton.click();

    // Expect to contains Web Orders as the title
    await expect(page.locator("h1")).toContainText("Web Orders");
    
    // Locating the 1st row of the table
    const row = page.locator("#ctl00_MainContent_orderGrid tr:nth-of-type(2) td");

    // Getting the information
    console.log(await row.first().textContent());       // Checkbox
    console.log(await row.nth(1).textContent());        // Paul Brown
    console.log(await row.nth(1).innerHTML());          // still Paul Brown
    console.log(await row.last().textContent());        // Edit button
});

test("Test to get all the information in the row", async ({page}) => {
    await page.goto("http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Login.aspx");

    // Locating the username & fill it
    const usernameField = page.locator("#ctl00_MainContent_username");
    await usernameField.fill("Tester");
    
    // Locating the password & fill it
    const passwordField = page.locator("#ctl00_MainContent_password");
    await passwordField.fill("te");
    
    // Locating the login button and click on it
    const loginButton = page.locator("#ctl00_MainContent_login_button");
    await loginButton.click();

    // Expect to contains Web Orders as the title
    await expect(page.locator("h1")).toContainText("Web Orders");
    
    // You can do this then to wait. It can only wait for a single element
    await page.locator("#ctl00_MainContent_orderGrid tr:nth-of-type(2) td").first().waitFor();
    
    // Getting all the contents in the row
    // However there is no auto-waiting here so we do wait for previous step
    // See here - https://playwright.dev/docs/actionability
    const row = page.locator("#ctl00_MainContent_orderGrid tr:nth-of-type(2) td");
    console.log(await row.allTextContents());
});