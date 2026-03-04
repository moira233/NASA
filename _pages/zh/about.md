---
layout: about
title: 关于
permalink: /
# subtitle: <a href='#'>单位</a>. 地址. 联系方式. 座右铭等.
lang: zh
nav: false
nav_order: 1

# profile:
#   align: right
#   image: prof_pic.jpg
#   image_circular: false # crops the image to make it circular
#   more_info: >
#     <p>555 你的办公室号码</p>
#     <p>123 你的地址街道</p>
#     <p>你的城市, 省份 12345</p>

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
  color: #b509ac;
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

<h2 class="section-title" style="display: none;">🌍 团队介绍</h2>

#### 团队擅长的研究领域与方向

- **计算机网络** (数据中心网络、广域网络、可编程网络)
  - _主要成员：郑嘉琦、孟晴开、黄程远、曹培睿_
- **分布式系统** (大模型机器学习系统的训推加速、云原生系统)
  - _主要成员：王晓亮、顾荣、汪庆、谢旻晖_
- **新型计算** (量子网络与传输、图计算、向量数据库)
  - _主要成员：赵阳明、宦成颖、王智彬_

#### 推荐理由与合作优势

1.  **Top 梯队：** 团队共有教师 11 人，包含国家杰出青年基金获得者 2 人、青年长江学者 1 人、优秀青年基金获得者 1 人，师资力量顶尖。
2.  **Top 生源：** 博士生选拔比例高达 40:1，多为 C9 高校 Top 级别的保送生。研究生每年均有斩获国际顶会 Best Paper (最佳论文) 或杰出论文奖。
3.  **Top 影响力：** 在 EuroSys、ASPLOS 等计算机系统领域顶级会议的论文发表数量位居全球前列。
4.  **核心优势：** 团队在网络和分布式系统方面持续深耕，依托计算机软件新技术全国重点实验室的硬核资源，加之联合实验室合作与多年人才联合培养的成功实践，具备极其突出的产学研合作潜力与落地能力。

#### 团队关键成就

- **拥塞管理协议栈：** 本年度 Pyrrha 和 PrioPlus 两份工作分别被 **NSDI 2025** 和 **EuroSys 2025** 录用。其中，Pyrrha 是国际上**首次提出**以流量控制为中心重构拥塞管理协议体系。
- **网络数字孪生：** μMon 和 Unison 分别发表在 **SIGCOMM 2024** 和 **EuroSys 2024** 上，Marlin 被 **EuroSys 2025** 录用。其中，μMon 是国际上首个微秒粒度逐流遥测系统；Marlin 是一款可编程的高通量高精度网络测试仪，致力于解决关键的“卡脖子”问题。
- **可编程设备：** P4RTC 被 **NSDI 2025** 录用，基于国产（华为）可编程路由器构建可编程网络生态，强力挑战美国 Tofino 平台曾经的垄断地位。
- **大模型系统优化：** Hermes 系统和组件化 Roofline 模型发表在 **ATC 2025** 和 **ASPLOS 2025**。该工作面向昇腾芯片，首次实现了对性能瓶颈的高精度诊断与优化，为释放国产 AI 算力提供了关键支撑。细粒度能耗优化工作发表在 **ASPLOS 2025**，实现了毫秒级能耗优化，达成 15.27% 的 AICore 能耗下降，助力低碳绿色计算。
- **图计算：** 子图匹配和社区检测算法发表在 **SIGMOD 2023、ATC 2023、PPoPP 2025**，成功应用于国产图数据库 GraphScope。时序图检测算法发表于 **ICDE 2022** 以及 **EuroSys 2023 / 2025**，应用于国产图数据库 TuGraph，全面助力图计算技术在国产平台的落地转化。

<div id="team-members" class="section-anchor"></div>

<h2 class="section-title">🎓团队成员</h2>

<h3 class="team-category-title">领军</h3>

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

<h3 class="team-category-title">核心骨干</h3>

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

<h3 class="team-category-title">新进青年</h3>

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
