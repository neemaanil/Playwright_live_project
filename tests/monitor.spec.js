import {test, expect} from "@playwright/test"; 
import ValidLoginPage from "../pages/validlogin";
import datadriven from "../utils/datadriven.json";
import PurchasePage from "../pages/purchase";
import AddToCartPage from "../pages/addtocart";
import Productpage from "../pages/product";
import { Dialog } from "playwright";
test('Purchase Monitor', async ({page}) => {
await page.goto('https://demoblaze.com/');
const validLoginPage = new ValidLoginPage(page);
await validLoginPage.login(datadriven.username, datadriven.password);
const product2 = new Productpage(page);
await product2.monitorClick();
//await page.getByRole('Link', {name:'Monitors'}).click();
//await page.getByRole('link', { name: 'Apple monitor 24' }).click();
//add to cart button
const addToCartPage = new AddToCartPage(page);
await addToCartPage.addToCart();
//proceed to purchase the products in the cart
const purchasePage = new PurchasePage(page);
await purchasePage.purchaseProduct('Neema', 'India', 'Bangalore', '1234567890', 'June', '2028');
//await page.pause();
//await expect(page.getByText('Thank you for your purchase!')).toBeVisible({timeout:15000}); // assertion to verify the purchase was successful
await expect(page).toHaveURL('https://demoblaze.com/index.html');
//await purchasePage.okbutton();
//await page.getByRole('Button', { name: 'OK' }).click(); // click on OK button in the confirmation dialog
});