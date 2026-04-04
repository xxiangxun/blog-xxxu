---
author: xxxu
pubDatetime: 2025-04-12T19:00:00Z
modDatetime: 2025-04-12T21:00:00Z
title: Docker 小白入门系列（8）：使用 Docker 部署 RSS 阅读器 Miniflux
slug: docker-deploy-rss-miniflux
featured: false
draft: false
tags:
  - Docker
  - 实战部署
  - Miniflux
  - RSS阅读器
  - 信息管理
description: 小白友好的Docker实战教程，手把手教你用Docker/Docker Compose部署Miniflux轻量级RSS阅读器，附配置、订阅、高级功能全流程，轻松告别信息过载！
---

## 前言

在上一篇文章中，我们学习了如何使用 Docker 部署导航站。现在，让我们来学习如何使用 Docker 部署 RSS 阅读器 Miniflux，告别信息过载。

## 什么是 RSS？

RSS（Really Simple Syndication）是一种用于发布经常更新的内容的格式，例如博客文章、新闻和播客。使用 RSS 阅读器，你可以订阅你感兴趣的网站，然后在一个地方查看所有更新，而不需要逐个访问网站。

## 什么是 Miniflux？

Miniflux 是一个开源的、轻量级的 RSS 阅读器，它具有以下特点：
- 简单直观的界面
- 支持多个用户
- 支持全文搜索
- 支持标签和分类
- 支持导入/导出 OPML 文件
- 支持通知

## 部署 Miniflux

### 方法一：使用 Docker 命令部署

1. 拉取 Miniflux 镜像：
   ```bash
   docker pull miniflux/miniflux:latest
   ```

2. 运行 Miniflux 容器（使用 SQLite 数据库）：
   ```bash
   docker run -d \
     --name miniflux \
     -p 8080:8080 \
     -v miniflux-data:/var/lib/miniflux \
     -e DATABASE_URL="sqlite3:///var/lib/miniflux/miniflux.db" \
     -e RUN_MIGRATIONS=1 \
     -e CREATE_ADMIN=1 \
     -e ADMIN_USERNAME=admin \
     -e ADMIN_PASSWORD=your-password \
     miniflux/miniflux:latest
   ```

### 方法二：使用 Docker Compose 部署（使用 PostgreSQL 数据库）

1. 创建 `docker-compose.yml` 文件：
   ```yaml
   version: '3'
   services:
     db:
       image: postgres:14
       volumes:
         - db_data:/var/lib/postgresql/data
       environment:
         POSTGRES_USER: miniflux
         POSTGRES_PASSWORD: miniflux
         POSTGRES_DB: miniflux

     app:
       image: miniflux/miniflux:latest
       ports:
         - "8080:8080"
       depends_on:
         - db
       environment:
         DATABASE_URL: postgres://miniflux:miniflux@db/miniflux
         RUN_MIGRATIONS: 1
         CREATE_ADMIN: 1
         ADMIN_USERNAME: admin
         ADMIN_PASSWORD: your-password
   volumes:
     db_data:
   ```

2. 启动应用：
   ```bash
   docker-compose up -d
   ```

## 配置 Miniflux

1. 访问 `http://localhost:8080`，使用默认的用户名 `admin` 和密码 `your-password` 登录
2. 点击右上角的用户头像，选择「Settings」
3. 在「Profile」标签页中，修改你的密码和个人信息
4. 在「Preferences」标签页中，设置你的语言、时区和其他偏好

## 使用 Miniflux

### 1. 添加订阅源

1. 点击左侧菜单栏的「Feeds」
2. 点击「Add Feed」按钮
3. 输入 RSS 源的 URL，例如 `https://example.com/feed`
4. 选择一个分类（如果需要）
5. 点击「Save」按钮

### 2. 管理订阅源

1. 在「Feeds」页面，你可以看到所有已添加的订阅源
2. 点击订阅源旁边的「Edit」按钮，修改订阅源的信息
3. 点击「Delete」按钮，删除订阅源
4. 点击「Refresh」按钮，手动刷新订阅源

### 3. 阅读文章

1. 点击左侧菜单栏的「Entries」
2. 你可以看到所有订阅源的最新文章
3. 点击文章标题，查看完整内容
4. 点击「Mark as read」按钮，将文章标记为已读
5. 点击「Save」按钮，将文章保存为书签

### 4. 使用标签

1. 在阅读文章时，点击文章下方的「Add tag」按钮
2. 输入标签名称，点击「Save」
3. 在左侧菜单栏的「Tags」中，你可以看到所有标签及其对应的文章

## 高级功能

### 1. 导入/导出 OPML

- **导出 OPML**：点击左侧菜单栏的「Settings」→「Export」，下载 OPML 文件
- **导入 OPML**：点击左侧菜单栏的「Settings」→「Import」，上传 OPML 文件

### 2. 配置通知

Miniflux 支持多种通知方式，如电子邮件、Webhook、Matrix 等。你可以在「Settings」→「Integrations」中配置。

### 3. 使用 API

Miniflux 提供了 RESTful API，你可以使用 API 来管理订阅源和文章。API 文档可以在 `http://localhost:8080/docs` 查看。

## 实践练习

让我们通过一个实际的例子来学习如何使用 Miniflux：

1. 部署 Miniflux RSS 阅读器
2. 添加以下订阅源：
   - 技术博客：如 Medium、DEV
   - 新闻网站：如 BBC News、CNN
   - 科技网站：如 TechCrunch、Wired
3. 创建相应的分类
4. 阅读几篇文章，标记为已读
5. 添加标签到文章
6. 导出 OPML 文件，备份你的订阅源

## 常见问题解决

### 1. 订阅源无法添加

检查 RSS 源的 URL 是否正确，确保网站提供了 RSS 订阅。

### 2. 文章不更新

检查 Miniflux 的刷新设置，确保自动刷新功能正常工作。

### 3. 页面加载缓慢

检查服务器资源使用情况，确保服务器有足够的内存和 CPU。

## 总结

使用 Docker 部署 Miniflux 非常简单，只需要几个命令就可以完成。Miniflux 是一个轻量级的 RSS 阅读器，它可以帮助你更高效地获取信息，告别信息过载。

在下一篇文章中，我们将学习如何使用 Docker 部署 AI 聊天机器人，本地部署大模型，让我们继续深入学习 Docker 吧！
