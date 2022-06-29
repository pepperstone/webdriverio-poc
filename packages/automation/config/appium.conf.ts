export const config: WebdriverIO.Config = {
  runner: "local",
  specs: [],
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "./test/tsconfig.json",
    },
  },
  capabilities: [],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 45000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [],
  framework: "mocha",
  reporters: [["allure", { outputDir: "allure-results" }]],
  mochaOpts: {
    ui: "bdd",
    timeout: 3 * 60 * 1000, // 3min
  },
};
