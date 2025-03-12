import {test} from "@playwright/test";

test("My first playwright test", async ({page}) => {
    await page.goto("http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Login.aspx");
});