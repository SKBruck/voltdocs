---
layout: post
title: User Confirmation
---

## Setting up the Dashboard

In the Dashboard, you can set the page in your app that handles user password confirmations. The special value {{token}} is replaced by an actual confirmation token that your app can use to reset the password.

![Reset]({{ site.baseurl }}/img/posts/user-confirmation.png)

The sample string shown is a reasonable one:

* /# - indicates you want to go to a page (form) in your app.
* /confirm - specifically, the confirmation form.
* &#123;&#123;token}} - substitute the reset token here. This will be passed back to Volt later to confirm the reset.

## Confirming the user

Once your user registers, Volt will send a confirmation email to make sure he is a legitimate user. 

Here's the email similar to what Volt will send to your user. If the link is clicked on, your app will open. 

```
Thanks for signing up! Please click the link below to confirm your account:

https://signon.volt.live/#/confirm/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0NzUxNjE3OTcsImV4cCI6MTQ3NTIwNDk5NywiYXVkIjoiL2FwaS9hdXRoL2NvbmZpcm0iLCJpc3MiOiJzaWdub24udm9sdC5saXZlIiwic3ViIjoiN2J2aTR6In0.EkJz1uL3Uo59PPa24bQN2ctXZY4LRwiAVH00kvFpNN0

If you didn't sign up for an account, you can ignore this message.
```

The complete string will be in location.hash in your app. 

Once the user clicks on the URL in the email, your app can send the confirmation to Volt using the `$volt.auth.confirm()` function.

The syntax of the function is:

**$volt.auth.confirm**(*token*, *callback*)

* *token* - string, required. The token in the URL.
* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
function confirm() {
    $volt.auth.confirm(queryParams[2], confirmCallback);
}

function confirmCallback(error, data) {
    if (error) {
        alert(data.message);
    } else {
        alert("Your account is confirmed. Have a nice day!");
    }
}
{% endhighlight %}

{% highlight visualbasic %}
Function confirm() 
    $volt.auth.confirm(queryParams[2], resetPasswordCallback);
End Function

Function confirmCallback(error, data)
  If error Then
    MsgBox data.message
  Else
    MsgBox "Your account is confirmed. Have a nice day!"
  End If
End Function
{% endhighlight %}

</div>

## AppStudio Users

To confirm, do the following:

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
var queryParams = location.hash.split("/");

function Main() {
    if ((queryParams.length > 1)) {
        if (queryParams[1] == "confirm") {
            $volt.auth.confirm(queryParams[2], confirmCallback);
        }
    }
}

function confirmCallback(error, data) {
    if (error) {
        alert(data.message);
    } else {
        alert("Your account is confirmed. Have a nice day!");
    }
}
{% endhighlight %}

{% highlight visualbasic %}
Dim queryParams
queryParams = location.hash.split("/")

Sub Main()
  If (queryParams.length > 1) Then
    If queryParams[1] = "confirm" Then
      $volt.auth.confirm(queryParams[2], confirmCallback)
    End If
  End If
End Sub

Function confirmCallback(error, data)
  If error Then
    MsgBox data.message
  Else
    MsgBox "Your account is confirmed. Have a nice day!"
  End If
End Function
{% endhighlight %}

</div>


