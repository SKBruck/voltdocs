---
layout: post
title: Working with the Current User
category: Users
---

Here are some functions for managing the users of your app. You'll need to [initialize your app](/getting-started/your-first-volt-app/), after which you can get the information for a user, modify it or delete the user. You can also get a list of your users.

## Get User information

You can get information on the currently logged on user with the  `$volt.user.get()` function.

The syntax of the function is:

**$volt.use.get**(*userID*, *callback*)

* *userID* - String, Optional. The User ID to request. Defaults to logged on user.
* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butGetUser.onclick = function() {
    $volt.user.get(getUserCallback);
}

function getUserCallback(error, data) {
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        alert(data.message);
        user = null;
    } else {
        user = data;
    }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butGetUser_onclick()
    $volt.user.get(getUserCallback);
End Function

Function getUserCallback(error, data) 
    If error Then
        If (data === undefined) Then data = {message: "Network Error"}
        alert(data.message)
        user = null
    Else
        user = data
    End If
End Function
{% endhighlight %}

</div>

What gets returned? Here is what is in the initial release of Volt:

```
user
{
id: "7PQipR", 
email: "support@nsbasic.com", 
confirmed: true, 
admin: true
}
```

## Modify User information

You can change information for the currently logged on user with the  `$volt.user.update()` function.

The syntax of the function is:

**$volt.user.get**(*data*, *userID*, *callback*)

* *data* - Object, required. An object with [details to update](api/#users-current-user-put). 
* *userID* - String, Optional. The User ID to request. Defaults to logged on user.
* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

With the initial release of Volt, all fields are better updated using functions like [$volt.auth.reset()](/auth/resetting-passwords/).

## Delete a User

You can get delete of your app user with the  `$volt.user.delete()` function.

The syntax of the function is:

**$volt.user.delete**(*userID*, *callback*)

* *userID* - String, Optional. The User ID to delete. Defaults to logged on user.
* *callback* - function(error, data), required. The function in your app to call when the request to Volt is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
function deleteUser() {
    $volt.user.delete(userList[currentUserRow].id, deleteUserCallback);
}

function deleteUserCallback(error, data) {
    if (error) {
        if (data === undefined) data = {
            message: "Network Error"
        };
        alert(data.message);
        user = null;
    } else {
        alert("User deleted.");
    }
}
{% endhighlight %}

{% highlight visualbasic %}
Function deleteUser() 
    $volt.user.delete(userList[currentUserRow].id, deleteUserCallback)
End Function

Function deleteUserCallback(error, data) 
    If error Then
        If (data === undefined) Then data = {message: "Network Error"}
        MsgBox data.message
    Else
        MsgBox "User Deleted"
        user = null
    End If
End Function
{% endhighlight %}

</div>


## Get List of Users

See [Managing your Apps](/Apps/managing-your-apps).
 