import { expect } from '@playwright/test';
export default class productSelection {
    constructor(page){
        this.page = page;
        this.homelink = page.getByRole('link', { name: 'Home' });
        this.cateGory = page.getByRole('link', {name:'Phones'});
        this.productlink = page.getByRole('link', { name: 'Samsung galaxy s7' });
        this.cateGory1 = page.getByRole('link', {name:'Laptops'});
        this.productlink1 = page.getByRole('link', { name: 'MacBook air' });
        this.cateGory2 = page.getByRole('link', {name:'Monitors'});
        this.productlink2 = page.getByRole('link', { name: 'Apple monitor 24' });
        this.mobile1 = page.locator('.hrefch').nth(0);
        this.mobile2 = page.locator('.hrefch').nth(2);
    }

async monitorClick()
{
this.cateGory2.click();
this.productlink2.click();
}
async mobileClick1()
{
await this.mobile1.click();
}

async mobileClick2()
{
await this.homelink.click();
await this.mobile2.click();
}
async lapTop()
{
await this.cateGory1.click(); 
await this.productlink1.click();
}
    async productClick1(){
 await this.homelink.click();
 await this.cateGory.click();
 await this.productlink.click();
}

 async productClick2(){
 await this.homelink.click();
 await this.cateGory1.click();
 await this.productlink1.click();
}
 async productClick3(){
 await this.homelink.click();
 await this.cateGory2.click();
  //await this.productlink2.waitFor({ state: 'visible' }); 
 //await expect(this.productlink2).toBeVisible();
 await this.productlink2.click();
}
    }
   