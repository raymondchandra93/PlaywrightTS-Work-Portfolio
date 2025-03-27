import {expect, test} from "@playwright/test";

test("Open smartbear website", async ({page}) => {
    await page.goto("http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Login.aspx");
});

test("Open google website", async ({page}) => {
    // Go to page
    await page.goto("https://www.google.com/");

    // Get the title of the page
    // Remember to put await because if not then it will basically fail
    await expect(page).toHaveTitle("Google");
});