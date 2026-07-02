import {test, expect} from "@playwright/test"; 
import ValidLoginPage from "../pages/validlogin";
import datadriven from "../utils/datadriven.json";
import testdata from '../utils/parameterddt.json';
test('@smoke Valid login test', async ({page}) => {
await page.goto('https://demoblaze.com/');
const validLoginPage = new ValidLoginPage(page);
await validLoginPage.login(datadriven.username, datadriven.password);
//await page.pause();
//const welcomepagelocator = validLoginPage.welcomescreen();
//await expect(welcomepagelocator).toBeVisible();
//await expect(this.welcomeMessage).toContainText('Welcome'); 

//await page.locator('#login2').click(); // click on login button
//await page.locator('#loginusername').fill('neema2'); // fill username
//await page.locator('#loginpassword').fill('1234'); // fill password
//await page.getByRole('button', { name: 'Log in' }).first().click(); // click on login button to submit the form
//await page.locator('//button[@text()="Log in"]').click(); // click on login button to submit the form using xpath
//await console.log('Login successful');
await page.waitForTimeout(5000);
//await expect(page.locator('#nameofuser')).toContainText('Welcome'); // assertion to verify that the login was successful
await expect(page).toHaveURL('https://demoblaze.com/');
});

for (const data of testdata) {
test(`@smoke Invalid Login with ${data.username} and ${data.password}`, async ({ page }) => {
await page.goto('https://demoblaze.com/');
//await page.locator('#login2').click(); // click on login button
//await page.locator('#loginusername').fill('neema2'); // fill username
//await page.locator('#loginpassword').fill('14'); // fill password
//await page.getByRole('button', { name: 'Log in' }).first().click(); // click on login button to submit the form
 const validLoginPage = new ValidLoginPage(page);
 await validLoginPage.invalidLogin(data.username, data.password); // using data driven testing with parameterised json object
const dialogPromise = page.waitForEvent('dialog');
    const dialog = await dialogPromise; // wait for the dialog to appear
    console.log('Dialog message:', dialog.message());
});
}