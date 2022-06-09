import AppLoginFlow from '../../actions/common-login-flow-app'
//
describe('I should be able to go to in Login Page', () => {
    before('go first to Home page', async () => {
        await AppLoginFlow.open();
    })
    it('should be able to click customer login', async () => {
        await AppLoginFlow.gotoLoginCustomer();
    });
    it('should be able allow me to enter credentials and click submit button', async () => {
        await AppLoginFlow.getLogin('tomsmith', 'SuperSecretPassword!');
    });
});
