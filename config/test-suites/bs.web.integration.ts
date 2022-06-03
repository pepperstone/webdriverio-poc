const { config } = require('../services/browserstack/bs.web.conf')

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
    './test/specs/integration/example-web-fwd.ts',
];

exports.config = config;