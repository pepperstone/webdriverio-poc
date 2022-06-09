import { config } from '../../wdio.shared.conf';

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;
// Use browserstack service
config.services = ['browserstack'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // Set your BrowserStack config
//        'browserstack.local': true,
        'browserstack.debug': true,

        // Set URL of the application under test
        app: process.env.BROWSERSTACK_APP_ID || 'bs://34548614d610f6a15fc89df1ca09e594a5753e9f',

        // Specify device and os_version for testing
        device: 'Google Pixel 3',
        os_version: '9.0',

        // Set other BrowserStack capabilities
        project: 'wdio-bs-test-project-pepperstone',
        build: 'android',
        name: 'wdio-test-android'
    },
];

exports.config = config;
