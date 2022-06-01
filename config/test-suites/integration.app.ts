const { config } = require('../services/appium.android.conf')

// =====================================
// Integration Test Suite for Mobile
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
            './test/specs/integration/example-app-fwd.ts'
        ],
        // Patterns to exclude.
        exclude: [
            // 'path/to/excluded/files'
        ],
    }
}