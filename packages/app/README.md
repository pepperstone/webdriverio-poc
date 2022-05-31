
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

* Setup [React Native Environment](https://reactnative.dev/docs/environment-setup)
* Create local `.env` file in root of project to match keys in `.default.env`

## Install Dependencies
`npm install`

## Install Cocoapods Dependencies IOS
    cd ios/
    pod install
    cd ..

## Run Application
* IOS
    * `npm run ios`
* Android
    * `npm run android`

&nbsp;

# Test lint
* Be sure to have eslint installed on your machine globally eg. `brew install eslint`.
### _Run_
* `npm run lint`

&nbsp;

# CI/CD

_Prerequisite_

- `npm install --global np` - https://www.npmjs.com/package/np

&nbsp;

# Environment Variables
* Adding a new environment variable requires 2 steps:
    * Add new key to `.default.env` (as well as your local `.env`)
    * Add new type to `/typings/react-native-dotenv.d.ts`, then reinstall node_modules

&nbsp;

# Folder Structure
* Feature folder structure design pattern.
* Taking parts from or mimicing Redux Feature-Folder design pattern.
    * Read more at: [React Feature-Folder pattern](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks)
* Other reading:
    * [A Feature Based approach](https://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/)

```
Example Feature-Folder structure.
...
|_src/
    |_common/ < all globally used components.
        |_components/
            |_button/
                |_Button.ts
                |_Styles.ts
            |_index.ts
        |_hooks
            |_useDebounce.ts
    |_features/ < feature specific components. 
        |_profile/
            |_components/ < used only within parent feature, else it's a common.
                |_profileHeader/
                    |_ProfileHeader.ts
                    |_Styles.ts
            |_screens/
                |_profile/
                    |_Profile.ts
                    |_Styles.ts
            |_index.ts
            |_types.ts
    |_otherFeature
```

`Note: will update structure once Global state management has been discussed and established.`

&nbsp;
# Commit conventions.
`git commit -m "<type>[(optional scope)]: <description>"`
 
_Types_

* build(): Build related changes (eg: npm related/ adding external dependencies).
* chore(): A code change that external user won't see (eg: change to .gitignore file or .prettierrc file).
* ci(): Continuous integration related.
* docs(): Documentation related changes.
* feat(api): A new feature.
* fix(): A bug fix.
* perf(): A code that improves performance.
* refactor(): A code that neither fix bug nor adds a feature. (eg: You can use this when there is semantic changes like renaming a variable/ function name).
* revert(): Reverts a previous commit.
* style(): A code that is related to styling.
* test(): Adding new test or making changes to existing test.

&nbsp;

### Commit Breaking changes
`git commit -m "<type>[(optional scope)]!: <BREAKING CHANGE: description>"`

* _Use "!" to draw attention for breaking changes. eg `chore(scope)!` or `chore!`_

* _`BREAKING CHANGE:` describe in detail what the change is and how it will effect the project._
    * If more description space is required. proceed with Multi-line Commits

&nbsp;

### Multi-line Commit:
_Commit wisely with multiLine_
* `git commit -m "<type>[(optional scope)]: <Short description>" -m "Detailed Gory Description."`

##### For further information https://www.conventionalcommits.org/en/v1.0.0/
&nbsp;

# Who can I talk to?

- Product Manager _Devi Kottary_ (devi.kottary@pepperstone.com).
- Lead Architect: _Lubna Ahmed_ (lubna.ahmed@pepperstone.com).
- Engineering Manager: _Tom Lingham_ (tom.lingham@pepperstone.com).
- Delivery Lead: _Ryan Ma_ (ryan.ma@pepperstone.com).
- Business Analyst: _Jericho Guerrero_ (jericho.guerrero@pepperstone.com).
- Frontend Developer: _Bashir Towdiee_ (bash.towdiee@pepperstone.com).