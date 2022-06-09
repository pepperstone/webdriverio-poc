// ==============================
// Integration Test Suite for Web
// ==============================
//
/**
 * Triggered when npm run web.prod.integration 
 * this will include the specs, exclude and report from wdio base conf
 */
//
//uses mocha and runs chrome driver services
import config from '../services/web/chrome.driver.conf';
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
    './test/specs/integration/example-web-mobile.ts'
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
/**
 * instead setting browsersize in the spec
 * we can config it right here
 */
config.beforeTest = function (test, context) {
    browser.maximizeWindow()
};
//
exports.config = config;