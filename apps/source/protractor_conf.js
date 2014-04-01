// An example configuration file.
exports.config = {
  // Do not start a Selenium Standalone sever - only run this using chrome.
  chromeOnly: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  


  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['src/**/*.e2e.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
