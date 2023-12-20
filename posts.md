---
layout: post
---

# POSTS
{% for post in site.posts %}
  <p><a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}
