import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    private get inputEmailMobile () {
        return $('input[type="text"]');
    }

    private get inputPassword () {
        return $('input[type="password"]');
    }

    private get btnSubmit () {
        return $('#MainContent_LoginUser_LoginButton');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputEmailMobile.waitForClickable({timeout: 10000})
        await this.inputEmailMobile.setValue(username);
        await this.inputPassword.setValue(password);

        await browser.pause(3000);
        
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
