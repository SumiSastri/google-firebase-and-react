---
layout: default
title: Firestore setup
parent: Setup
nav_order: 2
---

# Firestore setup

In the admin console go to the left nav and select [Auth](https://console.firebase.google.com/) like Auth, the documentation is easy to follow. Set up in test mode - so that data rules for access do not have to be set up.

The steps for adding services are the same, initialise them in the config file and export them for use.

With Firestore, you can set up your queries and mutations in different files and then write a custom hook to call the methods and apply them in the app.

The CRUD - create-read-delete-update - actions can be set up without having like a traditional REST-API to set up these routes with a server like ExpressJS or a database. These actions can be performed directly with the Firestore config and internal state management tools.

See the firestore section of the app for a code demo of mutuations and queries to the Firestore services. See  Auth section - forms and tables - for a demo how these mutations and queries are applied to CRUD actions.
