import ILogin from "../../interface/iLogin";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginScreen{
    /**
     * define selectors using getter methods
     */
    public get loginLogo() {
        return $('//android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView');
    }
    public get inputUserName() {
        return $('//android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.EditText');
    }
    public get inputPassword() {
        return $('//android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.EditText');
    }
    public get btnLogin() {
        return $("//android.widget.TextView[@text='Log in']");
    }
}
export default new LoginScreen();
