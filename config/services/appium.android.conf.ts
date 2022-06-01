const { config } = require('../services/appium.shared.conf')
import { join } from 'path';
// ====================
// Android capabilities
// ====================
/**
 * this will override the services from wdio base conf
 */
exports.config = {
    ...config,
    ...{
        capabilities: [
            {
                // The defaults you need to have in your config
                platformName: 'Android',
                maxInstances: 1,
                // For W3C the appium capabilities need to have an extension prefix
                // http://appium.io/docs/en/writing-running-appium/caps/
                // This is `appium:` for all Appium Capabilities which can be found here
                'appium:deviceName': 'emulator-5554',
                'appium:platformVersion': '10',
                'appium:orientation': 'PORTRAIT',
                'appium:automationName': 'UiAutomator2',
                // The path to the app
                'appium:app': join(process.cwd(), './apps/fwd.apk')
            }
        ]
    }
}
