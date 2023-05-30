---
layout: default
title: Setting up a Firebase account
parent: set-up
---

# Setting up a Firebase account

If you have a google account sign in and go to the [Firebase site](https://firebase.google.com/) in the top right corner you should see you already have an account you can now create a new project and give it a name.

This is the free tier for developers.

Accept terms and default settings and in the background the spinner should start configuring your backend with Firebase. On the prompt your Firebase project is ready.

Under the cog Project Overview you will see the Build, Release and Monitior, Analytics and Engagle tools. And you will see you have been set up with the Spark account - no cost.

Continue to register your app (select web/ mobile/ flutter/ gaming depending on what you are building). This app is a web-app only. Firebase then provides boiler plate code for config. In the `src` folder of your React frontend, add a `configs` folder and paste the boiler plate code provided. This connects your local machine to (Google Cloud Services) GCS.

Hold off on clicking the deploy button and go back to the Firebase admin console. You will see your app created. Click into your app and you will get the project settings on your Firebase admin console. Click all the project settings tabs to familiarise yourself with some of the set-up and options now available to you.
## The Firebase admin console

Go to the [Firebase Admin Console](https://console.firebase.google.com/) this is where all your Firebase projects will be listed. On the top right you will also get the latest official documentation - click the docs icon.

[Firebase Docs](https://firebase.google.com/docs) is easy to read and follow and is a great reference for trouble shooting.

## Firebase V9 vs V8

Version 8 of Firebase uses an object-oriented approach - which means Google Cloud Functions were accessing the Constructors from the SDK directly. V9 requires module bundlers - such as webpack (which we will use) so that the modules can import only the methods required from their individual modules. This bundling and modularisation of the SDK makes code more efficient and performant.

The docs show the differences in the code base between v8 and v9 - you can toggle between the tabs to see them.

# Scripts

To install Firebase tools globally

`npm install -g firebase-tools`

cd into your project and install Firebase

`npm install firebase`

Login to your account
`firebase login`
Login prompts will appear

`Firebase optionally collects CLI and Emulator Suite usage and error reporting information to help improve our products. Data is collected in accordance with Google's privacy policy (https://policies.google.com/privacy) and is not used to identify you.`

`Allow Firebase to collect CLI and Emulator Suite usage and error reporting information?`

This will take you to your google account associated with GCS and Firebase. Agreeing to the terms gives you and alert which authenticates you to use the Firebase CLI.

You can now initialise the project
`firebase init`
