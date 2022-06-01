import { config } from '../app/wdio.shared.conf';

// ============
// Specs
// ============
config.specs = [
    './test/specs/integration/example-web-fwd.ts',
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
