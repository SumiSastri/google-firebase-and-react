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

In the admin console go to the left nav and select [Auth](https://console.firebase.google.com/) - there is an easy guide to set up Auth and you can click the tabs and experiment with the set up. If you select a set up you do not like the edit function helps you edit the settings. You will require your app ID and Secret for set up for federated sign-in (3rd party sign-in with social accounts, etc.).


Set up auth as required for the project. In the config file import all methods you require - for example:

```JavaScript

import {
  getAuth,
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword, signOut,
  // onAuthStateChanged
} from 'firebase/auth'
```

Then initialise the method, assign to a variable and export `export const auth = getAuth(app);`

Now this method is available wherever you import the file.
