const { config } = require('../../wdio.base.conf')

// =====================================
// Test Runner Services and Capabilities
// =====================================
/**
 * this will override the services from wdio base conf
 * since most of us are using chrome, this driver was used
 */

exports.config = {
    ...config,
    ...{
      services: ['chromedriver'],
      capabilities: [
          {        
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                //headless: true
            }
        }
      ],
    }
}