---
layout: page
permalink: /services/
title: services
description: # Services provided by GISteiz
nav: true
nav_order: 2
display_categories: [main services, development, other services]
---

<div class="services">

<!-- Display categorized services -->
{% for category in page.display_categories %}
  
  {% if site.data.services[category].size %}

  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>

  <div class="services d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    {% for service in site.data.services[category] %}
      {% include service.liquid service=service %}
    {% endfor %}
  </div>
  
  {% endif %}

{% endfor %}

</div>