---
layout: default
title: Writing
permalink: /writing/
---

<p class="eyebrow">Writing</p>
<h1>Writing</h1>

<p class="lead">
  Notes, essays, and informal writing. Some posts are technical; others are reflections on research,
  economics, academia, and public life.
</p>

<div class="list">
  {% for post in site.posts %}
    <article class="item">
      <p class="meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      {% if post.excerpt %}<p class="muted">{{ post.excerpt | strip_html | truncate: 220 }}</p>{% endif %}
    </article>
  {% endfor %}
</div>
