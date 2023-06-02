---
layout: default
title: Firestore setup
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

In the admin console go to the left nav and select [Auth](https://console.firebase.google.com/) like Auth, the documentation is easy to follow. 

The steps for adding services are the same, initialise them in the config file and export them for use.

With Firestore, you can set up your queries and mutations in different files and then write a custom hook to call the methods and apply them in the app.
