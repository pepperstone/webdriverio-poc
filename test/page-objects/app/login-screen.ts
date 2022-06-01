/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginScreen{
    /**
     * define selectors using getter methods
     */
     public get loginLogo () {
        return $('//android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView');
    }
    private get inputUserName () {
        return $('//android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.EditText');
    }
    private get inputPassword () {
        return $('//android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.EditText');
    }
    private get btnLogin () {
        return $("//android.widget.TextView[@text='Log in']");
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

     public async login (username: string, password: string) {
        await this.inputUserName.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

}

export default new LoginScreen();
