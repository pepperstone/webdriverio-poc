import WebLoginFlow from '../../actions/common-login-flow-web'
import AppLoginFlow from '../../actions/common-login-flow-app'
//
import ILogin from '../../interface/iLogin'
//
const run = (login: ILogin) => {
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

// I had replayce RUN_TYPE as DEVICE
//since I'm using the RUN_TYPE from my local pc env variable
// it will overwrite DOTENV variable
const runType = process.env.DEVICE

if (runType === 'WEB') {
    run(WebLoginFlow);
    //} else if (runType === 'ANDROID' || runType === 'IOS') {
} else {
    run(AppLoginFlow);
}

//code below uses local pc env variable
// if (process.env.RUN_TYPE === 'app') {
//     run(WebLoginFlow);
//     //run(WebLoginPage)
// } else{
//     //run(AppLoginFlow);
//     run(AppLoginFlow);
//     //run(WebLoginPage)
//     //run(webLoginFlow);
//     // run(MobileHomePage);
//     // run(MobileLoginPage)
// }