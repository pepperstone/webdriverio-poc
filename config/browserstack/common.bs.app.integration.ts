// ==============================
// Integration Test Suite for Browserstack App
// ==============================
//
/**
 * Triggered when npm run common.bs.app.integration 
 * this will include the specs and exclude config from wdio base conf
 */
//
//uses mocha and runs chrome driver services
import config from './bs.app.conf';
//
/**
 * specs will tell wdio the specs file to be executed
 * defined under integration test
 * there are a lot of topics of it
 * you can visit this site for reference
 * https://www.techtarget.com/searchsoftwarequality/definition/integration-testing
 */
config.specs = [
    //for now this is just an example
    './test/specs/**/*.ts'
];
//
/**
 * while exclude, disregards spec to run
 */
config.exclude = [];
//
// the specs above uses mocha fw
config.framework = 'mocha';
//
exports.config = config;