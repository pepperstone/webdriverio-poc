import config from "./bs.shared.conf";

config.capabilities = [
  //android
  {
    os_version: "9.0",
    device: "Google Pixel 3",
    app: "bs://34548614d610f6a15fc89df1ca09e594a5753e9f",
    networkLogs: true,
  },
  // {
  //     "os_version": "12",
  //     "device": "iPhone XS",
  //     "app": "bs://<need ipa file>",
  //     "networkLogs": true,
  // }
];

export default config;
