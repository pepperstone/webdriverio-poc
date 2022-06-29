class discoverScreen {
  public get discoverTitle() {
    return $("//android.widget.TextView[@text='Discover']");
  }
}

export default new discoverScreen();
