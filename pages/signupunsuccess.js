export default class SignupUnsuccessPage{
    constructor(page){
        this.page = page;
        this.signupButton = page.locator('#signin2');
        this.usernameField = page.locator('#sign-username');
        this.passwordField = page.getByLabel('Password:');
        this.closeButton = page.getByRole('button', { name: 'Close' }).first();
    }
    async signupUnsuccess(username, password){
        await this.signupButton.click();
        await this.usernameField.fill(username);        
        await this.passwordField.fill(password);
        await this.closeButton.click();
        await console.log('Signup unsuccessful');  
    }   }