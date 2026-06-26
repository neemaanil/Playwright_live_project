import {test, expect} from "@playwright/test"; 
import ValidLoginPage from "../pages/validlogin";
import datadriven from "../utils/datadriven.json";
import PurchasePage from "../pages/purchase";
import { Dialog } from "playwright";
import AddToCartPage from "../pages/addtocart";
import Productpage from "../pages/product";
import constant from "../constants/constant.js"
test.beforeEach(async({page})=> {
await page.goto(constant.BASE_URL);
});
//import { TIMEOUT } from "node:dns";
test('Purchase multiple products', async ({page}) => {
const validLoginPage = new ValidLoginPage(page);
await validLoginPage.login(datadriven.username, datadriven.password);
//await page.locator('.hrefch').nth(0).click();
const product2 = new Productpage(page);
await product2.mobileClick1();
const addToCartPage1 = new AddToCartPage(page);
await addToCartPage1.addToCart();
//await page.locator ('.btn.btn-success.btn-lg').click();//add to cart button
 //const dialogPromise1 = page.waitForEvent('dialog');
    //const dialog1 = await dialogPromise1; // wait for the dialog to appear
//await dialog1.accept(); // accept the dialog
//await page.getByRole('link', { name: 'Home' }).click(); 
//await page.locator('.hrefch').nth(2).click();
await product2.mobileClick2();
await addToCartPage1.addToCart();
//await page.locator ('.btn.btn-success.btn-lg').click();//add to cart button
 //const dialogPromise2 = page.waitForEvent('dialog');
    //const dialog2 = await dialogPromise2; // wait for the dialog to appear
//await dialog2.accept(); // accept the dialog
//proceed to purchase the products in the cart
const purchasePage = new PurchasePage(page);
await purchasePage.purchaseProduct('Neema', 'India', 'Bangalore', '1234567890', 'June', '2028');
/*await page.locator('#cartur').click();
//*await page.getByRole('link', { name: 'Cart' }).click();
await page.getByRole('Button', { name: 'Place Order' }).click(); 
await page.locator('#name').fill('Neema');
await page.getByLabel('Country:').fill('India');
await page.getByLabel('City:').fill('Bangalore');
await page.getByLabel('Credit card:').fill('1234567890');
await page.getByLabel('Month:').fill('June');
await page.getByLabel('Year:').fill('2028');
await page.getByRole('Button', { name: 'Purchase' }).click(); 
*/
//await expect(page.getByText('Thank you for your purchase!')).toBeVisible(); // assertion to verify the purchase was successful
//await page.getByRole('Button', { name: 'OK' }).click(); // click on OK button in the confirmation dialog

});
test('Purchase Laptop', async ({page}) => {
//await page.goto('https://demoblaze.com/');
const validLoginPage = new ValidLoginPage(page);
await validLoginPage.login(datadriven.username, datadriven.password);
const product1 = new Productpage(page);
await product1.lapTop();
//await page.getByRole('Link', {name:'Laptops'}).click();
//await page.getByRole('link', { name: 'MacBook air' }).click();
//add to cart button
const addToCartPage3 = new AddToCartPage(page);
await addToCartPage3.addToCart();
//proceed to purchase the products in the cart
const purchasePage1 = new PurchasePage(page);
await purchasePage1.purchaseProduct('Neema', 'Australia', 'Dubai', '1234567890', 'July', '2029');
//await expect(page.getByText('Thank you for your purchase!')).toBeVisible();
//await page.getByRole('Button', { name: 'OK' }).click(); 
});

test('Purchase All', async ({page}) => {
//await page.goto('https://demoblaze.com/');
const validLoginPage = new ValidLoginPage(page);
await validLoginPage.login(datadriven.username, datadriven.password);
//await page.pause();
//const welcomepagelocator1 = validLoginPage.welcomescreen();
//await expect(welcomepagelocator1).toBeVisible();
const product = new Productpage(page);
await product.productClick1();
//await page.getByRole('link', {name:'Phones'}).click();
//await page.getByRole('link', { name: 'Samsung galaxy s7' }).click();
const addToCartPage4 = new AddToCartPage(page);
await addToCartPage4.addToCart();
await product.productClick2();

//await page.getByRole('link', { name: 'Home' }).click(); 
//await page.getByRole('link', {name:'Laptops'}).click();
//await page.getByRole('link', { name: 'MacBook air' }).click();
const addToCartPage5 = new AddToCartPage(page);
await addToCartPage5.addToCart();
//await page.getByRole('link', { name: 'Home' }).click(); 
//await page.getByRole('link', {name:'Monitors'}).click();
//await expect(page.getByRole('link', { name: 'Apple monitor 24' })).toBeVisible();
//await page.getByRole('link', { name: 'Apple monitor 24' }).click();
await product.productClick3();
const addToCartPage6 = new AddToCartPage(page);
await addToCartPage6.addToCart();
//await page.waitForTimeout(5000);
//await expect(page.getByRole('link', { name: 'Apple monitor 24' })).toBeVisible();
//proceed to purchase the products in the cart
const purchasePage2 = new PurchasePage(page);
await purchasePage2.purchaseProduct('Neema', 'Sweden', 'Stockholm', '123456756760', 'December', '2030');
//await expect(page.getByText('Thank you for your purchase!')).toBeVisible();
//await page.getByRole('Button', { name: 'OK' }).click();
//await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
//await page.getByRole('link', { name: 'Log out' }).click();
//await page.pause();
await page.waitForTimeout(3000);
await validLoginPage.logout();
await expect(page).toHaveURL('https://demoblaze.com/index.html');
});
