import ILogin from "../interface/iLogin";
import SplashScreen from "../page-objects/app/splash-screen";
import LoginScreen from "../page-objects/app/login-screen";
//
class AppLoginFlow implements ILogin {
    public open() {
        console.log('just waiting somethiongto finish')
    }
    public async gotoLoginCustomer() {
        await SplashScreen.btnSkip.click()
    }
    public async getLogin(username: string, password: string) {
        await LoginScreen.inputUserName.setValue(username);
        await LoginScreen.inputPassword.setValue(password);
        await LoginScreen.btnLogin.click();
    }
}

export default new AppLoginFlow