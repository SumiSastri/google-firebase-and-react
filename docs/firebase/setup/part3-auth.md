---
layout: default
title: Auth 
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

# Auth

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
