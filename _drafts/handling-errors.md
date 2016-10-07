---
layout: post
title: Handling Errors
category: Getting Started
---

As much as we'd like to avoid errors, they happen from time to time. When making asynchronous calls using Volt's [client library](https://docs.voltcloud.io/client/) the callbacks are always of the form: `callback(error, data)`. If `error` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) it means an error has occurred while making your request. Here are some tips for understanding exactly what has gone wrong.

## The Error Object

We'll start by taking a look at the `error` parameter of the callback. If an error has occurred, it will be a standard JavaScript [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object.

The `error` parameter is always guaranteed to have a `message` attribute. In the case of network timeouts and errors, this will be the only attribute set. You might consider using an alert to display this message to the user:

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
$volt.user.get(function (error, data) {
  if (error) {
    alert(error.message);
  } else {
    alert('Success!');
  }
});
{% endhighlight %}

{% highlight visualbasic %}
Function userCallback(error, data)
  If error Then
    alert(error.message)
  Else
    alert("Success!")
  End If
End Function

$volt.user.get(userCallback)
{% endhighlight %}

</div>

If the [Volt API](https://docs.voltcloud.io/api/) is reachable and responds with an error, an additional parameter is added to the error object: `status`. If `error.status` is defined, it will be set to the HTTP status code returned by the API. This value can be useful for debugging or logging.

## The Data Object

For nearly all API errors, Volt returns an additional data object that gives you more specific information about what has caused the error. At a minimum that object will be of this form:

```json
{
  "type": "VoltError",
  "message": "Detailed description of the error."
}
```

Generally `data.message` can be useful to display to an end user whereas `data.type` is useful for debugging or logging. We can modify our code above to display `data.message` if it's available:

<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
$volt.user.get(function (error, data) {
  if (error) {
    if (data) {
      alert(data.message);
    } else {
      alert(error.message);
    }
  } else {
    alert('Success!');
  }
});
{% endhighlight %}

{% highlight visualbasic %}
Function userCallback(error, data)
  If error Then
    If data Then
      alert(data.message)
    Else
      alert(error.message)
    End If
  Else
    alert("Success!")
  End If
End Function

$volt.user.get(userCallback)
{% endhighlight %}

</div>

## Extended Error Data

Certain types of Volt errors include additional information in their data object.

### ValidationError

A `ValidationError` occurs when the data you've passed in your request is invalid in some way. It may include an additional attribute: `validations`. If `validations` it truthy, it will be either in the form of a general validation, or a password validation.

#### General Validation Errors

For general validation errors, `error.validations.body` will be an object of the following form:

```json
{
  "body": [
    {
      "value": "notanemail",
      "property": "request.body.email",
      "messages": [
        "does not conform to the \"email\" format"
      ]
    },
    {
      "property": "request.body",
      "messages": [
        "requires property \"password\""
      ]
    }
  ]
}
```

The above response was generated from the following invalid call: `$volt.auth.register('notanemail', undefined, 'does not match', callback);`. If `error.validations.body` exists, it will be an array of objects. Each object will have at a minimum `property` and `messages` attributes. Some will also have a `value` attribute.

* `property` - the property that failed validation. You can ignore the `request.body` portion. In the case that the property is exactly equal to `request.body` it indicates a problem with the entire request.
* `messages` - an array of messages describing why validation failed.
* `value` - the value that failed validation, if applicable.

Generally, you will want to perform client side validation and not depend on only server side validation. However, the above data structure can provide valuable insight into why your requests are failing.

#### Password Validation Errors

For invalid passwords, `error.validations.password` is an array of messages indicating which validations were failed by the password:

```json
{
  "password": [
    "The password must be at least 10 characters long.",
    "The password must contain at least one uppercase letter.",
    "The password must contain at least one number.",
    "The password must contain at least one special character."
  ]
}
```

### ConflictError

A `ConflictError` occurs when your request would cause a conflict, for instance if you attempt to register using an email address that's already in use. It includes an additional attribute, `conflict`, that includes an identifier of the existing object that would be in conflict. This is generally useful for debugging.

### UnknownClientError

It's rare that you'll see an `UnknownClientError`. It generally means something was wrong with your request to the API. It includes an additional attribute in the data object: `detail`. This may provide additional detail as to why the error occurred.
