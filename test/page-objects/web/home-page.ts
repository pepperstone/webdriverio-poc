/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    public get dropdownLogin() {
        //return $('//div[@aria-label="Login"]');
        return $('//body/div[@id="root"]/div[1]/section[1]/div[1]/div[3]/div[1]/div[1]');
    }
    public get linkCustomer() {
        return $('body > div.jss328.jss326.jss83.popper.hasAnimation > ul > li:nth-child(1)');
    }
}
export default new HomePage();
