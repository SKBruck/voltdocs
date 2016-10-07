---
layout: post
title: User Confirmation
category: Authentication
---

Volt allows you to require your users to confirm their accounts via email. By default this is turned off. You can turn it on by setting the confirmation URL in the Dashboard.

## Setting up the Dashboard

In the Dashboard, you can set the page in your app that handles user confirmations. The special value {% raw %}{{token}}{% endraw %} is replaced by an actual confirmation token that your app can use to reset the password.

![Confirmation URL]({{ site.baseurl }}/img/posts/user-confirmation.png)

The sample string shown is a reasonable one:

* /# - indicates you want to go to a page (form) in your app.
* /confirm - specifically, the confirmation form.
* {% raw %}{{token}}{% endraw %} - substitute the reset token here. This will be passed back to Volt later to confirm the reset.

## Confirming the user

Once your user registers, Volt will send a confirmation email to make sure he is a legitimate user.

Here's an email similar to what Volt will send to your user. If the link is clicked on, your app will open.

```
Thanks for signing up! Please click the link below to confirm your account:

https://signon.volt.live/#/confirm/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0NzUxNjE3OTcsImV4cCI6MTQ3NTIwNDk5NywiYXVkIjoiL2FwaS9hdXRoL2NvbmZpcm0iLCJpc3MiOiJzaWdub24udm9sdC5saXZlIiwic3ViIjoiN2J2aTR6In0.EkJz1uL3Uo59PPa24bQN2ctXZY4LRwiAVH00kvFpNN0

If you didn't sign up for an account, you can ignore this message.
```

The complete string will be in `location.hash` in your app.

Once the user clicks on the URL in the email, your app can send the confirmation to Volt using the `$volt.auth.confirm()` function.

The syntax of the function is:

**$volt.auth.confirm**(*token*, *callback*)

* *token* - string, required. The token in the URL.
* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
function confirm() {
  var queryParams = location.hash.split('/');

  $volt.auth.confirm(queryParams[2], confirmCallback);
}

function confirmCallback(error, data) {
  if (error) {
    if (!data) {
      data = { message: 'Network Error' };
    }
    alert(data.message);
  } else {
    alert('Your account is confirmed. Have a nice day!');
  }
}
{% endhighlight %}

{% highlight visualbasic %}
Function confirm()
  Dim queryParams
  queryParams = location.hash.split("/")

  $volt.auth.confirm(queryParams[2], confirmCallback);
End Function

Function confirmCallback(error, data)
  If error Then
    If (!data) Then data = { message: "Network Error" }
    MsgBox data.message
  Else
    MsgBox "Your account is confirmed. Have a nice day!"
  End If
End Function
{% endhighlight %}

</div>

## Resending Confirmations

Occasionally an account confirmation may not be delivered due to the nature of email. Additionally account confirmations expire after 12 hours. In these cases, you can provide your users with the capability to resend an account confirmation using the `$volt.auth.resend()` function.

The syntax of the function is:

**$volt.auth.resend**(*email*, *appId*, *callback*)

* *email* - string, required. The email to resend the confirmation to.
* *appId* - string, optional. The Volt ID of the app to sign into. If not supplied, defaults to value set in `$volt.init(appId)`.
* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butResendConfirmation.onclick = function () {
  $volt.auth.resend(inpEmail.value, butResendConfirmationCallback);
}

function butResendConfirmationCallback(error, data) {
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
Function butResendConfirmation_onclick()
  $volt.auth.forgot(inpEmail.value, butResendConfirmationCallback)
End Function

Function butResendConfirmationCallback(error, data)
  If (error) Then
    If (!data) Then data = { message: "Network Error" }
    MsgBox data.message
  Else
    MsgBox "An email is on its way to you."
  End If
End Function
{% endhighlight %}

</div>

## Reference

* JavaScript API
  * <https://docs.voltcloud.io/client/$volt.auth.html#.confirm>
  * <https://docs.voltcloud.io/client/$volt.auth.html#.resend>
* REST API
  * <https://docs.voltcloud.io/api/#authentication-confirm-account-post>
  * <https://docs.voltcloud.io/api/#authentication-resend-confirmation-post>
