import { config } from '../app/wdio.shared.conf';

// ============
// Specs
// ============
config.specs = [
    './test/specs/integration/example-app-fwd.ts',
];
config.exclude = [
    // Exclude this one because the test can only be executed on emulators/simulators
    //'./test/specs/integration/example-app-fwd.ts',
];

// =============================
// Browserstack specific config
// =============================
// User configuration
//config.user = process.env.BROWSERSTACK_USER;
//config.key = process.env.BROWSERSTACK_ACCESS_KEY;
config.user = process.env.BROWSERSTACK_USER || 'pepperstonedevel1';
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'sjHXJqLy6qsFsJyN2LiK';
//config.user = process.env.BROWSERSTACK_USER || 'BROWSERSTACK_USER';
//config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY';
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
