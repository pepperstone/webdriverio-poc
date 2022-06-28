# _Pepperstone Lite Trader Mobile Application_

https://pepperstone.com/en-au/why-pepperstone/about/

&nbsp;

# Tech/framework used

- Framework: `Bare React-Native` No Expo - https://reactnative.dev/.

- Language: `Typescript`.

- CodeStyle: `Functional Components`.

- Navigation: `React Navigation V6` - https://reactnavigation.org/.

- JS Engine: `Hermes` - https://reactnative.dev/docs/hermes.

- API: `REST`.

- Debugger tool: `Flipper` - https://fbflipper.com/docs/getting-started/index/.

- Global State Management: - `Redux-toolkit` - https://redux-toolkit.js.org/.

- Theme provider: - `React-Navigation useTheme` - https://reactnavigation.org/docs/use-theme/

- Styles: - `StyleSheet with custom Theme Hook` - src/lib/theme/Theme
  &nbsp;

# How to use?

- Setup [React Native Environment](https://reactnative.dev/docs/environment-setup)
- Create local `.env` file in root of project to match keys in `.default.env`

## Install Dependencies

- At repo root, run
  - `yarn`

&nbsp;

## Install Cocoapods Dependencies IOS

    cd packages/app/ios/
    pod install
    cd ..

&nbsp;

## Run Application

- ### If using Xcode
  - Open LiteTrader.xcworkspaces in xcode.
  - Build to selected device.
  - Command line run `yarn start` to start the metro bundler.

&nbsp;

- ### If using Android studio
  - Open android file in Android studio.
  - Sync gradle files.
  - Build to selected emulator or physical device.
  - Command line run `yarn start` to start the metro bundler.
  - To link metrol bundler with emulator/device. In terminal run `adb reverse tcp:8081 tcp:8081`.

&nbsp;

- ### If using Command line.
  - IOS
    - `yarn ios`
  - Android
    - `yarn android`

&nbsp;

# Test lint

- Be sure to have eslint installed on your machine globally eg. `brew install eslint`.

### _Run_

- `yarn lint`

&nbsp;

# CI/CD

_Prerequisite_

- `npm install --global np` - https://www.npmjs.com/package/np

&nbsp;

# Environment Variables

- Adding a new environment variable requires 2 steps:
  - Add new key to `.default.env` (as well as your local `.env`)
  - Add new type to `/typings/react-native-dotenv.d.ts`, then reinstall node_modules
