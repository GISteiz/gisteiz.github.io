---
layout: page
permalink: /services/
title: services
description: # Services provided by GISteiz
nav: true
nav_order: 2
---

<div class="services d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for service in site.data.services.main_services %}
    {% include service/service.liquid service=service %}
  {% endfor %}
</div>
