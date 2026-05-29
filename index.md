---
layout: default
title: Home
---

<section class="hero">
  <div>
    <p class="eyebrow">About me</p>

    <p class="lead">
      I am a Ph.D. student in the
      <a href="https://stat.cornell.edu/" target="_blank" rel="noopener">
        Department of Statistics and Data Science
      </a>
      at
      <a href="https://www.cornell.edu/" target="_blank" rel="noopener">
        Cornell University,
      </a>
      where I am advised by
      <a href="https://stat.cornell.edu/people/martin-t-wells" target="_blank" rel="noopener">
        Martin T. Wells.
      </a>
      My research interests include econometrics, non-stationary problems,
      optimization, and statistical learning theory.
    </p>

    <p>
      Prior to Cornell, I spent two wonderful years at
      <a href="https://www.capitalone.com/" target="_blank" rel="noopener">
        Capital One. </a>
      I received my B.Stat. in 2021 and M.Stat. in 2023 from the
      <a href="https://www.isical.ac.in/index" target="_blank" rel="noopener">
        Indian Statistical Institute, Kolkata
      </a>.
    </p>

 <div class="button-row">
  <a class="button" href="{{ '/research/' | relative_url }}">Research</a>
  <a class="button" href="{{ '/cv/' | relative_url }}">CV</a>

  <a class="button icon-button" href="https://scholar.google.com/citations?hl=en&user=a893O5cAAAAJ" target="_blank" rel="noopener" aria-label="Google Scholar" title="Google Scholar">
    <i class="ai ai-google-scholar"></i>
  </a>

  <a class="button icon-button" href="https://github.com/AbirS2026" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">
    <i class="fa-brands fa-github"></i>
  </a>

  <a class="button icon-button" href="https://www.linkedin.com/in/abir-sarkar-isikolkata/" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">
    <i class="fa-brands fa-linkedin"></i>
  </a>

  <a class="button icon-button" href="mailto:as4458@cornell.edu" aria-label="Email" title="Email">
    <i class="fa-solid fa-envelope"></i>
  </a>
</div> 
 
</div>
  <div class="profile-card">
    <img src="{{ '/assets/img/2025_11_CIS_Abir_ 6.jpg' | relative_url }}" alt="Abir Sarkar">
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
        <h3>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        {% if post.excerpt %}
          <p class="muted">{{ post.excerpt | strip_html | truncate: 190 }}</p>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</section>
