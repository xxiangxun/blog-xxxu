# AstroPaper 📄

![AstroPaper](public/astropaper-og.jpg)
[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/community/file/1356898632249991861)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub](https://img.shields.io/github/license/satnaing/astro-paper?color=%232F3741&style=for-the-badge)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white&style=for-the-badge)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)](http://commitizen.github.io/cz-cli/)

AstroPaper 是一款极简、响应式、可访问性友好且对 SEO 优化的 Astro 博客主题。本主题基于作者的[个人博客](sslocal://flow/file_open?url=https%3A%2F%2Fsatnaing.dev%2Fblog&flow_extra=eyJsaW5rX3R5cGUiOiJjb2RlX2ludGVycHJldGVyIn0=)设计与开发。

更多信息可阅读[博客文章](sslocal://flow/file_open?url=https%3A%2F%2Fastro-paper.pages.dev%2Fposts%2F&flow_extra=eyJsaW5rX3R5cGUiOiJjb2RlX2ludGVycHJldGVyIn0=)或查看本文档说明。

## 🔥 功能特性

- [x] 类型安全的 Markdown
- [x] 极致性能加载速度
- [x] 可访问性优化（键盘/旁白）
- [x] 全响应式布局（手机 ~ 桌面）
- [x] SEO 友好优化
- [x] 明/暗双模式
- [x] 模糊搜索
- [x] 草稿文章与分页
- [x] 站点地图与 RSS 订阅
- [x] 遵循最佳开发实践
- [x] 高度可自定义
- [x] 博客文章动态 OG 封面图生成 [#15](sslocal://flow/file_open?url=https%3A%2F%2Fgithub.com%2Fsatnaing%2Fastro-paper%2Fpull%2F15&flow_extra=eyJsaW5rX3R5cGUiOiJjb2RlX2ludGVycHJldGVyIn0=) ([博客文章](sslocal://flow/file_open?url=https%3A%2F%2Fastro-paper.pages.dev%2Fposts%2Fdynamic-og-image-generation-in-astropaper-blog-posts%2F&flow_extra=eyJsaW5rX3R5cGUiOiJjb2RlX2ludGVycHJldGVyIn0=))

注意：作者已在 Mac 上的 **VoiceOver** 和 Android 上的 **TalkBack** 中测试过主题的屏幕阅读器兼容性。其他屏幕阅读器理论上也能正常使用，但未逐一测试。

## ✅ Lighthouse 评分

<p align="center">
  <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fastro-paper.pages.dev%2F&form_factor=desktop">
    <img width="710" alt="AstroPaper Lighthouse Score" src="AstroPaper-lighthouse-score.svg">
  </a>
</p>

## 🚀 项目结构

AstroPaper 内部主要目录与文件如下：

```bash
/
├── public/              # 静态资源
│   ├── pagefind/        # 搜索索引（构建时自动生成）
│   ├── favicon.svg
│   └── astropaper-og.jpg
├── src/
│   ├── assets/          # 图片、图标等资源
│   │   ├── icons/
│   │   └── images/
│   ├── components/      # 组件
│   ├── data/
│   │   └── blog/        # 博客文章存放目录
│   │       └── 文章.md
│   ├── layouts/         # 布局文件
│   ├── pages/           # 页面路由
│   ├── scripts/         # 脚本
│   ├── styles/          # 样式
│   ├── utils/           # 工具函数
│   ├── config.ts        # 主题配置
│   ├── constants.ts
│   ├── content.config.ts
│   ├── env.d.ts
│   └── remark-collapse.d.ts
└── astro.config.ts      # Astro 配置
Astro 会自动读取 src/pages/ 下的 .astro / .md 文件并生成路由。静态资源（图片等）可直接放在 public/ 目录。所有博客文章均存放于 src/data/blog。
📖 文档说明
文档支持 Markdown 和博客文章两种阅读方式：
主题配置 - 
 | 
添加文章 - 
 | 
自定义配色方案 - 
 | 
预设配色方案 - 
 | 
💻 技术栈
主框架 - 
类型检查 - 
样式 - 
UI/UX - 
静态搜索 - 
图标 - 
代码格式化 - 
部署 - 
关于页插图 - 
代码检查 - 
👨🏻‍💻 本地运行
在本地目录执行以下命令即可快速创建项目：
bash
# pnpm
pnpm create astro@latest --template satnaing/astro-paper

# npm
npm create astro@latest -- --template satnaing/astro-paper

# yarn
yarn create astro --template satnaing/astro-paper

# bun
bun create astro@latest -- --template satnaing/astro-paper
