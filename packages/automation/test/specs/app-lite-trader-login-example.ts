import LandingScreen from '../pageobjects/mobile/landing-screen';
import LoginScreen from '../pageobjects/mobile/login-screen';
import DiscoverScreen from '../pageobjects/mobile/discover-screen';

describe('I should be able to go to in Login Page', () => {
  before('go first to Landing Screen', async () => {
    await LandingScreen.clickLogin();
  });
  it('should be able to do login in then Login Screen', async () => {
    await LoginScreen.getLogin('test@sample.com', '12345');
  });
  it('should direct to Discover Screen ', async () => {
    await expect(DiscoverScreen.discoverTitle).toBePresent();
  });
});
