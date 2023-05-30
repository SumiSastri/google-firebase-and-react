---
layout: default
title: Firestore setup
parent: setup
grand_parent: firebase
---

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

# Firestore setup

In the admin console go to the left nav and select [Firebase](https://console.firebase.google.com/) - there is an easy guide to set up your Firestore database.

Start in test mode not in production mode to access your data.

Click next and select a region close to you - note that the number of regions that Firebase has is significantly lower than AWS. This is another reason why enterprise-level apps start with AWS as it is easy to scale globally.

This creates your database for you and you can click through the tabs and familiarise yourself with the options available. At the time of writing (2023), a new feature Extensions allows you to integrate your database to a host of marketing, querying and payment tools.

Set up you collections as required for the project. In the config file import all methods you require - for example:

```JavaScript

import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp,
  updateDoc
} from 'firebase/firestore'
```

Then initialise the service `const db = getFirestore()` in the file and you can then set up queries from the frontend to the backend Firestore database.