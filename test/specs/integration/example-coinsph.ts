import HomePage from  '../../page-objects/web/home-page';
import LoginPage from  '../../page-objects/web/login-page';

describe('My Login application', () => {
    it('should be able to click login link and enter credentials', async () => {
        await HomePage.open();
        await browser.setWindowSize(1170,947)
        //wait for browser to load the page
        await HomePage.clickLogin();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});


