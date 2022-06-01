/**
 * sub page containing specific selectors and methods for a specific page
 */
class SplashScreen{
    /**
     * define selectors using getter methods
     */
    private get btnSkip () {
        return $("//android.widget.TextView[@text='Skip']");
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async clickbtnSkip () {
        await this.btnSkip.click();
    }

}

export default new SplashScreen();
