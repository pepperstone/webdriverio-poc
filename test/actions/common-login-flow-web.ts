import ILogin from "../interface/iLogin";
import Page from "../page-objects/web/page";
import HomePage from "../page-objects/web/home-page"
import LoginPage from "../page-objects/web/login-page"
//
class WebLoginFlow extends Page implements ILogin {
    public open() {
        return super.open();
    }
    public async gotoLoginCustomer() {
        await HomePage.dropdownLogin.waitForExist({ timeout: 10000 })
        await (await HomePage.dropdownLogin).click();
        await HomePage.linkCustomer.waitForClickable({ timeout: 10000 })
        await HomePage.linkCustomer.click();
        await browser.switchWindow('https://portal.fwd.com.ph/CustomerPortal/Account/UserLogin.aspx?');
    }
    public async getLogin(username: string, password: string) {
        await LoginPage.inputEmailMobile.waitForClickable({ timeout: 10000 })
        await LoginPage.inputEmailMobile.setValue(username);
        await LoginPage.inputPassword.setValue(password);

        await browser.pause(3000);

        await LoginPage.btnSubmit.click();
    }
}

export default new WebLoginFlow