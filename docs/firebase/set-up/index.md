---
layout: default
title: Setting up a Firebase account
parent: set-up
grand_parent: firebase
nav_order: 1
---

# Setting up a Firebase account

If you have a google account sign in and go to the [Firebase site](https://firebase.google.com/) in the top right corner you should see you already have an account you can now create a new project and give it a name.

This is the free tier for developers.

Accept terms and default settings and in the background the spinner should start configuring your backend with Firebase. On the prompt your Firebase project is ready.

Under the cog Project Overview you will see the Build, Release and Monitior, Analytics and Engagle tools. And you will see you have been set up with the Spark account - no cost.

## The Firebase admin console

Go to the [Firebase Admin Console](https://console.firebase.google.com/) this is where all your Firebase projects will be listed. On the top right you will also get the latest official documentation - click the docs icon.

[Firebase Docs](https://firebase.google.com/docs) is easy to read and follow and is a great reference for trouble shooting.

## Firebase V9 vs V8

Version 8 of Firebase uses an object-oriented approach - which means Google Cloud Functions were accessing the Constructors from the SDK directly. V9 requires module bundlers - such as webpack (which we will use) so that the modules can import only the methods required from their individual modules. This bundling and modularisation of the SDK makes code more efficient and performant.

The docs show the differences in the code base between v8 and v9 - you can toggle between the tabs to see them.

## Firebase with React

As CRA (Create-React-App) bundles code with its own packages and bundles, you can use V9 directly without having to install webpack.

## Firebase with Webpack - HTML, CSS, JavaScript only no frameworks

1. Ensure you have NodeJS installed
2. In your code editor create your files - `index.html`, `index.css`, `index.js`
3. Create folders - dist and src - the HTML files is in the dist folder and the scripts in the src folder
4. In terminal run `npm init -y` for your `package.json` file
5. Install the webpack and webpack CLI tools - `npm install webpack webpack-cli -D` as a dev dependency
6. Create a webpack config file - `webpack.config.js` in the root of the app in watch mode so that it rebundles changes live.

```JavaScript
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  watch: true,
}
```

7. Add the script to run the build command in your `package.json` file

```JSON
{
  "scripts": {
    "build": "webpack --mode=development"
},

```

8. Add some code to the HTML - the docType and a `h1` tag with text. In the JavaScript File add a `console.log()` function. In terminal test with the script `npm run build`, your log should run if you add a second log, the pack should rebuild and a `bundle.js` file which has bundled the code will now appear in your dist folder.

9. If you are using VSCode install LiveServer extension to view changes in the front end HTML file and add the script tag to the HTML to link the JavaScript changes to the `bundle.js` file like so, `<script src ="bundle.js/>`.

10. Open the HTML page with LiveServer once it is installed and check the google console for your logs.
