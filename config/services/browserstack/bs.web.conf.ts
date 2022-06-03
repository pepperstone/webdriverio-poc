import { config } from '../app/wdio.shared.conf';

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
        host: 'hub.browserstack.com',

        // Specify browser versions
        'browser': 'chrome',
        'browser_version': 'latest',
        'os': 'Windows',
        'os_version': '10',

        // Set other BrowserStack capabilities
        project: 'wdio-bs-test-project-pepperstone',
        build: 'web'
    },
];

exports.config = config;
