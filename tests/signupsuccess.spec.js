import test from "@playwright/test"; 
import SignupSuccessPage from "../pages/signupsuccess";
test('Signup Successful', async ({ page }) => { 
    await page.goto('https://demoblaze.com/');
    const signupSuccessPage = new SignupSuccessPage(page);
    await signupSuccessPage.signup('Neema2', 'Password127');
    //await page.locator('#signin2').click(); // click on sign up button
    //await page.locator('#sign-username').fill('Neema'); // fill username
    // Add more steps for unsuccessful signup scenario
    //await page.getByLabel('Password:').fill('Password125'); // fill password
    //await page.locator('.btn btn-secondary').click(); // click on sign up button in the modal
    console.log('About to click Sign up');
    //await page.getByRole('button', { name: 'Sign up' }).click(); // click on signup button to submit the form
    console.log('Clicked Sign up');
      const dialogPromise = page.waitForEvent('dialog');
    const dialog = await dialogPromise; // wait for the dialog to appear
    console.log('Dialog message:', dialog.message());
      
});  
