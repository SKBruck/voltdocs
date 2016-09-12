---
layout: post
title: Volt for AppStudio Users
category: AppStudio
---

## Introduction

[Volt](https://www.voltcloud.io) is a cloud service which provides additional functionality for AppStudio. It's designed as a platform, so new features can be added.

It replaces the AppStudio Server, but does much more. Some of the initial features are:

* App Hosting: Apps uploaded to Volt can be accessed by users anywhere in the world. Permanent hosting is available.
* Custom Domains: Use the Volt assigned domain, or an existing domain that you own.
* App Management: The [Dashboard](https://dashboard.voltcloud.io) lets you display and configure the apps you have on the Volt server.
* User Management: Allow your users to sign into your app with usernames and passwords.

## AppStudio Demo Users

If you are using the Demo, you don't need to do anything special to use Volt. No account is required. When you deploy, your app will be placed on the Volt server, and you will be given a link to access it. It will remain on the server for an hour.

Once you sign up for AppStudio, you can create a Volt account and use all the Volt services.

## Managing Your Own Account

If you don't have an account, you will still be able to deploy apps. They will be available for about an hour. If you want to apps to remain longer or use Volt features, you will need to sign up.

To sign up, go into the Volt tab in AppStudio Preferences and click on "Sign up for Volt". Follow the instructions and a free Volt account will be set up for you. Once this is done, enter the email and password for your account into AppStudio's Volt Preferences tab.

## Using Volt from AppStudio

There are several places which AppStudio interacts with Volt.

### The Run Menu

![AppStudio's run menu]({{ site.baseurl }}/img/posts/volt-for-appstudio-users-runmenu.png)

* Deploy to Volt: Run Menu. This uploads your app to the Volt server. If you have an account, it should be entered into Preferences. If you do not, the app will only remain on the server for an hour.
* Manage your Volt App: Run Menu. This opens the Volt Dashboard to your currently loaded app and lets you customize its features.
* Sign In/Sign Up to Volt: Run Menu. This opens the Volt Dashboard and lets you sign in to manage your apps. If you do not have an account, you can sign up for one here.

## Volt Preferences

In Preferences. Use this panel to enter your Volt email and password. This will let AppStudio sign you on directly when you deploy.

![AppStudio's Volt Preferences]({{ site.baseurl }}/img/posts/volt-for-appstudio-users-voltprefs.png)

## The Dashboard

The Dashboard is an app for managing your Volt apps. Here's the main screen:

![The Volt Dashboard]({{ site.baseurl }}/img/posts/volt-for-appstudio-users-dashboard.png)

* Open will run the App
* Clicking on one of the items will open the App Details

    ![Volt Dashboard's app details]({{ site.baseurl }}/img/posts/volt-for-appstudio-users-appdetails.png)

* On that same page, there are actions you can perform on your app:

    ![Volt Dashboard's app actions]({{ site.baseurl }}/img/posts/volt-for-appstudio-users-appactions.png)

* Delete removes your app from Volt.
* Users let your view and remove users of that app.

    ![Volt Dashboard's app users]({{ site.baseurl }}/img/posts/volt-for-appstudio-users-appusers.png)

## Managing your App's User Accounts

Volt lets you manage a list of users who are allowed to access your app. It handles signing up, signing in, signing out and all the other functions which are needed (email confirmations, forgot passwords, etc...).

When you sign up for a Volt account, you're using the same mechanism. You will find samples in BASIC and JavaScript in the AppStudio Samples, in a new folder called Volt. You're welcome to adapt these samples into your own apps.

## Email

Coming soon.

## Samples

Samples for using Volt features in AppStudio are included with the normal AppStudio samples, under "4 Volt Services". To use these samples, deploy them to Volt. They will not work in your local browser.
