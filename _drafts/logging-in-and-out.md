---
layout: post
title: Logging In (and Out)
category: Authentication
---

Using Volt, you can control who is allowed to use your app. Only users you have set up will be able to log into your app.

## Checking if user is logged in ##

Use the $volt.auth.isLoggedIn() to check if a user is logged in:

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
if ($volt.auth.isLoggedIn()) {
    //Ok to do processing
} else {
    //ask user to log in
}
{% endhighlight %}

{% highlight visualbasic %}
If $volt.auth.isLoggedIn() Then
  'Ok to do processing
Else
  'ask user to log in
End If
{% endhighlight %}
</div>

## Logging In ##

Logging in identifies you to the Volt server. Here is a typical log in screen:

![Login Screen]({{ site.baseurl }}/img/posts/logging-in-and-out.png)

Once you have have obtained the user's email and password (either from a screen like to above or otherwise), you can call the $volt.auth.login() function to log the user in.

The syntax of the function is 

**$volt.auth.login**(*email*, *password*, *appId*, *callback*)

* *email* - required. The email address of the user.
* *password* - required. The user's password.
* *appId* - optional. The Volt ID of the app to sign into. If not supplied, defaults to value set in $volt.init(appId). 
* *callback* - the function in your app to call when the login is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butSignOn.onclick = function() {
    $volt.auth.login(inpEmail.value, inpPassword.value, signOnCallback);
}

function signOnCallback(error, data) {
    var returnValue = "";
    if (error) {
        if ((data == undefined)) {
            data = {
                message: "Network Error"
            };
        }
        alert(data.message);
    } else {
        auth = data;
        alert("User successfully logged in");
    }
}
{% endhighlight %}

{% highlight visualbasic %}
Sub butSignOn.onclick()
  $volt.auth.login(inpEmail.value, inpPassword.value, signOnCallback);
End Sub

Function signOnCallback(error, data)
  If error Then
    If (data === undefined) Then data = {message: "Network Error"}
    MsgBox data.message
  Else
    auth = data;
    MsgBox "User successfully logged in"
  End If
End Sub
{% endhighlight %}
</div>

## Logging Out ##

Logging a user out is simple:

**$volt.auth.logout**();

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
  $volt.auth.logout();
{% endhighlight %}

{% highlight visualbasic %}
  $volt.auth.logout()
{% endhighlight %}

</div>  
    
## AppStudio Users ##

AppStudio includes a form for handling login duties, called frmSignOn. If you include it in your app, you can call it as follows:

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butSignIn.onclick = function() {
    frmSignOn.show(modalParmsNoClose);
    showSignIn(signInCallback);
};

function signInCallback() {
    butSignIn.disabled = true;
    NSB.MsgBox("SignIn successful.");
}
{% endhighlight %}

{% highlight visualbasic %}
Function butSignIn_onclick()
  frmSignOn.show(modalParmsNoClose)
  showSignIn(signInCallback)
End Function

Function signInCallback()
  butSignIn.disabled = True
  MsgBox "SignIn successful."
End Function
{% endhighlight %}

</div>  