---
layout: page
title: POSTS
---
{% for post in site.posts %}
  <p><a href="{{ post.url }}">{{ post.title }}</a>&nbsp;{{ post.date | date: "%a-%d-%b-%Y" }}</p>
{% endfor %}
