import LoginScreen from './login-screen';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const assert = require('assert');

class LandingScreen {
  private get loginButton() {
    return $("//android.widget.TextView[@text='Login']");
  }

  public async clickLogin() {
    await this.loginButton.click();

    const actualText = await LoginScreen.loginScreenTitle.getText();
    const expectedText = 'Login';

    await assert.equal(actualText, expectedText);
  }
}

export default new LandingScreen();
