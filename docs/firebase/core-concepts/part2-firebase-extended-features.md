---
layout: default
title: Part 2
parent: core-concepts
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

# Part 2

Firebase build has some extended functionality

## Remote Config

This is an object-base storage system that allows you control UX (user-experience) of your app. This can be used for

- Feature flags
- Personalising content for the user
- Testing - A/B and multivariate for marketing teams

The way that the config works is a bit like polling - just less frequently. You set a fetch interval, a client value to be fetched and a default value. The UX is based then on what the customer is fetching from this backend fetched value.

To use it for testing you can set the fetched value for the percentage/ segment of users you wish to test the experience they have selected to analyse how users respond to certain features you have added.

## AppCheck

A security product that checks that requests are authentic for example

- Device check - is it an Android/ Apple/ Mobile/ Desktop
- Captcha - is the user a human not a bot

The request is sent to the user of the device and the response is sent to AppCheck to verify the device and authenticity of the user

## Cloud Messaging
## Machine Learning
## Extensions
