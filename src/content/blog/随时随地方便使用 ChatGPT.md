---
author: xxxu
pubDatetime: 2023-08-25T15:20:35Z
modDatetime: 2023-08-25T15:20:35Z
title: 随时随地方便使用 ChatGPT
slug:  随时随地方便使用 ChatGPT-blog
featured: false
draft: false
tags:
  - 软件
  - 工具
description:
  随时随地方便使用 ChatGPT
---
私人 ChatGPT 网页应用 ——ChatGPT Next Web，让你随时随地方便使用 ChatGPT！

[![](https://camo.githubusercontent.com/0a3f8ee164d67006a48ac65f791f6ead7b41e12dac57c4ac4ef56fc3eae3a6ad/68747470733a2f2f696d6167652e61736466696e7374616c6c2e746f702f66696c652f3337333731663064333763303762666164663139662e706e67)](https://camo.githubusercontent.com/0a3f8ee164d67006a48ac65f791f6ead7b41e12dac57c4ac4ef56fc3eae3a6ad/68747470733a2f2f696d6167652e61736466696e7374616c6c2e746f702f66696c652f3337333731663064333763303762666164663139662e706e67)

## 主要功能

* 在 1 分钟内使用 Vercel **免费一键部署**
* 精心设计的 UI，响应式设计，支持深色模式
* 极快的首屏加载速度（~100kb）
* 海量的内置 prompt 列表，来自[中文]和[英文]
* 自动压缩上下文聊天记录，在节省 Token 的同时支持超长对话
* 一键导出聊天记录，完整的 Markdown 支持
* 拥有自己的域名？好上加好，绑定后即可在任何地方**无障碍**快速访问些大神们的博客（在我的友情链接里有），貌似都是用hexo写得，我也依葫芦画瓢的搭建了一个。不罗嗦了，直接上搭建步骤。

## 开始使用

### 创建安装目录

```
sudo -i

mkdir -p /root/data/docker_data/chatgpt-web

cd /root/data/docker_data/chatgpt-web
```

### 直接用 docker 的方式安装

```
vim docker-compose.ymlnext-web
```

#### 英文输入法下，按 `i`

```
version: '3.3'
services:
    chatgpt-next-web:
        ports:
            - '8090:3000'
        environment:
            - OPENAI_API_KEY=sk-xxxx    # 填写你的API KEY
            - CODE=your-password    # 填一个密码，不然你的额度很快就会被刷完
        image: yidadaa/chatgpt-next-web
```

修改好之后，注意切换成英文输入法，然后按一下 `esc`，然后 `:wq` 保存退出。

### 安装

#### 查看端口是否被占用（以 `8090` 为例），输入：

```
lsof -i:8090  #查看 8090 端口是否被占用，如果被占用，重新自定义一个端口
```

#### 如果啥也没出现，表示端口未被占用，我们可以继续下面的操作了

#### 如果出现：

```
-bash: lsof: command not found
```

#### 运行：

```
apt install lsof  #安装 lsof
```

#### 如果端口没有被占用（被占用了就修改一下端口，比如改成 `8081`，注意 docker 命令行里和防火墙都要改）

### 最后

```
cd /root/data/docker_data/chatgpt-web    # 来到 dockercompose 文件所在的文件夹下

docker-compose up -d
```

#### 理论上我们就可以输入 `http://ip:8090` 访问安装了。

---

文章作者: 咕咕鸽

文章链接:[https://blog.laoda.de/archives/docker-compose-install-chatgpt-next-web/](https://blog.laoda.de/archives/docker-compose-install-chatgpt-next-web/)
