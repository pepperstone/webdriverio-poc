/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    public get inputEmailMobile () {
        return $('input[type="text"]');
    }

    public get inputPassword () {
        return $('input[type="password"]');
    }

    public get btnSubmit () {
        return $('#MainContent_LoginUser_LoginButton');
    }
}
export default new LoginPage();
