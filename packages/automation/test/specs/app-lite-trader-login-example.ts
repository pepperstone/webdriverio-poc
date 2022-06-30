// eslint-disable-next-line @typescript-eslint/no-var-requires
const percySnapshot = require('@percy/webdriverio');

import LandingScreen from '../pageobjects/app/landing-screen';
import LoginScreen from '../pageobjects/app/login-screen';
import DiscoverScreen from '../pageobjects/app/discover-screen';

describe('I should be able to go to in Login Page', () => {
  before('go first to Landing Screen', async () => {
    await LandingScreen.clickLogin();
    await percySnapshot(driver, 'Landing screen');
  });
  it('should be able to do login in then Login Screen', async () => {
    await LoginScreen.getLogin('test@sample.com', '12345');
    await percySnapshot(driver, 'Login screen');
  });
  it('should direct to Discover Screen ', async () => {
    await expect(DiscoverScreen.discoverTitle).toBePresent();
    await percySnapshot(driver, 'Discover');
  });
});

//setx PERCY_TOKEN "e8d14f148a1e648087b0b9297e55710b2a88dda1be4ff0c0f9ec985804f665c9"
