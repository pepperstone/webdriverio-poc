// =======================================================
// Test Runner Services and Capabilities for Chrome Driver
// =======================================================
//
/**
 * imports shared conf and includes only this service
 */
import { config } from '../../wdio.shared.conf';
//
// uses chromedriver service
config.services = ['chromedriver'];
//
// ========================
// Sets driver capabilities
// ========================
//
config.capabilities = [
  {
    maxInstances: 5,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      // args: [
      //   'headless',
      //   // Use --disable-gpu to avoid an error from a missing Mesa
      //   // library, as per
      //   // https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
      //   'disable-gpu',
      // ]
    }
  },
];

//exports.config = config;
export default config