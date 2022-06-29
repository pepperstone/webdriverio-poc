import { join } from "path";
import config from "./local.appium.conf";
import { RunType } from "../test/types";

config.specs = ["./test/specs/**/*.ts"];

config.capabilities = [
  {
    platformName: RunType.IOS,
    maxInstances: 1,
    "appium:deviceName": "iPhone 13",
    "appium:platformVersion": "15.4",
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "XCUITest",
    "appium:app": join(process.cwd(), "./apps/fwd.ipa"),
    "appium:newCommandTimeout": 240,
  },
];

exports.config = config;
