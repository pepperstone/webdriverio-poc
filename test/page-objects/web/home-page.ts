import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    // public get loginLink () {
    //     return $('#menu-item-6243 .menu-item-link');
    // }
    public get dropdownLogin () {
        //return $('//div[@aria-label="Login"]');
        return $('//body/div[@id="root"]/div[1]/section[1]/div[1]/div[3]/div[1]/div[1]');
    }
    public get linkCustomer () {
        return $('//body/div[8]/ul[1]/li[1]/a[1]/span[2]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // public async clickLogin () {
    //     await this.loginLink.waitForClickable({timeout: 10000})
    //     await this.loginLink.click();
    // }
    public async clickLoginCustomer () {
        //await this.dropdownLogin.waitForClickable({timeout: 10000})
        await this.dropdownLogin.click();
        //await this.linkCustomer.waitForClickable({timeout: 10000})
        await this.linkCustomer.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new HomePage();
