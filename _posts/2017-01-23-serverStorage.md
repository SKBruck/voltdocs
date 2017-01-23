---
layout: post
title: Server Storage
category: Services
---

ServerStorage allows you to save data in key, value pairs on the server so it is available next time you run the program. An entry can be created by assigning to serverStorage.setItem(key, value), where key is chosen by you. Data is retrieved a similar way. The information in serverStorage is only available to the app itself.

Value can be a string, number, array or object. There is no size limit on value, other than it be reasonable.

If your app does not have a live internet connection, the request will time out and an error message will be passed to callback.

Since the calls access information on a server, they are asynchronous (so your app does not look up while the call is being processed). When the call is complete, the function named in callback is called in your app. It passes two parameters: (error, data). If the call is successful, error is empty and your results are in data. If the call is unsuccessful, error is not empty and the error message is in data.message.

serverStorage is an alias for $volt.user.storage in the Volt API.

## serverStorage.clear

This call clears all the items in your app's serverStorage.

The syntax of the function is:

**serverStorage.clear**(*callback*)

* *callback* - function(error, data), required. The function in your app to call when the function is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butClear.onclick = function() {
    serverStorage.clear(done);
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
  serverStorage.clear(done)
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

## serverStorage.getItem

This call gets the item with a specified key.

The syntax of the function is:

**serverStorage.getItem**(*key*, *callback*)

* *key* - The name of the item. String.
* *callback* - function(error, data), required. The function in your app to call when the function is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butGetItem.onclick = function() {
    serverStorage.getItem("SimpleString", getItemCallback);
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
  serverStorage.getItem("SimpleString", getItemCallback)
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

## serverStorage.getAllItems

This call returns all the items in your app's serverStorage in an array of {key, value} objects.

The syntax of the function is:

**serverStorage.getAllItems**(*callback*)

* *callback* - function(error, data), required. The function in your app to call when the function is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butGetAllItems.onclick = function() {
    serverStorage.getAllItems(getAllItemsCallback);
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
  serverStorage.getAllItems(getAllItemsCallback)
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
## serverStorage.removeItem

This call removes the item with a specified key.

The syntax of the function is:

**serverStorage.removeItem**(*key*, *callback*)

* *key* - The name of the item. String.
* *callback* - function(error, data), required. The function in your app to call when the function is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butRemoveItem.onclick = function() {
    serverStorage.removeItem("SimpleString", done);
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
  serverStorage.removeItem("SimpleString", done)
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
## serverStorage.setItem

This call adds a key, value pair to serverStorage.

The syntax of the function is:

**serverStorage.setItem**(*key*, *value*, *callback*)

* *key* - The name of the item. String.
* *value* - The name of the item. Can be string, number, array, object: any JavaScript data type.
* *callback* - function(error, data), required. The function in your app to call when the function is complete (or fails).

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
butSetItem.onclick = function() {
    serverStorage.setItem("SimpleString", "ABCD", done);
    serverStorage.setItem("Number", 123, done);
    serverStorage.setItem("Array", [1, 2, 3, 4], done);
    serverStorage.setItem("Object", {
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
  serverStorage.setItem("SimpleString", "ABCD", done)
  serverStorage.setItem("Number", 123, done)
  serverStorage.setItem("Array", [1, 2, 3, 4], done)
  serverStorage.setItem("Object", {firstName: "Eric", lastName: "Cartman"}, done)
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
