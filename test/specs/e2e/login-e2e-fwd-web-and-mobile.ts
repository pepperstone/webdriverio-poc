import HomePage from '../../page-objects/web/home-page';
import LoginPage from '../../page-objects/web/login-page';



describe('I should be able to go to in Login Page', () => {
    before('go first to Home page', async () => {
        await HomePage.open();
    })

    it('should be able to click customer login', async () => {
        await HomePage.clickLoginCustomer();
    });
    it('should be able to open new tab for login page', async () => {
        await browser.switchWindow('https://portal.fwd.com.ph/CustomerPortal/Account/UserLogin.aspx?');
    });
    it('should be able allow me to enter credentials and click submit button', async () => {
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    });
});