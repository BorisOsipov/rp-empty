const reportportal = require('wdio-reportportal-reporter');
const RpService = require("wdio-reportportal-service");

const conf = {
    reportPortalClientConfig: {
        token: 'ee9a938c-0087-4765-ba41-9bcf44edfc1b',
        endpoint: 'https://demo.reportportal.io/api/v1',
        launch: 'borisosipov_TEST_EXAMPLE',
        project: 'borisosipov_personal',
        description: "Launch description text",
        mode: 'DEFAULT',
        debug: false,
        attributes: [{key: "tag", value: "foo"}],
    },
    reportSeleniumCommands: false,
    autoAttachScreenshots: true,
    seleniumCommandsLogLevel: 'debug',
    screenshotsLogLevel: 'info',
    parseTagsFromTestTitle: true
};

exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver', [RpService, {}]],
    framework: 'mocha',
    reporters: ['spec', [reportportal, conf]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
