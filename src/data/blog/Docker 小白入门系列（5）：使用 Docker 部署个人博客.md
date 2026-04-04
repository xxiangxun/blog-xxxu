---
author: xxxu
pubDatetime: 2025-04-09T19:00:00Z
modDatetime: 2025-04-09T21:00:00Z
title: Docker 小白入门系列（5）：使用 Docker 部署个人博客
slug: docker-deploy-personal-blog
featured: false
draft: false
tags:
  - Docker
  - 实战部署
  - WordPress
  - Docker Compose
  - 个人博客
description: 小白友好的Docker实战教程，手把手教你用Docker/Docker Compose部署WordPress个人博客，附配置、自定义、数据备份全流程，看完就能搭自己的博客！
---

## 前言

在上一篇文章中，我们学习了 Docker Compose 的基本使用。现在，让我们来学习如何使用 Docker 部署个人博客，这是 Docker 的一个非常实用的应用场景。

## 选择博客系统

在部署博客之前，我们需要选择一个适合的博客系统。常见的博客系统有：

- **WordPress**：功能强大，插件丰富，适合大多数用户
- **Hexo**：静态博客生成器，速度快，适合技术博主
- **Jekyll**：静态博客生成器，GitHub Pages 官方支持
- **Typecho**：轻量级博客系统，适合个人使用

在本文中，我们将使用 WordPress 作为示例，因为它功能强大且易于使用。

## 部署 WordPress 博客

### 方法一：使用 Docker 命令部署

1. 拉取 WordPress 和 MySQL 镜像：
   ```bash
   docker pull wordpress:latest
   docker pull mysql:5.7
   ```

2. 创建网络：
   ```bash
   docker network create wordpress-network
   ```

3. 运行 MySQL 容器：
   ```bash
   docker run -d \
     --name wordpress-db \
     --network wordpress-network \
     -e MYSQL_ROOT_PASSWORD=your-root-password \
     -e MYSQL_DATABASE=wordpress \
     -e MYSQL_USER=wordpress \
     -e MYSQL_PASSWORD=your-wordpress-password \
     mysql:5.7
   ```

4. 运行 WordPress 容器：
   ```bash
   docker run -d \
     --name wordpress \
     --network wordpress-network \
     -p 8080:80 \
     -e WORDPRESS_DB_HOST=wordpress-db:3306 \
     -e WORDPRESS_DB_USER=wordpress \
     -e WORDPRESS_DB_PASSWORD=your-wordpress-password \
     -e WORDPRESS_DB_NAME=wordpress \
     wordpress:latest
   ```

### 方法二：使用 Docker Compose 部署

1. 创建 `docker-compose.yml` 文件：
   ```yaml
   version: '3'
   services:
     db:
       image: mysql:5.7
       volumes:
         - db_data:/var/lib/mysql
       restart: always
       environment:
         MYSQL_ROOT_PASSWORD: your-root-password
         MYSQL_DATABASE: wordpress
         MYSQL_USER: wordpress
         MYSQL_PASSWORD: your-wordpress-password

     wordpress:
       depends_on:
         - db
       image: wordpress:latest
       ports:
         - "8080:80"
       restart: always
       environment:
         WORDPRESS_DB_HOST: db:3306
         WORDPRESS_DB_USER: wordpress
         WORDPRESS_DB_PASSWORD: your-wordpress-password
         WORDPRESS_DB_NAME: wordpress
   volumes:
     db_data:
   ```

2. 启动应用：
   ```bash
   docker-compose up -d
   ```

## 配置 WordPress

1. 访问 `http://localhost:8080`，你会看到 WordPress 的安装向导
2. 选择语言，然后点击「继续」
3. 填写站点标题、用户名、密码和邮箱，然后点击「安装 WordPress」
4. 安装完成后，点击「登录」，使用你设置的用户名和密码登录

## 自定义博客

### 1. 选择主题

1. 登录 WordPress 后台
2. 点击「外观」→「主题」
3. 浏览并选择你喜欢的主题，点击「安装」→「启用」

### 2. 安装插件

1. 点击「插件」→「添加新」
2. 搜索你需要的插件，例如：
   - **Akismet Anti-Spam**：防止垃圾评论
   - **Yoast SEO**：SEO 优化
   - **Jetpack**：提供各种功能
3. 点击「安装」→「启用」

### 3. 创建文章

1. 点击「文章」→「添加新」
2. 填写标题和内容
3. 点击「发布」

## 数据备份

为了保护你的博客数据，定期备份是非常重要的。

### 1. 备份数据库

```bash
docker exec wordpress-db mysqldump -u wordpress -p your-wordpress-password wordpress > wordpress-backup.sql
```

### 2. 备份 WordPress 文件

```bash
docker cp wordpress:/var/www/html/wp-content ./wp-content-backup
```

## 常见问题解决

### 1. 端口冲突

如果 8080 端口已经被占用，可以修改 `docker-compose.yml` 文件中的端口映射，使用不同的端口。

### 2. 访问速度慢

可以考虑使用 CDN 加速，例如 Cloudflare 或腾讯云 CDN。

### 3. 安全问题

- 定期更新 WordPress、主题和插件
- 使用强密码
- 安装安全插件，如 Wordfence

## 总结

使用 Docker 部署个人博客非常简单，只需要几个命令就可以完成。Docker 不仅可以简化部署流程，还可以确保环境的一致性，避免因环境差异导致的问题。

在下一篇文章中，我们将学习如何使用 Docker 部署 NAS 神器 Nextcloud，让我们继续深入学习 Docker 吧！
