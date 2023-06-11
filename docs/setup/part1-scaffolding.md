---
layout: default
title: Webpack and React
itle: Setting up a Firebase account
nav_order: 2
---
# Webpack and React

Scaffolding the front end with React and webpack

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

8. Add some code to the HTML - the docType and a `h1` tag with text. In the JavaScript File add a `console.log()` function. In terminal test with the script `npm run build`, your log should run if you add a second log, the pack should rebuild and a `bundle.js` file which has bundled the code will now appear in your dist folder. Add a `.gitignore` file to root and ignore `node_modules` if you are using GitHub as your version control.

9. If you are using VSCode install LiveServer extension to view changes in the front end HTML file and add the script tag to the HTML to link the JavaScript changes to the `bundle.js` file like so, `<script src ="bundle.js/>`.

10. Open the HTML page with LiveServer once it is installed and check the google console for your logs.

## React with CRA

As CRA (Create-React-App) bundles code with its own packages and bundles, you can use V9 directly without having to install webpack.
