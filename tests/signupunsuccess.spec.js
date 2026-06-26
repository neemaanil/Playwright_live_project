import test from "@playwright/test"; 
import SignupUnsuccessPage from "../pages/signupunsuccess";
test('Signup Unsuccessful', async ({ page }) => { 
    await page.goto('https://demoblaze.com/');
    const signupUnsuccessPage = new SignupUnsuccessPage(page);
    await signupUnsuccessPage.signupUnsuccess('Neema', 'Password123');
     await page.waitForTimeout(2000); 
    //await page.locator('#signin2').click(); // click on sign up button
    //await page.locator('#sign-username').fill('Neema'); // fill username
    // Add more steps for unsuccessful signup scenario
   // await page.getByLabel('Password:').fill('Password123'); // fill password
    //await page.locator('.btn btn-secondary').click(); // click on sign up button in the modal
    //await page.getByRole('button', { name: 'Close' }).first().click(); // click on close button to close the signup modal
});