---
layout: post
title: Registering a User
category: Authentication
---

To sign a user up for your app, you'll need to get an email address and a password from him and send it to Volt. To make sure that the user is legitimate, Volt will send a confirmation email. Once the user confirms, he will be able to [sign on to your app](/getting-started/logging-in-and-out/).

## Registering a User

Here's a typical user registration screen:

![Register Screen]({{ site.baseurl }}/img/posts/registering-a-user.png)

Once you've collected the data, you can call Volt using `$volt.auth.register()` function to register. This will create an account with an unconfirmed status.

The syntax of the function is:

**$volt.auth.register**(*email*, *password*, *passwordConfirm*, *callback*)

* *email* - string, required. The email address of the user.
* *password* - string, required. The user's password.
* *passwordConfirm* - string, optional. The confirmation password. Must match.
* *callback* - function(error, data), required. The function in your app to call when the register is complete (or fails). 

After Volt received the register, it will send a [confirmation email](/getting-started/user-confirmation/

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butCreateAccount.onclick = function() {
    $volt.auth.register(inpEmail.value, inpPassword.value, inpPasswordConfirm.value, createAccountCallback);
}

function createAccountCallback(error, data) {
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        alert(data.message);
    } else {
        alert("An email is on its way. Follow its instructions to confirm your account.");
    }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butCreateAccount_onclick() 
    $volt.auth.register(inpEmail.value, inpPassword.value, inpPasswordConfirm.value, createAccountCallback)
End Function

Function createAccountCallback(error, data) {
    If error Then
        If data = undefined Then data = {message: "Network Error"}
        MsgBox data.message;
    Else
        MsgBox "An email is on its way. Follow its instructions to confirm your account."
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