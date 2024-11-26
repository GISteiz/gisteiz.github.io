---
layout: page
permalink: /servicios/
title: Servicios
description: # Services provided by GISteiz
nav: true
nav_order: 2
display_categories: [Consultoría SIG, Tecnologías, Otros servicios]
---

<div class="services">

<code style="font-size: 1.4em">Página en construcción</code>

<!-- Display categorized services -->
{% for category in page.display_categories %}
  
  {% if site.data.services[category].size %}

  <!--a id="{{ category }}" href=".#{{ category }}"-->
  <h2 id="{{ category }}" class="category">{{ category }}</h2>
  <!--/a-->
  {% if category != 'Tecnologías' %}
    <!--div class="services d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center"-->
    <div class="service row row-cols-1 row-cols-md-3">
      {% for service in site.data.services[category] %}
        {% include service.liquid service=service %}
      {% endfor %}
    </div>
  {% endif %}
  {% if category == 'Tecnologías' %}
    <div class="service row row-cols-1 row-cols-md-6">
      {% for tecnology in site.data.services[category] %}
        {% include tecnology.liquid tecnology=tecnology %}
      {% endfor %}
    </div>
  {% endif %}
  {% endif %}

{% endfor %}

</div>
