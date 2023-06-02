---
layout: default
title: Auth
parent: Setup
nav_order: 2
---

# Auth

In the admin console go to the left nav and select [Auth](https://console.firebase.google.com/) - there is an easy guide to set up Auth and you can click the tabs and experiment with the set up. If you select a set up you do not like the edit function helps you edit the settings. You will require your app ID and Secret for set up for federated sign-in (3rd party sign-in with social accounts, etc.).

Set up auth as required for the project. In the config file import all methods you require - for example:

```JavaScript

import {
  getAuth,
} from 'firebase/auth'
```

Then initialise the method, assign to a variable and export `export const auth = getAuth(app);`

Now this method is available wherever you import the file. Eg:

```JavaScript
import {
  // authenticate user
  getAuth,
  // register
  createUserWithEmailAndPassword,
  // sign in with google pop-up component or email and password
  signInWithPopup 
  signInWithEmailAndPassword, 
  // sign out
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
```

The methods for register, sign-in and signout - take a lot of the grunt work out of the authorisation process. See app code for details.

For protected routes, you can use an Auth Context and wrap all the Auth routes in a React Context config. You will also need to set up rules for access to database and file storage systems.
