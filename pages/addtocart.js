import { Dialog } from "playwright";
export default class AddToCartPage {
    constructor(page) {
        this.page = page;
        this.AddToCartButton=page.locator('.btn.btn-success.btn-lg');
        
    }
    async addToCart() {
       const dialogPromise = this.page.waitForEvent('dialog');
        await this.AddToCartButton.click();
        const dialog = await dialogPromise; // wait for the dialog to appear
        await dialog.accept(); // accept the dialog
        
    }   
}