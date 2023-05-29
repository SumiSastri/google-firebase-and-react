---
layout: default
title: Firebase core concepts
parent: core-concepts
nav_order: 1
---

# Firebase core concepts

Firebase's key offering is an app development platform allowing fast development of backend infrastructure services. The mobile and web app-development platform can be accessed by downloading the Firebase (Software Development Kits) SDKs that you  may require to build your app.

Firebase services are serverless because you do not spin up a server but use Google Cloud Services. Firebase is therefore a managed service running Google servers for you. Some of the services that you get are load balancing of traffic to servers, credential checks, server configuration, provisioning any additional servers, decommissioning old servers. These functions are abstracting the heavy lifting of selecting what infra services you may need and how you need to set them up.

All resources are hosted on Google Cloud Services. Using Firebase is using Google Servers and addiitional infrastructure services provided by the Firebase SDKs.

A software development kit (SDK), is a downloadable software package which bundles in all the code you need to build on a specific platform. The code is packages into kits - libraries, APIs, IDE's, CLIs, debuggers, test-runners, compilers and code-builders - these kits help you work with the kit to build the platform.

Firebase SDKs supports web-apps and Android/IoS mmobile apps as well as run on several languages - Java, JavaScript, Python, etc., If you wish to build a web-app you need the JavaScript SDK and if you need a mobile app you work with the Android/IoS SDK, depending on what you want to build. The FireBase Admin SDK to access privileged info from the Google Servers, the language specific SDKs are required eg: Firebase Admin Python SDK or Firebase Admin NodeJS SDK.

SDKs come with minimum access requirements eg: Node v8 or higher needs to be installed to get the Firebase Admin NodeJS SDK to function as intended and with no side-effects.

SDKs are updated and latest versions of the SDK should be used wherever possible versions should be updated as they fix code challenges and security issues that may have been raised as issues in previous versions of the SDK.

Firebase supports many languages, this repo focuses on JavaScript & NodeJS. It can be used with an existing app as a plugin.
