/**
 * sub page containing specific selectors and methods for a specific page
 */
class SplashScreen {
    /**
     * define selectors using getter methods
     */
    public get btnSkip() {
        return $("//android.widget.TextView[@text='Skip']");
    }
}

export default new SplashScreen();
