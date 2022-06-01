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
        return $('body > div.jss328.jss326.jss83.popper.hasAnimation > ul > li:nth-child(1)');
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
