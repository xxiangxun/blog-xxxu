---
author: xxxu
pubDatetime: 2025-04-07T19:00:00Z
modDatetime: 2025-04-07T21:00:00Z
title: Docker 小白入门系列（4）：Docker Compose 入门
slug: docker-compose-basic-introduction
featured: false
draft: false
tags:
  - Docker
  - Docker Compose
  - 容器编排
  - 多容器管理
  - 入门教程
description: 小白友好的Docker Compose入门教程，从安装到实操全覆盖，手把手教你用YAML文件管理多容器应用，附Nginx+MySQL实战案例，看完就能上手！
---
## 前言

在上一篇文章中，我们学习了 Docker 的常用命令。现在，让我们来学习 Docker Compose，这是一个用于定义和运行多容器 Docker 应用程序的工具。

## 什么是 Docker Compose？

Docker Compose 是 Docker 官方提供的一个工具，它允许你使用 YAML 文件来定义多容器应用的配置，然后通过一个命令来启动、停止和管理整个应用。

简单来说，如果你需要运行多个容器（比如一个 Web 应用、一个数据库和一个缓存），你可以使用 Docker Compose 来管理它们，而不需要手动一个一个地创建和管理容器。

## 安装 Docker Compose

如果你已经安装了 Docker Desktop，那么 Docker Compose 已经包含在其中了。如果你使用的是 Linux 系统，你需要单独安装 Docker Compose。

### Linux 系统安装 Docker Compose

1. 下载 Docker Compose 二进制文件：
   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   ```

2. 给二进制文件添加执行权限：
   ```bash
   sudo chmod +x /usr/local/bin/docker-compose
   ```

3. 验证安装是否成功：
   ```bash
   docker-compose --version
   ```

## Docker Compose 基本使用

### 1. 创建 docker-compose.yml 文件

在你的项目目录中创建一个 `docker-compose.yml` 文件，这个文件定义了你的应用的服务、网络和卷等配置。

例如，一个简单的 Web 应用和数据库的配置：

```yaml
version: '3'
services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
    depends_on:
      - db
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: example
      MYSQL_DATABASE: mydb
    volumes:
      - db-data:/var/lib/mysql
volumes:
  db-data:
```

### 2. 启动应用

在包含 `docker-compose.yml` 文件的目录中运行：

```bash
docker-compose up [选项]
```

常用选项：
- `-d`：后台运行
- `--build`：构建镜像

### 3. 停止应用

```bash
docker-compose down [选项]
```

常用选项：
- `-v`：删除卷

### 4. 查看应用状态

```bash
docker-compose ps
```

### 5. 查看应用日志

```bash
docker-compose logs [选项] [服务名称]
```

常用选项：
- `-f`：实时查看日志

## Docker Compose 配置详解

### 服务配置

服务是 Docker Compose 中最基本的概念，每个服务对应一个容器。

```yaml
services:
  服务名称:
    image: 镜像名称:标签  # 使用的镜像
    build: 构建上下文路径  # 构建镜像的路径
    ports:  # 端口映射
      - "主机端口:容器端口"
    volumes:  # 卷挂载
      - 主机路径:容器路径
    environment:  # 环境变量
      - 变量名=值
    depends_on:  # 依赖关系
      - 依赖的服务名称
    restart: 重启策略  # always, on-failure, unless-stopped, no
```

### 网络配置

```yaml
networks:
  网络名称:
    driver: 网络驱动  # bridge, overlay, host, none
    ipam:
      config:
        - subnet: 子网
```

### 卷配置

```yaml
volumes:
  卷名称:
    driver: 卷驱动  # local, nfs, etc.
```

## 实践练习

让我们通过一个实际的例子来学习 Docker Compose：

1. 创建一个项目目录：
   ```bash
   mkdir my-docker-app
   cd my-docker-app
   ```

2. 创建 `docker-compose.yml` 文件：
   ```yaml
   version: '3'
   services:
     web:
       image: nginx:latest
       ports:
         - "8080:80"
       volumes:
         - ./html:/usr/share/nginx/html
     db:
       image: mysql:5.7
       environment:
         MYSQL_ROOT_PASSWORD: example
         MYSQL_DATABASE: mydb
       volumes:
         - db-data:/var/lib/mysql
   volumes:
     db-data:
   ```

3. 创建 `html` 目录并添加一个 `index.html` 文件：
   ```bash
   mkdir html
   echo "<h1>Hello Docker Compose!</h1>" > html/index.html
   ```

4. 启动应用：
   ```bash
   docker-compose up -d
   ```

5. 访问 `http://localhost:8080`，你应该能看到 "Hello Docker Compose!" 的页面

6. 查看容器状态：
   ```bash
   docker-compose ps
   ```

7. 停止应用：
   ```bash
   docker-compose down
   ```

## 常见问题解决

### 1. 端口冲突

如果遇到端口冲突，可以修改 `docker-compose.yml` 文件中的端口映射，使用不同的主机端口。

### 2. 依赖问题

如果服务启动顺序有问题，可以使用 `depends_on` 来指定依赖关系，但需要注意的是，`depends_on` 只保证服务的启动顺序，不保证服务的就绪状态。

### 3. 环境变量

如果需要传递大量环境变量，可以使用 `.env` 文件来管理，Docker Compose 会自动加载项目目录中的 `.env` 文件。

## 总结

Docker Compose 是一个非常实用的工具，它可以帮助你更轻松地管理多容器应用。通过一个简单的 YAML 文件，你可以定义整个应用的配置，然后通过一个命令来启动和停止整个应用。

在下一篇文章中，我们将学习如何使用 Docker 部署个人博客，让我们继续深入学习 Docker 吧！
