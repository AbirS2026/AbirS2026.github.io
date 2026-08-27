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
  <a href="https://stat.cornell.edu/people/martin-t-wells"
     target="_blank"
     rel="noopener">
    Martin T. Wells
  </a>.
  I also work closely with Professor
  <a href="https://www.jelenabradic.net/"
     target="_blank"
     rel="noopener">
    Jelena Bradic
  </a>
  on problems in active statistical inference and statistical machine learning.
  More broadly, my research interests span time-series econometrics,
  statistical learning, and stochastic optimization.
</p>

    <p class="about-text">
      Prior to Cornell, I spent two wonderful years at
      <a href="https://www.capitalone.com/" target="_blank" rel="noopener">
        Capital One.
      </a>
      I received my B.Stat. in 2021 and M.Stat. in 2023 from the
      <a href="https://www.isical.ac.in/index"
         target="_blank"
         rel="noopener">
        Indian Statistical Institute, Kolkata.
      </a>
    </p>

    <div class="button-row">
      <a class="button" href="{{ '/research/' | relative_url }}">
        Research
      </a>

      <a class="button" href="{{ '/cv/' | relative_url }}">
        CV
      </a>

      <a class="button icon-button"
         href="https://www.linkedin.com/in/abir-sarkar-isikolkata/"
         target="_blank"
         rel="noopener"
         aria-label="LinkedIn"
         title="LinkedIn">
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a class="button icon-button"
         href="https://scholar.google.com/citations?hl=en&user=a893O5cAAAAJ"
         target="_blank"
         rel="noopener"
         aria-label="Google Scholar"
         title="Google Scholar">
        <i class="ai ai-google-scholar"></i>
      </a>

      <a class="button icon-button"
         href="mailto:as4458@cornell.edu"
         aria-label="Email"
         title="Email">
        <i class="fa-solid fa-envelope"></i>
      </a>

      <a class="button icon-button"
         href="https://github.com/AbirS2026"
         target="_blank"
         rel="noopener"
         aria-label="GitHub"
         title="GitHub">
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  </div>

  <div class="profile-card">
    <img
      src="{{ '/assets/img/2025_11_CIS_Abir_ 6.jpg' | relative_url }}"
      alt="Abir Sarkar">
  </div>
</section>

<section id="research">
  <h2 class="home-section-title">Selected Research</h2>

  <div class="grid three">

    <a class="card research-card"
       href="https://www.aimsciences.org/article/doi/10.3934/fmf.2026005"
       target="_blank"
       rel="noopener"
       aria-label="Read Is There an AI Bubble?">
      <h3>Is There an AI Bubble?</h3>
      <p>
        We develop a volatility-robust recursive ADF framework for detecting
        and date-stamping asset-price bubbles under persistent and time-varying
        volatility.
      </p>
    </a>

    <a class="card research-card"
       href="https://arxiv.org/abs/2605.04269"
       target="_blank"
       rel="noopener"
       aria-label="Read SGD versus Adam: The Noise–Drift Tradeoff">
      <h3>SGD vs. Adam: The Noise–Drift Tradeoff</h3>
      <p>
        We develop a finite-time analysis of Adam under nonstationary
        stochastic objectives, showing that Adam benefits noise-dominated
        regimes, whereas stale momentum and preconditioner lag can make SGD
        preferable when drift dominates.
      </p>
    </a>

    <a class="card research-card"
       href="https://arxiv.org/abs/2512.06823"
       target="_blank"
       rel="noopener"
       aria-label="Read Inference under Nearly Nonstationary Volatility">
      <h3>Inference under Nearly Nonstationary Volatility</h3>
      <p>
        We develop moderate-deviation theory for autoregressive models with
        nearly nonstationary stochastic volatility and obtain inference that
        is robust to volatility spikes and spurious explosive signals.
      </p>
    </a>

  </div>
</section>

<section id="contact">
  <h2 class="home-section-title">Contact</h2>

  <div class="card contact-card">

    <div class="contact-row">
      <div class="contact-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M4 6h16v12H4z"></path>
          <path d="m4 7 8 6 8-6"></path>
        </svg>
      </div>

      <div class="contact-content">
        <h3>Email</h3>
        <p>
          <a href="mailto:as4458@cornell.edu">
            as4458@cornell.edu
          </a>
        </p>
      </div>
    </div>

    <div class="contact-row">
      <div class="contact-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11z"></path>
          <circle cx="12" cy="10" r="2"></circle>
        </svg>
      </div>

      <div class="contact-content">
        <h3>Office address</h3>
        <p>
          301 CIS Building, Department of Statistics and Data Science<br>
          Cornell University<br>
          Ithaca, NY 14853
        </p>
      </div>
    </div>

  </div>
</section>
