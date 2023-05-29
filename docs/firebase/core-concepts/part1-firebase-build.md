---
layout: default
title: Firebase build tools
parent: core-concepts
grand_parent: firebase
nav_order: 1
---

# Firebase build tools

Firebase is an eco-system of products. Firebase build tools account for about 30% of these products in the development stage of app development.The following services can be enabled or disabled according to your use case.

Firebase replaces your need to spin up a server and maintain a database as these products are integrated in the package. Firestore is a database, and other Firebase build services offer and the hosting and filestorage systems to provide a place to store your files and images. The serverless functions are the mesh that ties the services together and provision Firebase cloud services offered by Google.

Through the stack, Firebase provides authentication of users and easy integration to front-end analytics with Google Analytics as well as with marketing tools like Google Ads. You can also use non-Google services and integrate it into your app.

These services are part of the Firebase Build suite.

## File storage

If you are creating user-generated-content (UGC), the Firebase file storage system is primarily to store user generated files. Other file storage is also permitted.

You can store static files - text, markdown and images. Images are cached on Firebase (Solid State Drives) SSDs, with the view to pre-optimising images and to fast rendering on front-end services.

Often, you have to find image hosts like Imgur, or Pixabay, to host your images and then import these again via these services APIs to use to build your app.

Similarly you can store dynamic content - videos, animated gifs.

If users download pdfs/ data you can ensure only authenticated users can access the data. Partial file download is possible due to the background caching of files.

*Some of the key features*

- Has a client SDK to enable file storage
- Integrated with Google Cloud Functions - you can write custom code to manage files
- Integrated with Google Authentication - only registered and authenticated users can access content
- Simple file storage good for uploading and downloading files

## Hosting

Firestore provides app hosting as well as the option to purchase custom domains - especially useful if you want to purchase `.com` extensions as there is no premium to purchase/ renew.

Part of the hosting services is SSL certificates baked in. With other hosting services - take Wordpress, for example - you need to add safety plugins, purchase SSL certificates and think about the whole backend safety and security operations using something called the C-panel.

Firebase not only provides you with hosting space, but also security and infrastructure support via the abstraction of infrastructure set up.

The hosting service allows you to deploy code into a production environment.

*Some of the key features*

- Global CDNs (Content Delivery Networks)
- Integrated with GitHub
- Testing URLs possible
- Versioned releases and simple deploys
- Roll backs easy - one click
- Integrates with Google Cloud Functions - allows you to integrate 3rd party APIs
- Keep client and server side code in the same project

## Firestore

Firestore essentially is a NoSQL Document database that allows you to store, query and sync your data. If you require read-write data then this is an option.

Firestore data has full offline support. Data is cached when online and synced with the offline version. When your app is online again the data is synced with your online version. This allows for minimal downtime.

Queries allow filtering and sorting and are indexed by default. It is a better querying language than the Realtime database. Firebase query language has its own syntax and you can make simple or compound queries. The syntax is more efficient and easy to execute compared to the syntax of the Realtime database query language.

Hierarchical data can be stored in subcollections of collections. Multiple collections and subcollections can be stored in Firebase.

Unlike, the Realtime database, it is a single database not a multiple segmented databse.

The structure of the DB allows nesting of data 100 levels deep.

Security rules can be written for how data can be read or written to the database.

## Realtime database

This is also a NoSQL document database using a JSON tree structure.

It has limited offline supported and limited sorting and filtering functionality.

Therefore multiple segmented databases are possible. It is best for synchronising app state (or app data) across different devices (clients) in real time.

Unlike Firebase, it only offers 32-levels deep nesting of documents. The query language pulls the parent collection and all nested children collections. To separate the query to get what your require has a more complex syntax.

Security rules can be written for how data can be read or written to the database and has the same benefits of integration with Firebase authentication, secure client-side querying of data and granular permissions as the Firestore database.

Firebase does not offer any relational-database options which is a limitation to consider. SQL (Simple Query Language) constructs databases as a series of tables that have relationships with each other. You can query one data set and query its relationship with other datasets in the database.

NoSQL databases do not have formal relationships between data-sets. Data is an object that has to be replicated each time with the information required. Data is a collection of information and data is sourced by IDs, or other unique identifiers - URNs (uniqe reference numbers), CRNs (customer reference numbers).

## Authentication

The authentication service can be used in isolation. It handles account creation, sets user IDs used for loading data that only required by a particular user, allows users to  register/ sign-in & sign-out of accounts. 

Other features include email-confirmation and password re-sets, so that users can manage their accounts effectively.

Firebase also has federated authentication - or authentication via 3rd parities - eg. social logins with Facebook/ Twitter, or logins with 3rd party service providers gmail, github.

It also offers phone-based authentication and validation with one-time codes sent via SMS.

Validation is offered with session-tokens - a cookie that is dropped into a user's visit or session on your site that uniquely identifies the user for the session or site visit. Session cookies are ephemeral.

Anonymous authentication and custom authentication (with OAuth, for example) are also services that you can avail of with Firebase.

Pre-built components help you build the auth journey - register/ sign-in and sign-out.

Authenticated users are automatically integrated into the Firestore database.

## Serverless cloud functions

Firebase cloud functions allow you to write custom functions and set up backend code to manage your app's servers and therfore the app's infrastructure.

The advantage is that and roll out new features progressively from the front-end of your app without worrying too-much about how to manage infrastructure. Start-ups find this a good option as employing cloud infrastructure engineers is expensive. There is a caveat to this approach, scaling is not seamless with Google Cloud Services and migration to a new service - AWS, Azure or any other cloud infrastructure provider is difficult.

Firebase cloud functions are serverless functions that execute server-side code. The server, in this case, is Google Cloud Services. Serverless means there is no dedicated machine running your code at all time. Code is deployed to the servers and is run when an event is triggered.

 Once a cloud function is created, tested and deployed, it is invoked using event-driven triggers, webhooks. 
 
 
 Once a function is called, it can be monitored and any errors fixed. Function params and arguments, can ensure privacy and security measures are baked into the code and any other measures you want to write into the cloud function before it is deployed and invoked.

Reverting bad deployments and rollbacks are very easy making it easy to reverse incorrect code being shipped to end customers and limit any damages caused by such errrors.

Once an app is created, Firebase also provides App Indexing and Dynamic Link sharing.

## Pricing

There is a free tier - Firebase Spark but the paid tier -Firebase Blase does not allow you to pick and mix services. As it is a fully managed service, you pay for services that you may or may not use.

This pricing structure sometimes is a disincentive and moves clients from Firebase to AWS. However, it is not easy to migrate these services and such migrations must be planned and costed with care.

The Firebase Spark plan does not include Cloud Funtions or access to manage your resources on Google Cloud so you can not look at logs and monitor release and post-build. This is another disincentive. AWS offers all features free for 1 year.
