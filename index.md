---
layout: default
title: Home
---

<section class="hero">
  <div>
    <p class="eyebrow">About me</p>
    <h1>Abir Sarkar</h1>
    <p class="lead">
      I am a researcher at Cornell University. My interests include time series econometrics,
      stochastic volatility, unit root testing, and asymptotic theory.
    </p>

    <p class="muted">
      I use this website to collect my research, teaching material, and occasional writing on
      econometrics, statistics, policy, and academia.
    </p>

    <div class="button-row">
      <a class="button" href="{{ '/research/' | relative_url }}">Research</a>
      <a class="button" href="{{ '/cv/' | relative_url }}">CV</a>
      <a class="button icon-button" href="mailto:as4458@cornell.edu" aria-label="Email">✉</a>
      <a class="button icon-button" href="https://github.com/as4458" aria-label="GitHub">⌘</a>
      <a class="button icon-button" href="#" aria-label="Google Scholar">♟</a>
    </div>
  </div>

  <div class="profile-card">
    <img src="{{ '/assets/img/profile.svg' | relative_url }}" alt="Profile photo placeholder">
  </div>
</section>

<section>
  <h2>Selected research</h2>
  <div class="grid three">
    <article class="card">
      <h3>Unit root testing under stochastic volatility</h3>
      <p>
        Limit theory and inference for persistent time series with time-varying volatility.
      </p>
    </article>

    <article class="card">
      <h3>Explosive and mildly explosive processes</h3>
      <p>
        Asymptotic approximations for autoregressive models near and beyond the unit root boundary.
      </p>
    </article>

    <article class="card">
      <h3>Financial time series</h3>
      <p>
        Econometric methods for volatility, persistence, and structural instability in financial data.
      </p>
    </article>
  </div>
</section>

<section>
  <h2>Recent writing</h2>
  <div class="list">
    {% for post in site.posts limit:3 %}
      <article class="item">
        <p class="meta">{{ post.date | date: "%B %-d, %Y" }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        {% if post.excerpt %}<p class="muted">{{ post.excerpt | strip_html | truncate: 190 }}</p>{% endif %}
      </article>
    {% endfor %}
  </div>
</section>
