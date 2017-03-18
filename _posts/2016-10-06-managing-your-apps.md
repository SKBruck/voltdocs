---
layout: post
title: Managing Your Apps
category: Apps
---

Volt supplies a [Dashboard](https://dashboard.voltcloud.io/) to help manage your apps. Once you sign in, you will see a list of your apps. You can then perform a variety of tasks, including renaming, deleting and managing users.

## Your Apps

Here is what you see when you log into the Dashboard:

![Your Apps]({{ site.baseurl }}/img/posts/managing-your-apps-overview.png)

**Your Apps** shows a summary of your apps. Clicking on the name of the app will open **App Information** for that app. Clicking the URL will open the app and run it in your browser. You can also scan the QR code on your device to open the app - it's much quicker than entering a URL on a mobile device keyboard.

## App Information

![App Information]({{ site.baseurl }}/img/posts/managing-your-apps-detail.png)

The **App Information** shows, and allows your to edit, the information about your app.

### Details

Here's what the fields are:

**Name** - The name of the app. It's initially set up to be appname-randomWord-randomWord, so it will be unique. You can change it to whatever you like as long as that name isn’t already taken by another user. It must start with a letter or number and can only contain lowercase letters, numbers, and dashes.

**ID** - The unique ID assigned to this app by Volt. It cannot be edited. If you're using AppStudio, you will see this value in Volt AppID in Project Properties after your project has been uploaded to Volt.

**Upload** - The date of the most recent upload. It cannot be edited.

**URL** - The URL of the app on the AppStudio server. Click on it to load and run the app. If you change the **Name**, the URL will change.

**Confirm Page** - The page in your app that handles user confirmation. The special value {% raw %}{{token}}{% endraw %} is replaced by an actual confirmation token that your app can use to confirm the account. Learn more about [user confirmations](/authentication/user-confirmation).

**Reset Page** - The page in your app that handles user password resets. The special value {% raw %}{{token}}{% endraw %} is replaced by an actual confirmation token that your app can use to reset the password. Learn more about [resetting passwords](/authentication/resetting-passwords).

**Framing** - Controls if the app can be framed by another site. Can be set to none, self, any, or domain. If set to none (the default) then framing is not allowed. If set to self, then the app can only frame itself. If set to any then any site can frame the app (this is not recommended). If set to domain then only the URL which is specified will be allowed to frame the site.

**CORS** - Controls if the app's API allows incoming requests from other domains (CORS). cors_type can be set to none, any, or domain. If set to none (the default), then no cross domain requests are allowed. If set to any, requests from any domain are allowed (this is not recommended). If set to domain, requests will be allowed only from specified URL.

**Nice Links** - If set, the server will redirect links that aren't found to index.html, allowing a client side router to service any links. No # character will appear in the URL. For AppStudio users, be sure to set NiceLinks in [Project Properties](http://wiki.nsbasic.com/Properties_Window) to true as well.

### Actions

**Users** - Opens the [Users](/users/managing-your-users) screen. Use it to see the list of your users for the app, and to delete them.

**Delete** - Delete the app. All users must be deleted first. This action CANNOT be undone. It will permanently delete the app and all of its storage.
