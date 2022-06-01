import HomePage from  '../../page-objects/web/home-page';
import LoginPage from  '../../page-objects/web/login-page';

describe('My Login application', () => {
    it('should be able to click login link and enter credentials', async () => {
        await HomePage.open();
        await browser.setWindowSize(1170,947);
        //wait for browser to load the page
        await browser.setTimeout({ 'pageLoad': 10000 })

        // await $('//body/div[@id="root"]/div[1]/section[1]/div[1]/div[3]/div[1]/div[1]').click();

        // await $('body > div.jss328.jss326.jss83.popper.hasAnimation > ul > li:nth-child(1)').waitForExist()
        // await $('body > div.jss328.jss326.jss83.popper.hasAnimation > ul > li:nth-child(1)').click()

        await HomePage.clickLoginCustomer()

        await browser.pause(3000);
        await browser.switchWindow('https://portal.fwd.com.ph/CustomerPortal/Account/UserLogin.aspx?')

        await browser.setTimeout({ 'pageLoad': 10000 })

        // await $('#MainContent_LoginUser_UserName').setValue('test')
        // await $('#MainContent_LoginUser_Password').setValue('test')
        //await browser.pause(3000);
        //await $('#MainContent_LoginUser_LoginButton').click()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    });
});


