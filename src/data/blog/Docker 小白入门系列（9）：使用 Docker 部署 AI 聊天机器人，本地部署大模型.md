---
author: xxxu
pubDatetime: 2025-04-13T19:00:00Z
modDatetime: 2025-04-13T21:00:00Z
title: Docker 小白入门系列（9）：使用 Docker 部署 AI 聊天机器人，本地部署大模型
slug: docker-deploy-ai-chatbot-local-llm
featured: false
draft: false
tags:
  - Docker
  - 实战部署
  - Ollama
  - AI聊天机器人
  - 本地大模型
description: 小白友好的Docker实战教程，手把手教你用Docker/Docker Compose部署Ollama本地大模型，附模型下载、聊天使用、自定义模型和性能优化全流程，轻松搭建私人AI聊天机器人！
---
## 前言

在上一篇文章中，我们学习了如何使用 Docker 部署 RSS 阅读器 Miniflux。现在，让我们来学习如何使用 Docker 部署 AI 聊天机器人，本地部署大模型，这是一个非常前沿和实用的应用场景。

## 什么是本地大模型？

本地大模型是指在本地服务器或个人电脑上运行的大型语言模型（LLM），而不是使用云端服务。使用本地大模型的好处是：
- 数据隐私：你的对话内容不会被发送到云端
- 离线使用：不需要网络连接也能使用
- 自定义：可以根据自己的需求进行微调
- 免费：不需要支付云端服务费用

## 选择 AI 聊天机器人软件

常见的本地 AI 聊天机器人软件有：

- **Ollama**：轻量级的本地大模型运行工具
- **LM Studio**：图形化的本地大模型运行工具
- **llama.cpp**：高效的大模型推理库
- **GPT4All**：专注于隐私的本地大模型平台

在本文中，我们将使用 Ollama 作为示例，因为它简单易用，支持多种大模型。

## 部署 Ollama

### 方法一：使用 Docker 命令部署

1. 拉取 Ollama 镜像：
   ```bash
   docker pull ollama/ollama:latest
   ```

2. 运行 Ollama 容器：
   ```bash
   docker run -d \
     --name ollama \
     -p 11434:11434 \
     -v ollama-data:/root/.ollama \
     --restart unless-stopped \
     ollama/ollama:latest
   ```

### 方法二：使用 Docker Compose 部署

1. 创建 `docker-compose.yml` 文件：
   ```yaml
   version: '3'
   services:
     ollama:
       image: ollama/ollama:latest
       ports:
         - "11434:11434"
       volumes:
         - ollama_data:/root/.ollama
       restart: unless-stopped
   volumes:
     ollama_data:
   ```

2. 启动应用：
   ```bash
   docker-compose up -d
   ```

## 下载大模型

1. 进入 Ollama 容器：
   ```bash
   docker exec -it ollama bash
   ```

2. 下载大模型，例如 Llama 3：
   ```bash
   ollama pull llama3
   ```

3. 查看已下载的模型：
   ```bash
   ollama list
   ```

## 使用 AI 聊天机器人

### 1. 通过命令行使用

1. 进入 Ollama 容器：
   ```bash
   docker exec -it ollama bash
   ```

2. 启动聊天：
   ```bash
   ollama run llama3
   ```

3. 输入你的问题，例如：
   ```
   Hello, how are you?
   ```

4. 模型会生成回答，你可以继续与模型对话

5. 输入 `/exit` 退出聊天

### 2. 通过 API 使用

Ollama 提供了 RESTful API，你可以通过 API 与模型进行交互：

1. 发送请求：
   ```bash
   curl http://localhost:11434/api/generate -d '{"model": "llama3", "prompt": "Hello, how are you?"}'
   ```

2. 你会收到模型的回答

### 3. 通过 Web 界面使用

你可以使用第三方 Web 界面，如 Open WebUI，来与 Ollama 进行交互：

1. 部署 Open WebUI：
   ```bash
   docker run -d \
     --name open-webui \
     -p 3000:8080 \
     -e OLLAMA_BASE_URL=http://ollama:11434 \
     --network ollama-network \
     --restart unless-stopped \
     ghcr.io/open-webui/open-webui:latest
   ```

2. 访问 `http://localhost:3000`，你会看到 Open WebUI 的界面
3. 选择模型（如 llama3），然后开始与模型对话

## 自定义模型

### 1. 创建模型文件

创建一个 `Modelfile` 文件，例如：

```
FROM llama3

SYSTEM "你是一个友好的助手，总是用中文回答问题。"
```

### 2. 构建模型

```bash
docker exec -it ollama bash
ollama create my-model -f Modelfile
```

### 3. 使用自定义模型

```bash
ollama run my-model
```

## 性能优化

### 1. 选择合适的模型

不同的模型有不同的大小和性能要求：
- **小模型**（如 Gemma 2B）：适合资源有限的设备
- **中模型**（如 Llama 3 8B）：适合一般性能的服务器
- **大模型**（如 Llama 3 70B）：适合高性能服务器

### 2. 调整内存分配

确保服务器有足够的内存来运行模型，一般来说：
- 8B 模型需要至少 16GB 内存
- 70B 模型需要至少 64GB 内存

### 3. 使用 GPU 加速

如果你的服务器有 GPU，可以启用 GPU 加速：

```bash
docker run -d \
  --name ollama \
  -p 11434:11434 \
  -v ollama-data:/root/.ollama \
  --gpus all \
  --restart unless-stopped \
  ollama/ollama:latest
```

## 常见问题解决

### 1. 模型下载失败

检查网络连接，确保可以访问 Ollama 的模型仓库。

### 2. 模型运行缓慢

- 选择更小的模型
- 确保服务器有足够的资源
- 启用 GPU 加速

### 3. API 访问失败

检查 Ollama 服务是否正常运行，确保端口 11434 已开放。

## 实践练习

让我们通过一个实际的例子来学习如何使用 Ollama：

1. 部署 Ollama 容器
2. 下载 Llama 3 8B 模型
3. 通过命令行与模型对话
4. 部署 Open WebUI
5. 通过 Web 界面与模型对话
6. 创建一个自定义模型

## 总结

使用 Docker 部署 AI 聊天机器人非常简单，只需要几个命令就可以完成。本地部署大模型可以保护你的隐私，同时提供免费的 AI 服务。

在下一篇文章中，我们将学习 Docker 部署避坑指南，总结新手最容易踩的 10 个坑，让我们继续深入学习 Docker 吧！
