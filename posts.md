---
layout: posts
---

# POSTS

{{ content }}

<!-- {% assign postsInYear = site.posts | where_exp: "item", "item.hidden != true" | group_by_exp: 'post', 'post.date | date: "%Y"' %} {% for year in postsInYear %}
{{ year.name }} {{ year.items | size }}
{% endfor %}

{% assign entries_layout = page.entries_layout | default: 'list' %} {% assign postsByYear = site.posts | where_exp: "item", "item.hidden != true" | group_by_exp: 'post', 'post.date | date: "%Y"' %} {% for year in postsByYear %}

{{ year.name }} -->

<!-- {% for post in year.items %} {% include archive-single.html type=entries_layout %} {% endfor %}
{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} ↑
{% endfor %} -->
