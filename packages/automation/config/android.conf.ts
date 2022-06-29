import { join } from 'path';
import config from './local.appium.conf';
import { RunType } from '../test/types';

config.specs = ['./test/specs/**/app-*.ts'];

config.capabilities = [
  {
    platformName: RunType.ANDROID,
    maxInstances: 1,
    'appium:deviceName': 'emulator-5554',
    'appium:platformVersion': '10',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    'appium:app': join(process.cwd(), './apps/lite-trader-pt153.apk'),
    'appium:newCommandTimeout': 240,
    'appium:appWaitActivity': 'com.litetrader.MainActivity',
  },
];

exports.config = config;
