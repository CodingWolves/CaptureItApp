# TakePicApp

for changing the app for your needs you can change the values on tconfig.json
also to add logo please name your picture logo.png and replace it in src/images/
to change the app name change the name field in config.xml file

# .................................................. #
First you need to install all the dependencies of the project with command `npm install`.

**Browser** - To run on browser, run command `npm start`.

**Android** - To run on android, you may need the following softwares installed and added to environment variables.
1. JDK 8
2. Gradle
3. Android Studio / SDKManager

## React Development

You can run a regular react development live server with command :

`npm run react`

**\*** *Cordova plugins will not work this way, thats why theres a ReactDummy file for initializing browser arguments that are created by cordova.* 

## Build

To build use `npm run build` which will build the react project and transfer it to 'www' folder for cordova.

## Run

To build and then run the project, use commands:

1. Android - `npm run ba` or `npm run bandroid` (will start an emulator if android phone is not connected correctly).
2. Browser - `npm run bb` or `npm run bbrowser` or `npm start`.

To run the project after a build was made, use commands:

1. Android - `npm run a` or `npm run android` (will start an emulator if android phone is not connected correctly).
2. Browser - `npm run b` or `npm run browser`.