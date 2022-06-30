// eslint-disable-next-line @typescript-eslint/no-var-requires
const percySnapshot = require('@percy/webdriverio');
import HomePage from '../pageobjects/web/home-page';

describe('I should be able to go in SCA-Login Page', () => {
  before('open first browser and go to home page', async () => {
    await browser.url('/');
  });
  it('should show SCU email banner', async () => {
    await expect(HomePage.shortCopyUnit).toBePresent();
  });
  it('should direct to SCA-Login Page ', async () => {
    await percySnapshot(browser, 'SCU email banner');
    await HomePage.getSignUp('testEmail@myEmail.com');
  });
});

//setx PERCY_TOKEN "cb03baa5bab17fd5859fd17ccba4d0d1a3f60ce366efa0c18b7a8192c3b5dbb8"
