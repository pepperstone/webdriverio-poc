const { config } = require('../services/browserstack/bs.app.android.conf')

// =====================================
// Integration Test Suite for Mobile
// =====================================
/**
 * this will override the services from wdio base conf
 * since most of us are using chrome, this driver was used
 */

// ============
// Specs
// ============
config.specs = [
    './test/specs/integration/example-app-fwd.ts',
];

exports.config = config;