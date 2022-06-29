import HomePage from '../pageobjects/web/home-page';

describe('I should be able to go in SCA-Login Page', () => {
  before('open first browser and go to home page', async () => {
    await browser.url('/');
  });
  it('should show SCU email banner', async () => {
    await expect(HomePage.shortCopyUnit).toBePresent();
  });
  it('should direct to SCA-Login Page ', async () => {
    await HomePage.getSignUp('testEmail@myEmail.com');
  });
});
