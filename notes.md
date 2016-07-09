Notes 2016.02.07

2 - 3 hours upfront

Jekyll site simple documentation site for VOLT stuff

- will send logo stuff
  - integratethe logo into the page
  - Orange color #f15726

- Jekyll site
  - for documentation
  - add the logo - up to me, as long as it doesn't look like crap
  - docs.voltcloud.io - url
    - /api
    - /js
    - target_blank to open in new window
    - link from site, fairly prominent
  - Main Content
    - getting started guides - not created yet
    - like blog post
      - don't need the blog features
        - no dates in post or url
    - summary of the most recent guides on the front page
    - may have some hard links
    - reverse chronological
      - defer to me
      - would pages be better?
      - use jekyll compose plugin
    - MAIN PAGE
      - sample documentation posts?
      - intro paragraph
      - cross between wiki and blog
        - ex: linode, heroku
  - make a repo for myself for now

- Static site
  - wants to let ppl search, but not rely on google site search
  - look for JS-based search options based off an index page
    - look for a jekyll plugin all client-side search 30 min

Notes - 2016.04.07

- Wants to add new categories manually
- James will manage the API/JS pages
- Don't worry about reverse chronological order

- Find search plugin
- Logo - could be bigger?
- optimize spacing for 675-700px browser height
  - wants to see categories w/o scroll
- Move the searchbar up - top navbar
- Limit the number of posts in each category box (currently takes 8, maybe limit to 5)
  - increase link size
  - add a "more..." link
  - make category pages that the more... link links to
- Add a navbar link that goes to all articles
  - lists all articles regardless of category
  - use usual index.html snippet for that
  - don't worry about pagination for now
- Change "Intro Paragraph" to "Volt Documentation"
- Stop at 4 hours

Notes - 2016.07.06

- exclude things that shouldn't be in _site (exclude: ['Gemfile', 'Gemfile.lock'])
- no dates in the urls
- consider using this plugin to generate category archives: https://github.com/jekyll/jekyll-archives
- size fonts of post links down to refine them
- https://github.com/jekyll/jekyll-sitemap - also add

Notes 2016.07.07

Things to fix:
- pretty sure the more link sizes should match the other URLs they look odd to me being bigger. I’m not a huge fan of them in general, but I don’t know what a better UI would be.
- Does it seem like the docs links could be to the left a bit more?
- Change All Docs to Article Index - can we list them alphabetically as opposed to reverse chronological?

Plugins I would like you to install:
- https://github.com/jekyll/jekyll-sitemap
- https://github.com/jekyll/jekyll-archives - so you don’t have to manually make category archives
- https://github.com/slashdotdash/jekyll-lunr-js-search - leave this for last, do as much as you can
  - need a place to put the results, like a modal
