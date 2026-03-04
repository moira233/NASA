---
layout: about
title: About
permalink: /en/
# subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.
lang: en
nav: false
nav_order: 1

# profile:
#   align: right
#   image: prof_pic.jpg
#   image_circular: false # crops the image to make it circular
#   more_info: >
#     <p>555 your office number</p>
#     <p>123 your address street</p>
#     <p>Your City, State 12345</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
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
.section-anchor {
  scroll-margin-top: 80px;
}
.section-title {
  color: #4E0099;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
.team-category-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}
</style>

<div id="lab-intro" class="section-anchor"></div>

<h2 class="section-title">🌍 Lab Introduction</h2>

#### Research Areas and Directions

- **Computer Networks** (Data Center Networks, Wide Area Networks, Programmable Networks)
  - _Key Members: Zheng Jiaqi, Meng Qingkai, Huang Chengyuan, Cao Peirui_
- **Distributed Systems** (Large Model ML System Acceleration, Cloud-Native Systems)
  - _Key Members: Wang Xiaoliang, Gu Rong, Wang Qing, Xie Minhui_
- **Emerging Computing** (Quantum Networks and Transmission, Graph Computing, Vector Databases)
  - _Key Members: Zhao Yangming, Huan Chengying, Wang Zhibin_

#### Why Choose Us & Collaboration Advantages

1.  **Top-tier Faculty:** The team consists of 11 faculty members, including 2 NSFC Distinguished Young Scholars, 1 MOE Young Yangtze River Scholar, and 1 NSFC Excellent Young Scholar, representing top-tier academic strength.
2.  **Top-tier Students:** PhD student selection ratio reaches 40:1, mostly top-tier students from C9 universities. Graduate students regularly win Best Paper or Distinguished Paper awards at top international conferences.
3.  **Top-tier Impact:** Leading globally in paper publications at top computer systems conferences such as EuroSys and ASPLOS.
4.  **Core Advantages:** The team has deep expertise in networks and distributed systems, backed by the State Key Laboratory for Novel Software Technology, with extensive industry-academia collaboration experience and proven talent cultivation track record.

#### Key Achievements

- **Congestion Management Protocol Stack:** Pyrrha and PrioPlus were accepted by **NSDI 2025** and **EuroSys 2025** respectively. Pyrrha is the **first** internationally to propose a flow-control-centric congestion management protocol architecture.
- **Network Digital Twin:** μMon and Unison were published in **SIGCOMM 2024** and **EuroSys 2024**, with Marlin accepted by **EuroSys 2025**. μMon is the world's first microsecond-granularity per-flow telemetry system; Marlin is a programmable high-throughput high-precision network tester addressing critical technology bottlenecks.
- **Programmable Devices:** P4RTC was accepted by **NSDI 2025**, building a programmable network ecosystem based on domestic (Huawei) programmable routers, challenging the monopoly of the US Tofino platform.
- **Large Model System Optimization:** Hermes system and componentized Roofline model were published in **ATC 2025** and **ASPLOS 2025**. This work targets Ascend chips, achieving high-precision performance bottleneck diagnosis and optimization for the first time, providing critical support for unleashing domestic AI computing power. Fine-grained energy optimization work published in **ASPLOS 2025** achieved millisecond-level energy optimization with 15.27% AICore energy reduction, supporting low-carbon green computing.
- **Graph Computing:** Subgraph matching and community detection algorithms were published in **SIGMOD 2023, ATC 2023, PPoPP 2025**, successfully applied to the domestic graph database GraphScope. Temporal graph detection algorithms were published in **ICDE 2022** and **EuroSys 2023 / 2025**, applied to the domestic graph database TuGraph, comprehensively supporting graph computing technology deployment on domestic platforms.


<div id="team-members" class="section-anchor"></div>

<h2 class="section-title">🎓 Team Members</h2>

<h3 class="team-category-title">Leading Talents</h3>

<hr>

<div class="row text-center mb-1 justify-content-center">
{% for member in site.data.team_en.leaders %}
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

<h3 class="team-category-title">Core Members</h3>

<hr>

<div class="row text-center mb-1 justify-content-center">
{% for member in site.data.team_en.core %}
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

<h3 class="team-category-title">Young Talents</h3>

<hr>

<div class="row text-center mb-1">
{% for member in site.data.team_en.youth %}
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
