import test from "@playwright/test"; 
import SignupSuccessPage from "../pages/signupsuccess";
test('@smoke Signup Successful', async ({ page }) => { 
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
test('Signup Unsuccessful', async ({ page }) => { 
    await page.goto('https://demoblaze.com/');
    const signupSuccessPage1 = new SignupSuccessPage(page);
    await signupSuccessPage1.signupUnsuccess('Neema', 'Password123');
     await page.waitForTimeout(2000); 
    //await page.locator('#signin2').click(); // click on sign up button
    //await page.locator('#sign-username').fill('Neema'); // fill username
    // Add more steps for unsuccessful signup scenario
   // await page.getByLabel('Password:').fill('Password123'); // fill password
    //await page.locator('.btn btn-secondary').click(); // click on sign up button in the modal
    //await page.getByRole('button', { name: 'Close' }).first().click(); // click on close button to close the signup modal
});