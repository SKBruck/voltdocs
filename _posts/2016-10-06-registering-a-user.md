---
layout: post
title: Registering a User
category: Authentication
---

To sign a user up for your app, you'll need to get an email address and a password from them and send it to Volt. If enabled, Volt will send a [confirmation](/authentication/user-confirmation/) email. Once the user registers, they will be able to [sign on to your app](/authentication/logging-in-and-out/).

## Registering a User

Here's a typical user registration screen:

![Register Screen]({{ site.baseurl }}/img/posts/registering-a-user.png)

Once you've collected the data, you can call Volt using `$volt.auth.register()` function to register. This will create an account.

The syntax of the function is:

**$volt.auth.register**(*email*, *password*, *confirmation*, *appId*, *callback*)

* *email* - string, required. The email address of the user.
* *password* - string, required. The user's password.
* *confirmation* - string, required. The confirmation password. Must match.
* *appId* - string, optional. The Volt ID of the app to sign into. If not supplied, defaults to value set in `$volt.init(appId)`.
* *callback* - function(error, data), required. The function in your app to call when the register is complete (or fails).

After Volt received the register, it will send a [confirmation email](/getting-started/user-confirmation/) if you have enabled that functionality.

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butCreateAccount.onclick = function () {
  $volt.auth.register(inpEmail.value, inpPassword.value, inpPasswordConfirm.value, createAccountCallback);
}

function createAccountCallback(error, data) {
  if (error) {
    if (!data) {
      data = { message: 'Network Error' };
    }
    alert(data.message);
  } else {
    alert('Your account has been registered.');
  }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butCreateAccount_onclick() 
  $volt.auth.register(inpEmail.value, inpPassword.value, inpPasswordConfirm.value, createAccountCallback)
End Function

Function createAccountCallback(error, data) {
  If error Then
    If (!data) Then data = { message: "Network Error" }
    MsgBox data.message
  Else
    MsgBox "Your account has been registered."
  End If
End Function
{% endhighlight %}

</div>

## AppStudio Users

[AppStudio](https://www.nsbasic.com/) includes a form called frmSignOn. If you include it in your app, a register form is included. To use it, do the following:

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
showCreateAccount();
{% endhighlight %}

{% highlight visualbasic %}
showCreateAccount()
{% endhighlight %}

</div>

## Reference

* JavaScript API: https://docs.voltcloud.io/client/$volt.auth.html#.register
* REST API: https://docs.voltcloud.io/api/#authentication-register-post
