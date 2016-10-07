---
layout: post
title: Working with the Current User
category: Users
---

Here are some functions for managing the users of your app. You'll need to [initialize your app](/getting-started/your-first-volt-app/), after which you can get the information for the logged in user, modify it or delete it.

## Get User information

You can get information on the currently logged on user with the  `$volt.user.get()` function.

The syntax of the function is:

**$volt.use.get**(*callback*)

* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
var user;

butGetUser.onclick = function() {
  $volt.user.get(getUserCallback);
}

function getUserCallback(error, data) {
  if (error) {
    if (!data) {
      data = { message: 'Network Error' };
    }
    alert(data.message);
    user = null;
  } else {
    user = data;
  }
}
{% endhighlight %}

{% highlight visualbasic %}
Dim user

Function butGetUser_onclick()
  $volt.user.get(getUserCallback)
End Function

Function getUserCallback(error, data)
  If error Then
    If (!data) Then data = { message: "Network Error" }
    alert(data.message)
    user = null
  Else
    user = data
  End If
End Function
{% endhighlight %}

</div>

What gets returned? Here is what is in the initial release of Volt:

```json
{
  "id": "7PQipR",
  "email": "support@nsbasic.com",
  "confirmed": true
}
```

## Modify User information

You can change information for the currently logged on user with the `$volt.user.update()` function.

The syntax of the function is:

**$volt.user.get**(*data*, *callback*)

* *data* - object, required. An object with the user details to update.
* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

The data object should be of the following form:

```json
{
  "email": "new@email.com",
  "password": {
    "old": "myOldPassword",
    "new": "myNewPassword",
    "confirmation": "myNewPassword"
  }
}
```

You can pass `email`, `password` or both. Here's an example of changing the logged in user's email:

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butUpdateUser.onclick = function() {
  $volt.user.update({ email: inpNewEmail.value }, updateUserCallback);
}

function updateUserCallback(error, data) {
  if (error) {
    if (!data) {
      data = { message: 'Network Error' };
    }
    alert(data.message);
  } else {
    alert('User updated.');
  }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butUpdateUser_onclick()
  $volt.user.update({ email: inpNewEmail.value }, updateUserCallback)
End Function

Function getUserCallback(error, data)
  If error Then
    If (!data) Then data = { message: "Network Error" }
    alert(data.message)
  Else
    alert("User updated.")
  End If
End Function
{% endhighlight %}

</div>

## Delete a User

You can provide your users with a way to close/delete their accounts using the `$volt.user.delete()` function.

The syntax of the function is:

**$volt.user.delete**(*callback*)

* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
function deleteUser() {
  $volt.user.delete(deleteUserCallback);
}

function deleteUserCallback(error, data) {
  if (error) {
    if (!data) {
      data = { message: 'Network Error' };
    }
    alert(data.message);
  } else {
    alert('User deleted.');
  }
}
{% endhighlight %}

{% highlight visualbasic %}
Function deleteUser()
  $volt.user.delete(deleteUserCallback)
End Function

Function deleteUserCallback(error, data)
  If error Then
    If (!data) Then data = { message: "Network Error" }
    MsgBox data.message
  Else
    MsgBox "User Deleted"
  End If
End Function
{% endhighlight %}

</div>

## Reference

* JavaScript API
  * <https://docs.voltcloud.io/client/$volt.user.html#.get>
  * <https://docs.voltcloud.io/client/$volt.user.html#.update>
  * <https://docs.voltcloud.io/client/$volt.user.html#.delete>
* REST API
  * <https://docs.voltcloud.io/api/#users-current-user-get>
  * <https://docs.voltcloud.io/api/#users-current-user-put>
  * <https://docs.voltcloud.io/api/#users-current-user-delete>
