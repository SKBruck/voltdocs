# Volt Docs

Volt documentation and tutorials static site.

[![CircleCI](https://circleci.com/gh/arsmentis/volt-docs.svg?style=svg&circle-token=c9e9916c3e352851685479cfc90c2bfdb712688f)](https://circleci.com/gh/arsmentis/volt-docs)

## Quick Start

Follow these instructions if you don't want to run the site locally or install anything. Start by cloning the repo.

You can create a new article by adding a markdown file to the `_posts` folder. The file must be named using the following pattern: `YYYY-MM-DD-name-of-post.md`. The content of the file should be similar to this:

```yaml
---
layout: post
title: Name of Post
category: My Category
---

Article content (in markdown) starts here.
```

Once you are done editing your article, commit and push your changes. The [CI server](https://circleci.com/) will build the site for you. If you sign up there you can preview the site there (in artifacts). Your article won't become live until it's pulled over to the server which (for now) is a manual process.

## Working Locally

If you'd like to be able to preview the site or use tools to write new posts, start here.

* Clone the repo.
* Make sure ruby is installed. The site has been tested with v2.3.0, but other versions should work. My suggestion is to use RVM: https://rvm.io/
* (Optional) Create/enable a gemset. The project includes a `.ruby-gemset` file and if you switch into the project directory, it's created automatically by RVM.
* Install bundler: `gem install bundler`
* Install the bundle: `bundle install`
* Test the site: `jekyll serve` - you should be able to browse the site at http://127.0.0.1:4000/

### Start a draft

Execute: `jekyll draft 'My Post Title'`. You'll have a template post in `_drafts`. You'll want to add a category (only one) to it, like this:

```yaml
---
layout: post
title: My Post Title
category: Getting Started
---
```

You can then write your article using markdown. Here are docs on the flavor of markdown used: https://help.github.com/articles/basic-writing-and-formatting-syntax/

### Publish your article

Execute: `jekyll publish _drafts/my-post-title.md`. This will move your article into the _posts folder (and add a date, which we aren't using, but is required).

### Test your article

Execute: `jekyll serve` and browse to http://127.0.0.1:4000/

### Commit your changes

Commit your changes to the repository and push. The CI server will run a few tests against your article. Your article won't become live until it's pulled over to the server which (for now) is a manual process.

### Adding categories to the index

The index can display an arbitrary number of category blocks. Edit the `index_categories` property in `_config.yml` to control which categories are displayed.

## Multi-language Code Snippets

One unique feature of this site is the ability to display code snippets in multiple languages. Simply use the following template:

```html
<div class="code-tabs" data-languages="JavaScript,BASIC">

{% highlight javascript %}
function Main() {
  console.log('howdy!');
}
{% endhighlight %}

{% highlight visualbasic %}
Sub Main()
  console.log("howdy!")
End Sub
{% endhighlight %}

</div>
```
