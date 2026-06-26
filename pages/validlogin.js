import { expect } from '@playwright/test';
export default class ValidLoginPage{
    constructor(page){
        this.page = page;
        this.loginButton = page.locator('#login2');
        this.usernameField = page.locator('#loginusername');
        this.passwordField = page.locator('#loginpassword');
        this.submitButton = page.getByRole('button', { name: 'Log in' }).first();
        this.welcomeMessage = page.locator('#nameofuser');
        this.logoutButton = page.getByRole('link', { name: 'Log out' });
    }
    async login(username, password){
        await this.loginButton.click();
        await this.usernameField.fill(username);    
        await this.passwordField.fill(password);
        await this.submitButton.click(); 
        await console.log('Login successful');
        //await expect(this.welcomeMessage).toBeVisible();
       // await expect(this.welcomeMessage).toContainText('Welcome'); // assertion to verify that the login was successful
        
    }
async invalidLogin(username,password)
{  
 await this.loginButton.click();
        await this.usernameField.fill(username);    
        await this.passwordField.fill(password);
        await this.submitButton.click(); 
}   
async logout()
{
    //await this.page.pause();
    await this.logoutButton.click();
}
welcomescreen()
{
    return this.welcomeMessage;
}
}