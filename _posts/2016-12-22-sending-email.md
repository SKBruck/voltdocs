---
layout: post
title: Sending Email
category: Services
---

Volt lets you send email messages to the currently signed on user, much like the 'Confirm Password' email. To do this, you first have to set some things up.

## Email Plugin Settings

1. Open a [SendGrid](http://sendgrid.com/) account (It's free for low volumes).
2. In SendGrid settings, choose API Keys.
3. In API Keys, click on Create API Key (general). The only setting needed is to choose "Full Access" for Mail Send.
4. When you click Save, you will get a long API key. Save this value.
5. Open your app in the [Volt Dashboard](https://dashboard.voltcloud.io/).
6. For Email From, enter the email address you want to show as the From address. It can be anything.
7. For Email API, enter the long API key from Step 4.
8. Save.

![Mail Plugin Settings]({{ site.baseurl }}/img/posts/sending-email.png)

## Sending Email

Now you can send an email to to currently logged in user of your app using the $volt.email.send() function.

The syntax of the function is:

**$volt.email.send**(*subject*, *text*, *callback*)

* *subject* - string, required. The text to appear as the Subject of the email.
* *text* - string, required. The text to appear as the Body of the email.
* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butSendEmail.onclick = function() {
  var subject = 'Email from ' + AppTitle;
  var text = 'This message was sent from a Volt app to the currently signed on user.';
  $volt.email.send(subject, text, sendEmailCallback);
};

function sendEmailCallback(error, data) {
  if (error) {
    if (!data) {
      data = { message: 'Network Error' };
    }
    alert(data.message);
  } else {
    alert('Email Sent.');
  }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butSendEmail_onclick()
  Dim subject = "Email from " & AppTitle
  Dim text = "This message was sent from a Volt app to the currently signed on user."
  setBusyIcon(this)
  $volt.email.send(subject, text, sendEmailCallback)
End Function

Function sendEmailCallback(error, data)
  clearBusyIcon(this)
  If error Then
    If (!data) Then data = { message: "Network Error" }
    MsgBox data.message
  Else
    MsgBox "Email Sent."
  End If
End Function
{% endhighlight %}

</div>

## Reference

* JavaScript API: <https://docs.voltcloud.io/client/$volt.email.html#.send>
* REST API: <https://docs.voltcloud.io/api/#email-plug-in-email-endpoint-post>
