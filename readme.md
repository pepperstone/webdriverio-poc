This will be populated properly later on, but for now 

if you want to run this on your local machine
1. type npm i
2. for running the web test just enter web.prod.integration
3. for running the mobile/app test, follow first the appium installations here https://pepperstone.atlassian.net/wiki/spaces/X2/pages/2640609441/Installations+and+Configurations
4. Update the capabilities section under config->services->app->wdio.android.app.ts based from your device created in Android Studio
5. Start your virtual device in Android Studio.
6. Then enter web.prod.integration app.android.integration

for browser stack
1. type npm i
2. credentials are being passed from its config files. This should allow us to run a test in browserstack butit will need access right if we need  to check the result
3. for web just enter bs.web.test
4. for app just enter bs.app.test