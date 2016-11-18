---
layout: post
title: Resetting Passwords
category: Authentication
---

Sometimes your users will forget their passwords. Other times, their passwords may need to be reset. Volt has functions to help you deal with this.

First, let's review what happens when a user forgets a password:
1. In the login form, if the user can't remember the password, "Forget Password" is clicked.
1. This sends a message to Volt to start the reset process.
1. Volt sends an email to the user with a link to reset the password.
1. The link is under your control: it's set in the Dashboard.
1. The link opens your app to its password reset form.
1. The new password information is sent to Volt to update the user's data.

The capability to reset passwords is disabled by default. You can enable it by setting your app's Reset URL in the Dashbaord.

## Setting up the Dashboard

In the Dashboard, you can set the page in your app that handles user password resets. The special value {% raw %}{{token}}{% endraw %} is replaced by an actual confirmation token that your app can use to reset the password. Confirmation tokens expire one hour after sending.

![Reset URL]({{ site.baseurl }}/img/posts/resetting-passwords-reset.png)

The sample string shown is a reasonable one:

* /# - indicates you want to go to a page (form) in your app.
* /reset - specifically, the reset form.
* {% raw %}{{token}}{% endraw %} - substitute the reset token here. This will be passed back to Volt later to authenticate the reset.

## Forgotten Passwords

To ask Volt to reset a forgotten password, you can call the `$volt.auth.forgot()` function to start the process.

The syntax of the function is:

**$volt.auth.forgot**(*email*, *appId*, *callback*)

* *email* - string, required. The email address of the user.
* *appId* - string, optional. The Volt ID of the app to sign into. If not supplied, defaults to value set in `$volt.init(appId)`.
* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butSendResetPassword.onclick = function () {
  $volt.auth.forgot(inpEmail.value, butSendResetPasswordCallback);
}

function butSendResetPasswordCallback(error, data) {
  if (error) {
    if (!data) {
      data = { message: 'Network Error' };
    }
    alert(data.message);
  } else {
    alert('An email is on its way to you.');
  }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butSendResetPassword_onclick()
  $volt.auth.forgot(inpEmail.value, butSendResetPasswordCallback)
End Function

Function butSendResetPasswordCallback(error, data)
  If (error) Then
    If (!data) Then data = { message: "Network Error" }
    MsgBox data.message
  Else
    MsgBox "An email is on its way to you."
  End If
End Function
{% endhighlight %}

</div>

## Resetting Passwords

Here's an email similar to what Volt will send to your user. If the link is clicked on, your app will open. Password resets expire after one hour.

```
Click the link below to reset your password:

https://project1.voltcloud.io/#/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0NzUxMDUyMDgsImV4cCI6MTQ3NTEwODgwOCwiYXVkIjoiL2FwaS9hdXRoL3Jlc2V0IiwiaXNzIjoiZGFzaGJvYXJkLnZvbHRjbG91ZC5pbyIsInN1YiI6IjdQUWlwUiJ9.MVv2wK3WtB9NF2QlFfPlG2GYgy9T7UtJD9jqEWrCj0U

If you didn't request a password reset, you can ignore this message.
```

The complete string will be in `location.hash` in your app. You'll want to show a form which looks something like this:

![Reset Form]({{ site.baseurl }}/img/posts/resetting-passwords-form.png)

Once the user has filled in the new password and confirmation, you can send it to Volt using the `$volt.auth.reset()` function.

The syntax of the function is:

**$volt.auth.reset**(*token*, *password*, *confirmation*, *callback*)

* *token* - string, required. The token in the URL.
* *password* - string, required. The new password.
* *confirmation* - string, required. The confirmation password. Should be the same.
* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butResetPassword.onclick = function () {
  var queryParams = location.hash.split('/');

  $volt.auth.reset(queryParams[2], inpPasswordNew.value, inpPasswordConfirm.value, resetPasswordCallback);
}

function resetPasswordCallback(error, data) {
  if (error) {
    if (!data) {
      data = { message: 'Network Error' };
    }
    alert(data.message);
  } else {
    alert('Password Updated.');
  }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butResetPassword_onclick()
  Dim queryParams
  queryParams = location.hash.split("/")

  $volt.auth.reset(queryParams[2], inpPasswordNew.value, inpPasswordConfirm.value, resetPasswordCallback);
End Function

Function resetPasswordCallback(error, data)
  If error Then
    If (!data) Then data = { message: "Network Error" }
    MsgBox data.message
  Else
    MsgBox "Password Updated."
  End If
End Function
{% endhighlight %}

</div>

## AppStudio Users

[AppStudio](https://www.nsbasic.com/) includes a form called frmSignOn. If you include it in your app, forgot is built in.  For resets, do the following:

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
var queryParams = location.hash.split('/');

function Main() {
  if ((queryParams.length > 1)) {
    if (queryParams[1] == 'reset') {
      showResetPassword();
    }
  }
}
{% endhighlight %}

{% highlight visualbasic %}
Dim queryParams
queryParams = location.hash.split("/")

Sub Main()
  If (queryParams.length > 1) Then
    If queryParams[1] = "reset" Then
      showResetPassword()
    End If
  End If
End Sub
{% endhighlight %}

</div>

## Reference

* JavaScript API
  * <https://docs.voltcloud.io/client/$volt.auth.html#.forgot>
  * <https://docs.voltcloud.io/client/$volt.auth.html#.reset>
* REST API
  * <https://docs.voltcloud.io/api/#authentication-forgot-password-post>
  * <https://docs.voltcloud.io/api/#authentication-reset-password-post>
