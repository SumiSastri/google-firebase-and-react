---
layout: default
title: Part 2
parent: core-concepts
grand_parent: firebase
---

# Part 2

Firebase build has some extended functionality

## Remote Config

This is an object-base storage system that allows you control UX (user-experience) of your app. This can be used for

- Feature flags
- Personalising content for the user
- Testing - A/B and multivariate for marketing teams

The way that the config works is a bit like polling - just less frequently. You set a fetch interval, a client value to be fetched and a default value. The UX is based then on what the customer is fetching from this backend fetched value.

To use it for testing you can set the fetched value for the percentage/ segment of users you wish to test the experience they have selected to analyse how users respond to certain features you have added.

## App Check

A security product that checks that requests are authentic for example

- Device check - is it an Android/ Apple/ Mobile/ Desktop
- Captcha - is the user a human not a bot

The request is sent to the authentication service provider. The response, in the form of a token validation is sent to AppCheck to verify the device and authenticity of the user. The request is sent only for a limited time and expects a token to be returned to verify the device or user. The token is then used to make a request to your app's provisioned server for further validation.

AppCheck integrates with the Firebase Ecosystem - FireStore, the Realtime Database, Cloud Storage, Cloud Functions, to name a few. It adds an additional security layer to your app.

## Cloud messaging

Push notifications can be sent to web and mobile apps. It can be integrated with Remote Config and therefore you can segement audiences and test messages to different audiences based on segmenting your customer base according to the test you want to run.

You can also send data to web and mobile app users with customised notifications based on rules set out in a function that delivers the message.

You can send notifications to specific types of devices - messages only to Android Samsung Galaxy users for example and you can customised notifications with a feature called Notification Composer.

Messages can also be analysed based on test results or delivery, open rates etc.

## Machine learning

You can add machine learning (ML) but this feature is only available for mobile not web apps. These features which can run on devices include

- text and image recognition
- object detection
- custom models which can be tested with A/B or multi-variate testing using Tensorflow Lite
- prebuilt APIs

As they can run on devices, ML is fast and provides quick feedback to servers. They also run offliine and sync with the device when the device is online.
## Extensions and integrations with third parties

Integrations get product features to market, reduce your build time, flex your scale up and down based on requests and traffic and reduces maintenance of each of these services separately as they can be integrated with other Firebase services. Some of these integrations are

- Stripe - set up payments and invoice dispatch
- Mailchimp - marketing triggers for email journeys
- Snapchat
- Twilio - multi-media notifications 

Internal extensions to other Google services are

- Google Play
- Google Translate - if you need to quickly translate text into multiple languages
- Resizing images
- Deleting users

These have documentation to follow for set up and deploy.

## Firebase emulator

The Firebase emulator allows you to check features on your local machine before your push changes to the Google Cloud Services.
