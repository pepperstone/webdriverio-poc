// eslint-disable-next-line @typescript-eslint/no-var-requires
const assert = require('assert');
class HomePage {
  public get shortCopyUnit() {
    return $('.shortCopyUnit__email');
  }

  private get emailInputText() {
    return $('//div[2]/div[1]/input[@class="ant-input ant-input-lg"]');
  }

  private get emailJoinButton() {
    return $('//div/a[contains(text(),"Join Now")]');
  }

  public async getSignUp(email: string) {
    await this.emailInputText.setValue(email);
    await this.emailJoinButton.click();
    const actualUrl: string = await browser.getUrl();
    const expectedUrl =
      'https://secure.pepperstone.com/register/form?legalEntity=individual&locale=en&username=testEmail%40myEmail.com';

    await assert.equal(actualUrl, expectedUrl);
  }
}

export default new HomePage();
