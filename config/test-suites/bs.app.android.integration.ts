// ==============================
// Integration Test Suite for Android
// ==============================
/**
 * Triggered when npm run app.android.integration
 * this will include the specs, exclude and report from wdio base conf
 */
//
//uses appium for android services
import  config  from '../services/app/android.app.conf';
//
/**
 * specs will tell wdio the specs file to be executed
 * defined under integration test
 * there are a lot of topics of it
 * you can visit this site for reference
 * https://www.techtarget.com/searchsoftwarequality/definition/integration-testing
 */
//
config.specs = [
    './test/specs/integration/example-app-fwd.ts',
];
//
/**
 * While exclude, disregards spec to run
 */
config.exclude = []
//
/**
 * And reporters section allows you to create test report 
 * this is only used in local machine testing
 * you can select between the two reporting services below
 * if using browserstack services, this is no longer needed
 */
config.reporters = [
    /**
     * Allure a reporting framework offers you a properly organized
     * test data/result, this will create allure-result folder on root
     * from that using npm run generate.report.allure it will create
     * the test report for the result
     * you can also add screenshots and videos as needed
     */
    ['allure',
        {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false
        }
    ],
    /**
     * <can run simultaneously!>
     * While spec reporter offers you minimal reporting
     * through cli great for unit testing
     */
    'spec'
];
//
exports.config = config;