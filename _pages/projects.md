---
layout: page
title: Proyectos
permalink: /proyectos/
description:
nav: true
nav_order: 3
display_categories: # [work, fun]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">

<code style="font-size: 1.4em">Página en construcción</code>

  <div class="row projects-intro">
    <div class="col text-right">
      <!-- <a href="/lista_proyectos/">Ver listado completo de proyectos <i class="fa-solid fa-list-ul"></i></a> -->
    </div>
  </div>

{% if site.enable_project_categories and page.display_categories %}

  <!-- Display categorized projects -->

    {% for category in page.display_categories %}
      <a id="{{ category }}" href=".#{{ category }}">
        <h2 class="category">{{ category }}</h2>
      </a>

      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}

  <!-- Generate cards for each project -->

      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
          {% for project in sorted_projects %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="row row-cols-1 row-cols-md-3">
          {% for project in sorted_projects %}
            {% include projects.liquid %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}

{% else %}

  <!-- Display projects without categories -->

    {% assign filtered_projects = site.projects | where_exp: "item", "item.list_only != true" %}
    {% assign sorted_projects = filtered_projects | sort: "importance" %}

  <!-- Generate cards for each project -->

    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
        {% for project in sorted_projects %}
          {% include projects_horizontal.liquid %}
        {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}

{% endif %}

</div>

<!-- Partners -->

<div class="projects">
  <h2 class="category">Colaboradores</h2>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-5">
      {% for partner in site.data.partners %}
        {% include partner.liquid partner=partner %}
      {% endfor %}
    </div>
  </div>
</div>
