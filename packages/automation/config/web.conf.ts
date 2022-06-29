import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: './test/tsconfig.json',
    },
  },
  port: 4723,
  specs: ['./test/specs/**/web-*.ts'],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      acceptInsecureCerts: true,
    },
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://pepperstone.com/en-au/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: [['allure', { outputDir: 'allure-results' }], 'spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  beforeTest: function (test: any, context: any) {
    browser.maximizeWindow();
  },
};
