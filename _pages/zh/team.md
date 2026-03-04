---
layout: page
permalink: /#team-members
title: 团队成员
nav: true
nav_order: 2
lang: zh
---

<style>
.team-avatar {
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin: 0 auto;
}
.team-name {
  font-size: 1.1em;
  font-weight: bold;
}
.team-role {
  font-size: 0.85em;
}
</style>

#### 领军

<hr>

<div class="row text-center mb-1 justify-content-center">
{% for member in site.data.team.leaders %}
  <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
    {% if member.url %}
    <a href="{{ member.url | relative_url }}" style="color: inherit; text-decoration: none;">
    {% endif %}
      <img src="{{ member.image | prepend: '/assets/img/' | relative_url }}" class="img-fluid rounded-circle z-depth-1 team-avatar" alt="{{ member.name }}">
      <div class="team-name mt-2">{{ member.name }}</div>
      <div class="text-muted team-role">{{ member.role }}</div>
    {% if member.url %}
    </a>
    {% endif %}
  </div>
{% endfor %}
</div>

#### 核心骨干

<hr>

<div class="row text-center mb-1 justify-content-center">
{% for member in site.data.team.core %}
  <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
    {% if member.url %}
    <a href="{{ member.url | relative_url }}" style="color: inherit; text-decoration: none;">
    {% endif %}
      <img src="{{ member.image | prepend: '/assets/img/' | relative_url }}" class="img-fluid rounded-circle z-depth-1 team-avatar" alt="{{ member.name }}">
      <div class="team-name mt-2">{{ member.name }}</div>
      <div class="text-muted team-role">{{ member.role }}</div>
    {% if member.url %}
    </a>
    {% endif %}
  </div>
{% endfor %}
</div>

#### 新进青年

<hr>

<div class="row text-center mb-1">
{% for member in site.data.team.youth %}
  <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
    {% if member.url %}
    <a href="{{ member.url | relative_url }}" style="color: inherit; text-decoration: none;">
    {% endif %}
      <img src="{{ member.image | prepend: '/assets/img/' | relative_url }}" class="img-fluid rounded-circle z-depth-1 team-avatar" alt="{{ member.name }}">
      <div class="team-name mt-2">{{ member.name }}</div>
      <div class="text-muted team-role">{{ member.role }}</div>
    {% if member.url %}
    </a>
    {% endif %}
  </div>
{% endfor %}
</div>
