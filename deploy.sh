#!/bin/sh
bundle install --deployment
bundle exec jekyll build --destination=/srv/volt/docs
