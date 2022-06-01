const { config } = require('../services/web/chrome.driver.conf')

// =====================================
// Integration Test Suite for Web
// =====================================
/**
 * this will override the services from wdio base conf
 * since most of us are using chrome, this driver was used
 */

exports.config = {
    ...config,
    ...{
        specs: [
            // './test/specs/**/*.ts'
            // './test/specs/integration/example-coinsph.ts'
            './test/specs/integration/example-web-fwd.ts'
        ],
        // Patterns to exclude.
        exclude: [
            // 'path/to/excluded/files'
        ],
    }
}