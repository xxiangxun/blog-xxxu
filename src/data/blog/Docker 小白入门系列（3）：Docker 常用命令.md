---
author: xxxu
pubDatetime: 2025-04-05T19:00:00Z
modDatetime: 2025-04-05T21:00:00Z
title: Docker 小白入门系列（3）：Docker 常用命令
slug: docker-common-commands
featured: false
draft: false
tags:
  - Docker
  - 入门教程
  - 常用命令
  - 容器操作
  - 镜像操作
description: Docker小白必备的常用命令教程，全覆盖镜像、容器核心操作，附命令速查表和Nginx实操练习，新手跟着敲一遍就能上手！
---
## 前言

在上一篇文章中，我们学习了如何安装 Docker。现在，让我们来学习 Docker 的常用命令，这是使用 Docker 的基础。

## 镜像相关命令

### 1. 查看本地镜像

```bash
docker images
```

这个命令会显示本地所有的 Docker 镜像，包括镜像名称、标签、镜像 ID、创建时间和大小。

### 2. 拉取镜像

```bash
docker pull [镜像名称]:[标签]
```

例如，拉取最新版本的 Ubuntu 镜像：

```bash
docker pull ubuntu:latest
```

### 3. 删除镜像

```bash
docker rmi [镜像 ID 或镜像名称:标签]
```

例如，删除 Ubuntu 镜像：

```bash
docker rmi ubuntu:latest
```

## 容器相关命令

### 1. 运行容器

```bash
docker run [选项] [镜像名称] [命令]
```

常用选项：
- `-d`：后台运行容器
- `-p`：端口映射，格式为 `主机端口:容器端口`
- `-v`：挂载卷，格式为 `主机路径:容器路径`
- `--name`：为容器指定名称

例如，运行一个 Ubuntu 容器并在后台运行：

```bash
docker run -d --name my-ubuntu ubuntu:latest
```

### 2. 查看容器

```bash
docker ps [选项]
```

常用选项：
- `-a`：查看所有容器（包括已停止的）
- `-q`：只显示容器 ID

### 3. 停止容器

```bash
docker stop [容器 ID 或容器名称]
```

### 4. 启动容器

```bash
docker start [容器 ID 或容器名称]
```

### 5. 重启容器

```bash
docker restart [容器 ID 或容器名称]
```

### 6. 删除容器

```bash
docker rm [容器 ID 或容器名称]
```

如果容器正在运行，需要先停止容器再删除，或者使用 `-f` 选项强制删除：

```bash
docker rm -f [容器 ID 或容器名称]
```

### 7. 进入容器

```bash
docker exec -it [容器 ID 或容器名称] [命令]
```

例如，进入 Ubuntu 容器并启动 bash：

```bash
docker exec -it my-ubuntu bash
```

### 8. 查看容器日志

```bash
docker logs [容器 ID 或容器名称]
```

常用选项：
- `-f`：实时查看日志
- `-n`：查看最近 n 条日志

## 其他常用命令

### 1. 查看 Docker 信息

```bash
docker info
```

### 2. 查看 Docker 版本

```bash
docker --version
```

### 3. 搜索镜像

```bash
docker search [镜像名称]
```

### 4. 构建镜像

```bash
docker build -t [镜像名称]:[标签] [构建上下文路径]
```

## 命令速查表

| 命令 | 功能 |
|------|------|
| `docker images` | 查看本地镜像 |
| `docker pull` | 拉取镜像 |
| `docker rmi` | 删除镜像 |
| `docker run` | 运行容器 |
| `docker ps` | 查看容器 |
| `docker stop` | 停止容器 |
| `docker start` | 启动容器 |
| `docker restart` | 重启容器 |
| `docker rm` | 删除容器 |
| `docker exec` | 进入容器 |
| `docker logs` | 查看容器日志 |
| `docker info` | 查看 Docker 信息 |
| `docker search` | 搜索镜像 |
| `docker build` | 构建镜像 |

## 实践练习

让我们通过一个简单的例子来练习使用这些命令：

1. 拉取 Nginx 镜像：
   ```bash
   docker pull nginx:latest
   ```

2. 运行 Nginx 容器，将主机的 8080 端口映射到容器的 80 端口：
   ```bash
   docker run -d -p 8080:80 --name my-nginx nginx:latest
   ```

3. 查看容器运行状态：
   ```bash
   docker ps
   ```

4. 访问 `http://localhost:8080`，你应该能看到 Nginx 的欢迎页面

5. 进入容器，查看 Nginx 配置：
   ```bash
   docker exec -it my-nginx bash
   cat /etc/nginx/nginx.conf
   exit
   ```

6. 停止并删除容器：
   ```bash
   docker stop my-nginx
   docker rm my-nginx
   ```

## 总结

Docker 的常用命令并不多，掌握这些命令后，你就可以基本使用 Docker 了。在实际使用中，你可能会遇到更多的命令和选项，但这些基本命令已经足够你开始使用 Docker 了。

在下一篇文章中，我们将学习如何使用 Docker Compose 来管理多容器应用，让我们继续深入学习 Docker 吧！
