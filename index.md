---
layout: default
title: Home
---

<section class="hero">
  <div>
    <p class="eyebrow">About me</p>

    <p class="about-text">
  I am a Ph.D. student in the
  <a href="https://stat.cornell.edu/" target="_blank" rel="noopener">
    Department of Statistics and Data Science
  </a>
  at
  <a href="https://www.cornell.edu/" target="_blank" rel="noopener">
    Cornell University,
  </a>
  where I am advised by Professor
  <a href="https://stat.cornell.edu/people/martin-t-wells" target="_blank" rel="noopener">
    Martin T. Wells.
  </a>
  My research interests include econometrics, non-stationary problems,
  optimization, and statistical learning theory.
</p>

<p class="about-text">
  Prior to Cornell, I spent two wonderful years at
  <a href="https://www.capitalone.com/" target="_blank" rel="noopener">
    Capital One.
  </a>
  I received my B.Stat. in 2021 and M.Stat. in 2023 from the
  <a href="https://www.isical.ac.in/index" target="_blank" rel="noopener">
    Indian Statistical Institute, Kolkata.
  </a>
</p>

 <div class="button-row">
  <a class="button" href="{{ '/research/' | relative_url }}">Research</a>
  <a class="button" href="{{ '/cv/' | relative_url }}">CV</a>

  <a class="button icon-button" href="https://www.linkedin.com/in/abir-sarkar-isikolkata/" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">
    <i class="fa-brands fa-linkedin"></i>
  </a>

  <a class="button icon-button" href="https://scholar.google.com/citations?hl=en&user=a893O5cAAAAJ" target="_blank" rel="noopener" aria-label="Google Scholar" title="Google Scholar">
    <i class="ai ai-google-scholar"></i>
  </a>

  <a class="button icon-button" href="mailto:as4458@cornell.edu" aria-label="Email" title="Email">
    <i class="fa-solid fa-envelope"></i>
  </a>

  <a class="button icon-button" href="https://github.com/AbirS2026" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">
    <i class="fa-brands fa-github"></i>
  </a>
</div>
 
</div>
  <div class="profile-card">
    <img src="{{ '/assets/img/2025_11_CIS_Abir_ 6.jpg' | relative_url }}" alt="Abir Sarkar">
  </div>
</section>

<section id="research">
  <h1>Selected Research</h1>

  <div class="grid three">

    <a class="card research-card"
       href="https://www.aimsciences.org/article/doi/10.3934/fmf.2026005"
       target="_blank"
       rel="noopener"
       aria-label="Read Is There an AI Bubble?">
      <h3>Is There an AI Bubble?</h3>
      <p>
        We develop a volatility-robust recursive ADF framework for detecting and
        date-stamping asset-price bubbles under persistent and time-varying volatility.
      </p>
    </a>

    <a class="card research-card"
       href="https://arxiv.org/abs/2605.04269"
       target="_blank"
       rel="noopener"
       aria-label="Read SGD vs. Adam: The Noise–Drift Tradeoff">
      <h3>SGD vs. Adam: The Noise–Drift Tradeoff</h3>
      <p>
        We develop a finite-time analysis of Adam under nonstationary stochastic
        objectives, showing that Adam benefits noise-dominated regimes, whereas
        preconditioner lag and stale momentum can make SGD preferable when drift dominates.
      </p>
    </a>

    <a class="card research-card"
       href="https://arxiv.org/abs/2512.06823"
       target="_blank"
       rel="noopener"
       aria-label="Read Inference under Nearly Nonstationary Volatility">
      <h3>Inference under Nearly Nonstationary Volatility</h3>
      <p>
        We develop moderate-deviation theory for autoregressive models with nearly
        nonstationary stochastic volatility and obtain inference that is robust to
        volatility spikes and spurious explosive signals.
      </p>
    </a>

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
