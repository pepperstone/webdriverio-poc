import SplashScreen from  '../../page-objects/app/splash-screen';
import LoginScreen from  '../../page-objects/app/login-screen';

describe('My Login application', () => {
    it('should be to skip splash screen and directs user to login page', async () => {
        await SplashScreen.clickbtnSkip();
        await expect(LoginScreen.loginLogo).toBeDisplayed();

        await LoginScreen.login('test','test');
                                                                                                                                                                          

    });
});


