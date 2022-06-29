class LoginScreen {
  public get loginScreenTitle() {
    return $("//android.widget.TextView[@text='Login']");
  }

  private get emailInputTxt() {
    return $("//android.widget.EditText[1][@text='Email']");
  }

  private get passwordInputTxt() {
    return $("//android.widget.EditText[2][@text='Password']");
  }

  private get btnLogin() {
    return $("//android.widget.TextView[@text='Log In']");
  }

  public async getLogin(username: string, password: string) {
    await this.emailInputTxt.setValue(username);
    await this.passwordInputTxt.setValue(password);
    await this.btnLogin.click();
  }
}

export default new LoginScreen();
