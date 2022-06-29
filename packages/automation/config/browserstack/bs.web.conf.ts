import config from "./bs.shared.conf";

const date: Date = new Date();
const dateToday: string = date.toLocaleDateString();

var os = {
  // Desktop
  Win: "Windows",
  Win_11: "11",
  Win_10: "10",
  Win_8: "8.1",
  Mac: "OS X",
  Monterey: "Monterey",
  BigSur: "Big Sur",
  Catalina: "Catalina",
  // Tab
  tabS4_osVersion: "8.1",
  IPad9th_osVersion: "15",
  IPad2__osVersion: "2",
  Nexus9: "5.1",
  // Mobile
  Pixel4XL_osVersion: "10.0",
  GalaxyS22Ultra_osVersion: "12.0",
  iPhoneSE_osVersion: "11",
  iPhoneX_osVersion: "15",
};

var deviceType = {
  // Desktop
  desktopResolution: "1024x768",
  // Tab
  TabS4: "Samsung Galaxy Tab S4",
  IPad9th: "iPad 9th",
  IPad2: "iPad 2",
  Nexus9: "Google Nexus 9",
  // Mobile
  Pixel4XL: "Google Pixel 4 XL",
  GalaxyS22Ultra: "Samsung Galaxy S22 Ultra",
  iPhoneSE: "iPhone SE",
  iPhoneX: "iPhone XS",
};

var browserType = {
  chrome: "Chrome",
  firefox: "Firefox",
  edge: "Edge",
  safari: "Safari",
};
var seleniumVersion = {
  edge: "3.5.2",
  chrome: "3.14.0",
  safari: "3.14.0",
  firefox: "3.10.0",
};

var buildType = {
  desktop: "pre-trade-desktop" + "-" + dateToday,
  tab: "pre-trade-tab" + "-" + dateToday,
  mobile: "pre-trade-mobile" + "-" + dateToday,
};

const projectName: string = "test in ";

config.hostname = "hub.browserstack.com";

config.capabilities = [
  // ////////////
  // //Desktop//
  // ///////////
  // win + edge
  {
    "bstack:options": {
      os: os.Win,
      osVersion: os.Win_11,
      resolution: deviceType.desktopResolution,
      seleniumVersion: seleniumVersion.edge,
      networkLogs: true,
      projectName: projectName + browserType.edge,
      buildName: buildType.desktop,
    },
    browserName: browserType.edge,
    browserVersion: "latest",
  },
  // win + chrome
  // {
  //     'bstack:options': {
  //         "os": os.Win,
  //         "osVersion": os.Win_11,
  //         "resolution": deviceType.desktopResolution,
  //         "seleniumVersion": seleniumVersion.chrome,
  //         "networkLogs": true,
  //         "projectName": projectName + browserType.chrome,
  //         "buildName": buildType.desktop,
  //     },
  //     "browserName": browserType.chrome,
  //     "browserVersion": "latest",
  // },
  // // win + firefox
  // {
  //     'bstack:options': {
  //         "os": os.Win,
  //         "osVersion": os.Win_11,
  //         "resolution": deviceType.desktopResolution,
  //         "seleniumVersion": seleniumVersion.firefox,
  //         "networkLogs": true,
  //         "projectName": projectName + browserType.firefox,
  //         "buildName": buildType.desktop,
  //     },
  //     "browserName": browserType.firefox,
  //     "browserVersion": "latest",
  // },
  // // mac + safari
  // {
  //     'bstack:options': {
  //         "os": os.Mac,
  //         "osVersion": os.Monterey,
  //         "resolution": deviceType.desktopResolution,
  //         "seleniumVersion": seleniumVersion.safari,
  //         "networkLogs": true,
  //         "projectName": projectName + browserType.safari,
  //         "buildName": buildType.desktop,
  //     },
  //     "browserName": browserType.safari,
  //     "browserVersion": "latest",
  // },
  // // mac + chrome
  // {
  //     'bstack:options': {
  //         "os": os.Mac,
  //         "osVersion": os.Monterey,
  //         "resolution": deviceType.desktopResolution,
  //         "seleniumVersion": seleniumVersion.chrome,
  //         "networkLogs": true,
  //         "projectName": projectName + browserType.chrome,
  //         "buildName": buildType.desktop,
  //     },
  //     "browserName": browserType.chrome,
  //     "browserVersion": "latest",
  // },
  // // mac + firefox
  // {
  //     'bstack:options': {
  //         "os": os.Mac,
  //         "osVersion": os.Monterey,
  //         "resolution": deviceType.desktopResolution,
  //         "seleniumVersion": seleniumVersion.firefox,
  //         "networkLogs": true,
  //         "projectName": projectName + browserType.firefox,
  //         "buildName": buildType.desktop,
  //     },
  //     "browserName": browserType.firefox,
  //     "browserVersion": "latest",
  // },
  // // mac + edge
  // {
  //     'bstack:options': {
  //         "os": os.Mac,
  //         "osVersion": os.Monterey,
  //         "resolution": deviceType.desktopResolution,
  //         "seleniumVersion": seleniumVersion.edge,
  //         "networkLogs": true,
  //         "projectName": projectName + browserType.edge,
  //         "buildName": buildType.desktop,
  //     },
  //     "browserName": browserType.edge,
  //     "browserVersion": "latest",
  // },

  /////////////Needs license for real device as of this moment ////////////
  ///////
  //Tab//
  ///////
  // {
  //     'bstack:options': {
  //         "deviceName": deviceType.TabS4,
  //         "osVersion": os.tabS4_osVersion,
  //         "realMobile": true,
  //         "networkLogs": true,
  //         "projectName": projectName + browserType.chrome,
  //         "buildName": buildType.tab,
  //     },
  //     "browserName": browserType.chrome,
  //     "browserVersion": "latest",
  // },
  // //////////
  // //Mobile//
  // //////////
  // {
  //     'bstack:options': {
  //         "deviceName": deviceType.IPad9th,
  //         "osVersion": os.IPad9th_osVersion,
  //         "realMobile": true,
  //         "networkLogs": true,
  //         "projectName": projectName + browserType.safari,
  //         "buildName": buildType.mobile,
  //     },
  //     "browserName": browserType.safari,
  //     "browserVersion": "latest",
  // }
];

export default config;
