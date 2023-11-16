const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json/',
	reportPath: 'cypress/reports/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'OrangeHRM E2E Cucumber/Cypress'},
            {label: 'Release', value: '1'},
            {label: 'Cycle', value: '-'},
            {label: 'Execution Start Time', value: '-'},
            {label: 'Execution End Time', value: '-'}
        ]
    }
});