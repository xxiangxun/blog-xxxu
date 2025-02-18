---
author: xxxu
pubDatetime: 2023-06-25T15:20:35Z
modDatetime: 2023-06-25T15:20:35Z
title: 觅思文档docker安装
slug: 觅思文档docker安装-blog
featured: false
draft: false
tags:
  - 软件
  - 工具
description:
  觅思文档docker安装
---
### 简介

MrDoc 是基于Python开发的在线文档系统。

MrDoc 适合作为个人和中小型团队的私有云文档、云笔记和知识管理工具，致力于成为优秀的私有化在线文档部署方案。

你可以简单粗暴地将 MrDoc 视为「可私有部署的语雀」和「可在线编辑文档的GitBook」。

[![image](https://camo.githubusercontent.com/54418743a345790ac617f21eafcbe63356a35f17ec260ae99656737d4cada0be/68747470733a2f2f696d6167652e61736466696e7374616c6c2e746f702f66696c652f3633363235333963663732363834653832343739632e706e67)](https://camo.githubusercontent.com/54418743a345790ac617f21eafcbe63356a35f17ec260ae99656737d4cada0be/68747470733a2f2f696d6167652e61736466696e7374616c6c2e746f702f66696c652f3633363235333963663732363834653832343739632e706e67)

#### 适用场景

个人云笔记、在线产品手册、团队内部知识库、在线电子教程等私有化部署场景。

#### 功能特性

⚙站点管理
用户管理 图片管理 附件管理 文档管理 文集管理 注册邀请码配置 登录验证码配置 全站禁止注册配置 全站强制登录配置 广告代码配置 统计代码配置 站点信息配置 备案号配置 附件配置 🧑个人管理

文集管理 文档管理：新建、删除、回收站、历史版本 文档模板管理：新建、删除 图片管理：上传、分组、删除 附件管理：上传、删除 Token管理：借助Token API 接口高效新建和获取文档； 个人信息管理：修改昵称、修改电子邮箱、切换文档编辑器； 📚文集控制

文集图标配置 文字水印配置 文集权限配置：公开、私密、指定用户可见、访问码可见 下载配置：PDF、EPUB文件生成和下载 文集协作成员配置 文集文档拖拽排序 文集导出 文集转让 ✍文档书写

文本文档、表格文档两种文档类型，Markdown 、富文本两种编辑模式，Editor.md、Vditor、iceEditor三种编辑器加持，自由选择、自由切换； 图片、附件、科学公式、音视频、思维导图、流程图、Echart图表； 文档排序、文档上级设置、文档模板插入； 文档标签设置； 📖文档阅读

两栏式布局，三级目录层级显示，左侧文集大纲，右侧文档正文； 文档阅读字体缩放、字体类型切换、日间夜间模式切换、页面社交分享、移动端阅读优化； 文档 Markdown 文件下载； 标签关系网络图； 文档全文搜索； 文档分享码分享； 文档收藏； 其他特性

搜索引擎收录支持； sitemap站点地图； 无限用户限制； 无限空间限制；

### docker运行教程

##### 一、拉取 MrDoc 代码

```
cd /opt # 进入任意目录
```

#### 开源版：

```
git clone https://gitee.com/zmister/MrDoc.git
```

#### 专业版：

```
git clone https://{用户名}:{密码}@git.mrdoc.pro/MrDoc/MrDocPro.git
```

##### 二、拉取 Docker 镜像

```
docker pull zmister/mrdoc:v4
```

##### 三、运行 Docker 容器

#### 开源版：

```
docker run -d --name mrdoc -p 10086:10086 -v /opt/MrDoc:/app/MrDoc zmister/mrdoc:v4
```

#### 专业版：

```
docker run -d --name mrdoc -p 10086:10086 -v /opt/MrDocPro:/app/MrDoc zmister/mrdoc:v4
```

##### 四、创建管理员账户

```
docker exec -it mrdoc python manage.py createsuperuser
```

---

来源：[https://hub.docker.com/r/zmister/mrdoc](https://hub.docker.com/r/zmister/mrdoc)
