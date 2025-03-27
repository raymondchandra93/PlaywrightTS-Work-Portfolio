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
    console.log(await row.nth(2).textContent());
});