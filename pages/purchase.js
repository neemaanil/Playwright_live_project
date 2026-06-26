import { expect } from '@playwright/test';
export default class PurchasePage {
    constructor(page) {
        this.page = page;
        this.cartLink = page.locator('#cartur');
        this.cartplaceOrderButton = page.getByRole('Button', { name: 'Place Order' });
        this.nameInput = page.locator('#name');
        this.countryInput = page.getByLabel('Country:');
        this.cityInput = page.getByLabel('City:'); 
        this.creditCardInput = page.getByLabel('Credit card:');
        this.monthInput = page.getByLabel('Month:');
        this.yearInput = page.getByLabel('Year:');
        this.purchaseButton = page.getByRole('Button', { name: 'Purchase' });
        this.confirmationText = page.getByText('Thank you for your purchase!');
        this.okButton = page.getByRole('Button', { name: 'OK' });
    }
    async purchaseProduct(name, country, city, creditCard, month, year) {
        await this.cartLink.click();
        await this.cartplaceOrderButton.click();    
        await this.nameInput.fill(name);
        await this.countryInput.fill(country);
        await this.cityInput.fill(city);    
        await this.creditCardInput.fill(creditCard);
        await this.monthInput.fill(month);
        await this.yearInput.fill(year);
        await this.purchaseButton.click();
        await this.page.waitForTimeout(2000);
        //await expect(this.confirmationText).toBeVisible();
        await this.okButton.click();
        await this.page.goto('https://demoblaze.com/index.html');
    }
    async okbutton()
    {
    await this.okButton.click(); 
    }
}