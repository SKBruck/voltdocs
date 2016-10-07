---
layout: post
title: Your First Volt App
category: Getting Started
---

Volt is designed to require very little code to get started. Currently you must use AppStudio to create and deploy a new app. We're working to allow apps to be uploaded and deployed using a wide variety of common tools.

The following section is currently for informational purposes only.

## Initializing

Once you've created a new app and have obtained your app ID from the Dashboard, create your first Volt app. The simplest functioning app is as follows:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Volt Example</volt>
</head>
<body>
  <p>It doesn't get much simpler than this!</p>
  <script src="/api/client/volt.min.js"></script>
  <script>
    var appId = 'abc123';
    $volt.init(appId);
  </script>
</body>
</html>
```

The two most important parts of the example above are the script tags. The first script tag includes the Volt [client library](https://docs.voltcloud.io/client/). The library will always be available at this location when your app is hosted on the Volt server.

The second script tag initializes your app. Every app has an ID, and you must initialize volt with your app ID before you can use the client library to make further Volt calls.

## For AppStudio Users

AppStudio is tightly integrated with Volt, making it easy to upload, run and manage your apps.

### Uploading to Volt

On the Run menu, choose "Deploy to Volt". Your app will be uploaded to Volt and the URL to run it will be displayed. The Volt AppId will be placed in your [Project Properties](https://wiki.nsbasic.com/Properties_Window).

### Managing your App

If you have subscribed to AppStudio and have entered a Volt password, you can use the Volt [Dashboard](https://dashboard.voltcloud.io/) to [manage your apps](/apps/managing-your-apps).

You can open the Dashboard at <https://dashboard.voltcloud.io/> or from the AppStudio [Run menu](https://wiki.nsbasic.com/Menu_Options).

### Managing your Volt Account

If you have [subscribed](https://www.nsbasic.com/i/Subscription/) to AppStudio on any of the plans (including the free demo), you're entitled to deploy to Volt from the AppStudio Run menu.

To use the [Dashboard](https://dashboard.voltcloud.io/), you'll need a Volt account. If you have a Starter, Essential or Pro subscription, you're entitled to a free Volt account. Reply to the registration confirmation email by setting up a password and you'll be allowed to use it.

You can also set up a Volt account from the AppStudio Run menu or from [Volt Preferences](http://wiki.nsbasic.com/Preferences).

## Reference

* JavaScript API: <https://docs.voltcloud.io/client/$volt.html#.init>
