export default class SignupSuccessPage{
    constructor(page){
        this.page = page;
        this.SignupButton = page.locator('#signin2');
        this.usernameField = page.locator('#sign-username');
        this.passwordField = page.getByLabel('Password:');
        this.submitButton = page.getByRole('button', { name: 'Sign up' });
        this.closeButton = page.getByRole('button', { name: 'Close' }).first();
    }
    async signup(username, password){   
        await this.SignupButton.click();
        await this.usernameField.fill(username);    
        await this.passwordField.fill(password);
        await this.submitButton.click();        
    }
    async signupUnsuccess(username, password){
        await this.SignupButton.click();
        await this.usernameField.fill(username);        
        await this.passwordField.fill(password);
        await this.closeButton.click();
        await console.log('Signup unsuccessful');  
    }   
}