import { join } from 'path';
import config from './local.appium.conf';

config.specs = [
    './test/specs/**/*.ts',
];

config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '10',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(process.cwd(), './apps/fwd.apk'),
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;