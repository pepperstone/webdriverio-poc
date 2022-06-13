// ===================================
//Capabilities for Browserstack mobile
// ===================================
//
/**
 * imports shared conf and includes only this service.
 * for selenium capabilities, kindly visit the link below
 * and follow JSON Wire protocol
 * https://www.browserstack.com/app-automate/capabilities
 */
import config from './bs.shared.conf';
//for automation part for importing app in 
//update app in browserstack
//check and delete previous version
//upload newest version


config.capabilities = [
    //android
    {
        "os_version": "9.0",
        "device": "Google Pixel 3",
        "app": "bs://34548614d610f6a15fc89df1ca09e594a5753e9f",
        "networkLogs": true,
    },
    //ios
    // {
    //     "os_version": "12",
    //     "device": "iPhone XS",
    //     "app": "bs://<need ipa file>",
    //     "networkLogs": true,
    // }

];
//
export default config;