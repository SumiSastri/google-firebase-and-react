---
layout: default
title: Firebase and the Firestore platform
parent: Core Concepts
grand_parent: Firebase
---


# Firebase and the Firestore

Firebase's key offering is an app development platform called Firestore, which is a single platform allowing fast development of backend infrastructure services. The app-development platform can be accessed by downloading the Firebase SDKs that you  may require to build your app.

A software development kit (SDK), is a downloadable software package which bundles in all the code you need to build on a specific platform.

The code is packages into kits - libraries, APIs, IDE's, CLIs, debuggers, test-runners, compilers and code-builders - these kits help you work with the kit to build the platform.

Firebase SDKs supports web-apps and Android/IoS mmobile apps as well as run on several languages - Java, JavaScript, Python, etc.,

If you wish to build a web-app you need the JavaScript SDK and if you need a mobile app you work with the Android/IoS SDK, depending on what you want to build.

The FireBase Admin SDK to access privileged info from the Google Servers, the language specific SDKs are required eg: Firebase Admin Python SDK or Firebase Admin NodeJS SDK.

SDKs come with minimum access requirements eg: Node v8 or higher needs to be installed to get the Firebase Admin NodeJS SDK to function as intended and with no side-effects.

## Firestore

Firestore essentially is a NoSQL Document database that allows you to store, query and sync your data. The structure of the DB allows nesting of data 100 levels deep. Queries allow filtering and sorting and are indexed by default. Data syncs offer offline support by caching the data that your app uses so that you can sync data even if there are some downtime lags.

Once an app is created, Firebase also provides App Indexing and Dynamic Link sharing.

## Cloud Functions

Cloud Functions allow you to set up the infrastructure and roll out new features progressively.

Google Cloud Functions are used to write and deploy code for Google Cloud Services. It integrates with Google Services, like Google Analytics quickly and seamlessly. Third party integration, like the chat-service Slack, using web hooks is also possible or by writing custom functions.

Functions are hosted on Google Servers and is a fully managed service. As a managed service, Firebase takes out the need, once your cloud functions are deployed, for credential checks, server configuration, provisioning any additional servers, decommissioning old servers. It therefore abstracts the heavy lifting of selecting what infra services you may need and how you need to set them up.

Once a cloud function is created, tested and deployed, it is invoked using event-driven triggers, webhooks. Once a function is called, it can be monitored and any errors fixed. Function params and arguments, can ensure privacy and security measures are baked into the code and any other measures you want to write into the cloud function before it is deployed and invoked.

Reverting bad deployments and rollbacks are very easy making it easy to reverse incorrect code being shipped to end customers and limit any damages caused by such errrors.

### Authentication

User ID used for loading data that only required by a particular user - so login/ signups are possible. Federated authentication - or authentication via 3rd parities eg. Facebook/ Twitter, etc. It helps managing passwords and other user requirements via the Firestore services.

## Cloud Storage or Hosting

Cloud Storage gives you hosting space as well custom domains. Part of the hosting services is SSL certificates baked in. With other hosting services - take Wordpress, for example - you need to add safety plugins, purchase SSL certificates and think about the whole backend safety and security operations using something called the C-panel.

Firebase not only provides you with hosting space, security, infrastructure support via the abstraction of infrastructure set up as well as a database and an image store house. Often, you have to find image hosts like Imgur, or Pixabay, to host your images and then import these again via these services APIs.

Images are cached on SSDs, so they are optimised and delivered fast.

## Crashlytics

Post deploy, Firestore provides error handling and analytics - issues can be solved by prioritising hwich problems impact users the most and sorted out.

## Firebase frameworks & libraries

Firebase also supports frameworks
Angular5
Ember5
FlutterFire
NextJs

Firebase also supports libraries
React

## Firebase helpers

- Firebase UI - for web/ Android/ IoS  UI components like sign-up/ sign-in/ sign-out
- Firebase Geofire - real-time geolocation queries
- Firebase Job Dispatcher - background cron jobs 
- Firebase dart
- Firebase queue
- Firepad - text editor
- Firebase CLI - interacting with Firebase Cloud Services
- Firebase Imports - imports JSON files into the Firebase RDBS, chunks and batches data via the Firebase API, max file limit is 400MB
- Firebase Flashlight - Elastic Search that integrates with the Firestore database
