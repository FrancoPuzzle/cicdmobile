# Puzzle core mobile React Native Typescript RN 0.63.4

Puzzle core mobile React Native with Typescript template React Native 0.63.4

## Create a new project from the core app

`$ git clone https://gitlab.com/puzzle3/core/react-native-boilerplate.git`

This is a core app for new project, so the second step is `renaming` the project.

### Renaming project: Install React Native Rename Globally

```
$ yarn global add react-native-rename
```

### Rename the project

```
$ npx react-native-rename <newName>
```

## Getting started

```
$ yarn install
$ cd ios && pod install
```

## VSCode extensions

- Prettier
- ESLint
- Editorconfig

## Create the .env file

There is a `.env.example` file in the root of the project, you have to rename to `.env` and add the proper values for each key.

## launch iOS

`$ react-native run-ios` or from XCode opening the workspace file

## launch Android

`$ react-native run-android` or from Android Studio

## Utils

- Execute `yarn run ts` for typescript live reload check (Compile ts project)
- Use [react-native-elements](https://react-native-training.github.io/react-native-elements/docs/overview.html)


## End-to-End Testing with Detox

### Prerequisites

Running Detox on iOS requires the following:

* Mac with macOS (10.15 (Catalina) or higher)

* Xcode 11.0 or higher with Xcode command line tools

In general for Android and iOS: Verify your node version by typing in terminal `node -v` to output current node version, should be 8.3.0 or higher

#### 1. (For iOS) If you don't have it, install [applesimutils](https://github.com/wix/AppleSimulatorUtils) on your machine

A collection of utils for Apple simulators, Detox uses it to communicate with the simulator. 

With [Homebrew](https://brew.sh/):

```sh
$ brew tap wix/brew
$ brew install applesimutils
```

> TIP: Verify it works by typing in terminal `applesimutils` to output the tool help screen

#### 2. If you don't have it, install Detox command line tools on your machine (detox-cli)

This package makes it easier to operate Detox from the command line. `detox-cli` should be installed globally, enabling usage of the command line tools outside of your npm scripts. `detox-cli` is merely a script that passes commands through to a the command line tool shipped inside `detox` package (in `node_modules/.bin/detox`).

  ```sh
  $ sudo npm install -g detox-cli
  ```

### Executing The Tests

We have created some scripts on the ´packege.json` to make it easier. So you can run from your terminal:

```sh
$ yarn e2e:<option>:<platform>:<mode>
```

> NOTE 

> `<option>` can be `build` or `test`

> `<platform>` can be `ios` or `android`

> `<mode>` can be `debug` or `release`

#### 1. Build the app for testing

```sh
$ yarn e2e:build:<platform>:<mode>
```

Example -> `$ yarn e2e:build:ios:debug`

#### 2. Test the app

> TIP: Make sure to have the emulator/simulator running to see the live action.

* Start react-native packager
 
  ```sh
  $ react-native start
  ```

* Run test

  ```sh
  $ yarn e2e:test:<platform>:<mode>
  ```

Example -> `$ yarn e2e:test:ios:debug`

NOTE: The default configuration for this project runs the tests on `iPhone 11` simulator for iOS and an AVD with name `Pixel_2_API_29` for Android.
If you need or want to run the tests on a different simulator for iOS or AVD for Android, go to the `package.json` and change it under -> `detox.configurations.<configuration>.device`.

### Troubleshoothing

#### `$ANDROID_SDK_ROOT` is not defined

Make sure to add `$ANDROID_SDK_ROOT` to your machine's env variables.

[Solutions for Mac](https://stackoverflow.com/questions/29391511/where-is-android-sdk-root-and-how-do-i-set-it/53138471)

[Solutions for Windows](https://stackoverflow.com/questions/23042638/how-do-i-set-android-sdk-home-environment-variable)

## Libraries used

- React Native version: 0.63.4.
- TypeScript
- Redux
- Apollo for GraphQL
- Formik
- Yup
- Styled Components
- React Native Dot Env (.env file)
- React Navigation v5

:v: **Enjoy!**
