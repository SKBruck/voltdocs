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

## Setting up the Dashboard ##

In the Dashboard, you can set the page in your app that handles user password resets. The special value {{token}} is replaced by an actual confirmation token that your app can use to reset the password.

![Reset]({{ site.baseurl }}/img/posts/resetting-passwords-reset.png)

The sample string shown is a reasonable one:

* /# - indicates you want to go to a page (form) in your app.
* /reset - specifically, the reset form.
* &#123;&#123;token}} - substitute the reset token here. This will be passed back to Volt later to authenticate the reset.

## Forgotten Passwords ##

To ask Volt to reset a forgotten password, you can call the `$volt.auth.forgot()` function to start the process.

The syntax of the function is:

**$volt.auth.forgot**(*email*, *callback*)

* *email* - string, required. The email address of the user.
* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butSendResetPassword.onclick = function() {
    $volt.auth.forgot(inpEmail.value, butSendResetPasswordCallback);
}

function butSendResetPasswordCallback(error, data) {
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        alert(data.message;
    } else {
        alert("An email is on its way to you.");
    }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butSendResetPassword_onclick() 
    $volt.auth.forgot(inpEmail.value, butSendResetPasswordCallback)
End Function

Function butSendResetPasswordCallback(error, data)
    If (error) Then
        If (data === undefined) Then data = {message: "Network Error"}
        MsgBox data.message
    Else
        MsgBox "An email is on its way to you."
    End If
End Function
{% endhighlight %}

</div>

## Resetting Passwords ##

Here's the email similar to what Volt will send to your user. If the link is clicked on, your app will open. 

```
Click the link below to reset your password:

https://project1.voltcloud.io/#/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0NzUxMDUyMDgsImV4cCI6MTQ3NTEwODgwOCwiYXVkIjoiL2FwaS9hdXRoL3Jlc2V0IiwiaXNzIjoiZGFzaGJvYXJkLnZvbHRjbG91ZC5pbyIsInN1YiI6IjdQUWlwUiJ9.MVv2wK3WtB9NF2QlFfPlG2GYgy9T7UtJD9jqEWrCj0U

If you didn't request a password reset, you can ignore this message.
```

The complete string will be in location.hash in your app. You'll want to show a form which looks something like this:

![Reset]({{ site.baseurl }}/img/posts/resetting-passwords-form.png)

Once the user has filled in the new password and confirmation, you can send it to Volt using the `$volt.auth.reset()` function.

The syntax of the function is:

**$volt.auth.reset**(*token*, *password*, *passwordConfirm*, *callback*)

* *token* - string, required. The token in the URL.
* *password* - string, required. The new password.
* *passwordConfirm* - string, required. The confirmation password. Should be the same.
* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butResetPassword.onclick = function() {
    $volt.auth.reset(queryParams[2], inpPasswordNew.value, inpPasswordConfirm.value, resetPasswordCallback);
}

function resetPasswordCallback(error, data) {
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        alert(data.message);
    } else {
        alert("Password Updated.");
    }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butResetPassword_onclick() 
    $volt.auth.reset(queryParams[2], inpPasswordNew.value, inpPasswordConfirm.value, resetPasswordCallback);
End Function

Function resetPasswordCallback(error, data) 
    If error Then
        If (data === undefined) Then data = {message: "Network Error"}
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
var queryParams = location.hash.split("/");

function Main() {
    if ((queryParams.length > 1)) {
        if (queryParams[1] == "reset") {
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

