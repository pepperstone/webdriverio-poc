import { config } from './appium.conf';

config.services = (config.services ? config.services : []).concat([
    [
        'appium',
        {
            command: 'appium',
            args: {
                relaxedSecurity: true,
                address: "localhost"
            },
        },

    ],
]);

config.port = 4723;
config.path = '/wd/hub'

export default config;