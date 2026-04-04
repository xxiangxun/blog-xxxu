---
author: xxxu
pubDatetime: 2025-04-11T19:00:00Z
modDatetime: 2025-04-11T21:00:00Z
title: Docker 小白入门系列（7）：使用 Docker 部署导航站
slug: docker-deploy-navigation-site-heimdall
featured: false
draft: false
tags:
  - Docker
  - 实战部署
  - Heimdall
  - 导航站
  - 应用仪表板
description: 小白友好的Docker实战教程，手把手教你用Docker/Docker Compose部署Heimdall导航站，附配置、自定义、高级设置全流程，轻松打造专属个人上网主页！
---

## 前言

在上一篇文章中，我们学习了如何使用 Docker 部署 NAS 神器 Nextcloud。现在，让我们来学习如何使用 Docker 部署导航站，打造自己的上网主页。

## 什么是导航站？

导航站是一个集合了各种网站链接的页面，方便你快速访问常用的网站。与浏览器书签不同，导航站可以在任何设备上访问，并且可以自定义分类和样式。

## 选择导航站软件

常见的导航站软件有：

- **Halo**：开源的个人导航站
- **Heimdall**：专门为服务器管理设计的应用仪表板
- **Flame**：轻量级的应用仪表板
- **Homarr**：现代化的应用仪表板

在本文中，我们将使用 Heimdall 作为示例，因为它功能强大且易于使用。

## 部署 Heimdall 导航站

### 方法一：使用 Docker 命令部署

1. 拉取 Heimdall 镜像：
   ```bash
   docker pull linuxserver/heimdall:latest
   ```

2. 运行 Heimdall 容器：
   ```bash
   docker run -d \
     --name heimdall \
     -p 8080:80 \
     -v heimdall-config:/config \
     --restart unless-stopped \
     linuxserver/heimdall:latest
   ```

### 方法二：使用 Docker Compose 部署

1. 创建 `docker-compose.yml` 文件：
   ```yaml
   version: '3'
   services:
     heimdall:
       image: linuxserver/heimdall:latest
       ports:
         - "8080:80"
       volumes:
         - heimdall_config:/config
       restart: unless-stopped
   volumes:
     heimdall_config:
   ```

2. 启动应用：
   ```bash
   docker-compose up -d
   ```

## 配置 Heimdall

1. 访问 `http://localhost:8080`，你会看到 Heimdall 的欢迎页面
2. 点击「Add an application」按钮，添加你的第一个应用
3. 填写应用信息：
   - **Application Name**：应用名称，如「Google」
   - **Application URL**：应用网址，如「https://www.google.com」
   - **Category**：分类，如「Search Engines」
   - **Icon**：选择一个图标
4. 点击「Save」按钮

## 自定义导航站

### 1. 添加更多应用

按照上述步骤，添加更多你常用的应用，如社交媒体、邮件、购物等。

### 2. 创建分类

当你添加应用时，可以创建新的分类，例如：
- **Search Engines**：搜索引擎
- **Social Media**：社交媒体
- **Email**：邮件
- **Shopping**：购物
- **Tools**：工具

### 3. 自定义主题

Heimdall 支持多种主题，你可以在「Settings」→「Theme」中选择你喜欢的主题。

### 4. 设置首页

你可以将 Heimdall 设置为你的浏览器首页，这样每次打开浏览器都会看到你的导航站。

## 高级配置

### 1. 使用 HTTPS

如果你的服务器有公网 IP，建议启用 HTTPS，可以使用 Let's Encrypt 免费证书。

### 2. 添加认证

为了保护你的导航站，你可以在「Settings」→「Authentication」中启用认证，设置用户名和密码。

### 3. 自定义背景

你可以在「Settings」→「Custom CSS」中添加自定义 CSS，修改背景图片和样式。

## 实践练习

让我们通过一个实际的例子来学习如何使用 Heimdall：

1. 部署 Heimdall 导航站
2. 添加以下应用：
   - Google（搜索引擎）
   - GitHub（开发工具）
   - Gmail（邮件）
   - YouTube（视频）
   - Amazon（购物）
3. 创建相应的分类
4. 自定义主题和背景
5. 设置为浏览器首页

## 常见问题解决

### 1. 应用图标不显示

尝试使用不同的图标，或者上传自定义图标。

### 2. 导航站访问速度慢

检查服务器网络连接，或者使用 CDN 加速。

### 3. 应用链接无法打开

检查应用 URL 是否正确，确保网络连接正常。

## 总结

使用 Docker 部署导航站非常简单，只需要几个命令就可以完成。导航站可以帮助你更高效地访问常用网站，提高上网效率。

在下一篇文章中，我们将学习如何使用 Docker 部署 RSS 阅读器 Miniflux，让我们继续深入学习 Docker 吧！
