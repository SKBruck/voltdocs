---
layout: post
title: App Storage
category: Services
---

appStorage allows you to store data in key, value pairs on the server so it is available to all users of the app. An entry can be created by assigning to appStorage.setItem(key, value), where key is chosen by you. Data is retrieved a similar way. Apps can only read the appStorage. Use the Dashboard to clear, remove or change the entries.

Value can be a string, number, array or object. There is no size limit on value, other than it be reasonable.

If your app does not have a live internet connection, the request will time out and an error message will be passed to callback.

Since the calls access information on a server, they are asynchronous (so your app does not look up while the call is being processed). When the call is complete, the function named in callback is called in your app. It passes two parameters: (error, data). If the call is successful, error is empty and your results are in data. If the call is unsuccessful, error is not empty and the error message is in data.message.

appStorage is an alias for $volt.storage in the Volt API.

## appStorage.clear

This call clears all the items in your app's appStorage. It is available in the Dashboard only.

The syntax of the function is:

**appStorage.clear**(*callback*)

* *callback* - function(error, data), required. The function in your app to call when the function is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butClear.onclick = function() {
    appStorage.clear(done);
};

function done(error, data) {
    if (error) {
        if (data == undefined) {
            data = {
                message: "Network Error"
            };
        }
        NSB.MsgBox(data.message);
    } else {
        console.log("success");
    }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butClear_onclick()
  appStorage.clear(done)
End Function

Function done(error, data)
  If error Then
    If data = undefined Then data = {message: "Network Error"}
    MsgBox data.message
  Else
    console.log("success")
  End If
End Function
{% endhighlight %}

</div>

## appStorage.getItem

This call gets the item with a specified key.

The syntax of the function is:

**appStorage.getItem**(*key*, *callback*)

* *key* - The name of the item. String.
* *callback* - function(error, data), required. The function in your app to call when the function is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butGetItem.onclick = function() {
    appStorage.getItem("SimpleString", getItemCallback);
};

function getItemCallback(error, data) {
    if (error) {
        if (data == undefined) {
            data = {
                message: "Network Error"
            };
        }
        alert(data.message);
    } else {
        alert(data);
    }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butGetItem_onclick()
  appStorage.getItem("SimpleString", getItemCallback)
End Function

Function getItemCallback(error, data) 
  If error Then
    If data = undefined Then data = {message: "Network Error"}
    MsgBox data.message
  Else
    MsgBox data
  End If
End Function
{% endhighlight %}

</div>

## appStorage.getAllItems

This call returns all the items in your app's appStorage in an array of {key, value} objects.

The syntax of the function is:

**appStorage.getAllItems**(*callback*)

* *callback* - function(error, data), required. The function in your app to call when the function is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butGetAllItems.onclick = function() {
    appStorage.getAllItems(getAllItemsCallback);
};

function getAllItemsCallback(error, data) {
    if (error) {
        if (data == undefined) {
            data = {
                message: "Network Error"
            };
        }
        NSB.MsgBox(data.message);
    } else {
        NSB.Print((false) + "<br>");
        for (key in data) {
            console.log(key, data[key]);
        }
    }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butGetAllItems_onclick()
  appStorage.getAllItems(getAllItemsCallback)
End Function

Function getAllItemsCallback(error, data) 
  If error Then
    If data = undefined Then data = {message: "Network Error"}
    MsgBox data.message
  Else
    Print False
    For Each key in data
      console.log(key, data[key])
      k = [key, key][0]
      Print k & ": " & data[key].toString()
    Next
    End If
End Function
{% endhighlight %}

</div>
## appStorage.removeItem

This call removes the item with a specified key.  It is available in the Dashboard only.

The syntax of the function is:

**appStorage.removeItem**(*key*, *callback*)

* *key* - The name of the item. String.
* *callback* - function(error, data), required. The function in your app to call when the function is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butRemoveItem.onclick = function() {
    appStorage.removeItem("SimpleString", done);
};

function done(error, data) {
    if (error) {
        if (data == undefined) {
            data = {
                message: "Network Error"
            };
        }
        NSB.MsgBox(data.message);
    } else {
        console.log("success");
    }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butRemoveItem_onclick()
  appStorage.removeItem("SimpleString", done)
End Function

Function done(error, data)
  If error Then
    If data = undefined Then data = {message: "Network Error"}
    MsgBox data.message
  Else
    console.log("success")
  End If
End Function
{% endhighlight %}

</div>
## appStorage.setItem

This call adds a key, value pair to appStorage. It is available in the Dashboard only.

The syntax of the function is:

**appStorage.setItem**(*key*, *value*, *callback*)

* *key* - The name of the item. String.
* *value* - The name of the item. Can be string, number, array, object: any JavaScript data type.
* *callback* - function(error, data), required. The function in your app to call when the function is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butSetItem.onclick = function() {
    appStorage.setItem("SimpleString", "ABCD", done);
    appStorage.setItem("Number", 123, done);
    appStorage.setItem("Array", [1, 2, 3, 4], done);
    appStorage.setItem("Object", {
        firstName: "Eric",
        lastName: "Cartman"
    }, done);
};

function done(error, data) {
    if (error) {
        if (data == undefined) {
            data = {
                message: "Network Error"
            };
        }
        NSB.MsgBox(data.message);
    } else {
        console.log("success");
    }
}
{% endhighlight %}

{% highlight visualbasic %}
Function butSetItem_onclick()
  appStorage.setItem("SimpleString", "ABCD", done)
  appStorage.setItem("Number", 123, done)
  appStorage.setItem("Array", [1, 2, 3, 4], done)
  appStorage.setItem("Object", {firstName: "Eric", lastName: "Cartman"}, done)
End Function

Function done(error, data)
  If error Then
    If data = undefined Then data = {message: "Network Error"}
    MsgBox data.message
  Else
    console.log("success")
  End If
End Function
{% endhighlight %}

</div>

## Reference

* JavaScript API: <https://docs.voltcloud.io/client/$volt.user.storage.html>
* REST API: <https://docs.voltcloud.io/api/#storage-plug-in>
