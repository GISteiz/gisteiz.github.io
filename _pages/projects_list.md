---
layout: page
title: Proyectos
permalink: /lista_proyectos/
description:
nav: false
---

{% assign sorted_projects = site.projects | sort: "project_date" | reverse %}

<!-- pages/projects.md -->
<div class="projects">

<code style="font-size: 1.4em">Página en construcción</code>

  <div class="row projects-intro">
    <div class="col text-right">
      <a href="/proyectos/"><i class="fa-solid fa-chevron-left"></i> Volver a proyectos</a>
    </div>
  </div>

  <!-- Generate list items for each project -->

  <div class="container">
    <div class="row row-cols-1 row-cols-md-1">
    {% assign last_year = "" %}
    {% for project in sorted_projects %}
      {% assign current_year = project.project_date | slice: 0, 4 %}
      {% if last_year != current_year or last_year == "" %}
        {% assign last_year = project.project_date | slice: 0, 4 %}
        <h2>{{ last_year }}</h2>
      {% endif %}

      <div class="card h-100 project_list_item">
        <div class="col">
          <p>
            <span class="project_list_item_title">
              <a href="{{ project.url | relative_url }}">
                {{ project.title }}
              </a> |
            </span>
            <span class="">
              {{ project.project_date }}
            </span>
            {% if project.client %}
            <span class="">
               | {{ project.client }}
            </span>
            {% endif %}
            {% if project.technologies %}
              |
              {% assign technologies = project.technologies | split: ',' %}
              <span class="text-right">
                {% for technology in technologies %}
                  {% for item in site.data.services['Tecnologías'] %}
                    {% if item.name == technology %}
                      <a href="{{ item.url }}" target="_blank">
                        <span class="badge badge-{{ technology | downcase  }} font-weight-bold align-middle" style="min-width: 75px">
                          {{ item.label }}
                        </span>
                      </a>
                    {% endif %}
                  {% endfor %}
                {% endfor %}
              </span>
            {% endif %}
          </p>
        </div>
      </div>
    {% endfor %}
    </div>

  </div>

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
