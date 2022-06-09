// Add modules to run
import WebHomePage from '../../page-objects/web/home-page';
import WebLoginPage from '../../page-objects/web/login-page';
import MobileHomePage from '../../page-objects/app/splash-screen';
import MobileLoginPage from '../../page-objects/app/login-screen';
//This will bundle all common actions to be used in the testcase below
import Login from '../../interface/iLogin'
//
const run = (login: Login) => {
    describe('I should be able to go to in Login Page', () => {
        before('go first to Home page', async () => {
            await login.open();
        })
        it('should be able to click customer login', async () => {
            await login.gotoLoginCustomer();
        });
        it('should be able allow me to enter credentials and click submit button', async () => {
            await login.getLogin('tomsmith', 'SuperSecretPassword!');
        });
    });

}
/**
 * Selects scripts to run per devices
 */
if (process.env.RUN_TYPE === 'WEB') {
    run(WebHomePage);
    run(WebLoginPage)
} else {
    run(MobileHomePage);
    run(MobileLoginPage)
}


