***

author: xxxu

pubDatetime: 2025-04-02T19:00:00Z

modDatetime: 2025-04-02T21:00:00Z

title: Docker 小白入门系列（2）：手把手教你装 Docker

slug: docker-install-guide-for-win-mac-linux

featured: false

draft: false

tags:

- Docker
- 安装教程
- 环境配置

  description: 小白友好的 Docker 安装指南，Windows/Mac/Linux 三大系统手把手实操，附安装高频坑点解决，装完就能直接用，全程无废话超易懂！

***

大家好，这是 Docker 小白入门系列的第二篇，上一篇咱们大概聊了下 Docker 是啥、为啥小白也得学，这篇直接上手实操 —— 教你在 Windows、Mac、Linux 三大系统装 Docker，全程一步一步来，保证跟着做就能装成功，还会把我当初装的时候踩的坑、新手最容易卡壳的地方，提前把解决方法写出来，少走弯路。

其实装 Docker 真没啥复杂的，不同系统就几步核心操作，几分钟就能搞定，装完咱们就能开始玩 Docker 的各种命令，真正上手用起来了。

## 先看一眼安装前的小要求

装之前先核对下自己的系统版本，别白忙活，Docker 对系统就一点小要求，基本新一点的电脑都能满足：

- Windows：Win10 64 位专业版 / 企业版 / 教育版（1607 及以上），家庭版的话按后面 WSL2 的方法装也能正常用
- Mac：macOS 10.14 及以上就行，近几年的 Mac 都没问题
- Linux：主流发行版都支持，比如 Ubuntu、Debian、CentOS，我这里主要用 Ubuntu 举例，其他系统思路一样，就换个包管理命令

## Windows 系统装 Docker（两种方法，按需选）

Windows 装 Docker 分两种情况，直接装 Docker Desktop 最省事，要是你的系统是 Win10 2004 及以上，用 WSL2 搭配 Docker Desktop 会跑的更轻快，两种方法都给你写清楚，挑自己适合的来。

### 方法一：直接装 Docker Desktop（最省事，新手推荐）

1. 打开 Docker 官网下载安装包，地址放这了：[docker.com/products/docker-desktop](sslocal://flow/file_open?url=https%3A%2F%2Fwww.docker.com%2Fproducts%2Fdocker-desktop\&flow_extra=eyJsaW5rX3R5cGUiOiJjb2RlX2ludGVycHJldGVyIn0=)
2. 下载完双击安装包，一路点「下一步」就好，所有配置默认就行，不用改
3. 安装完成后会提示重启电脑，按提示重启就 OK
4. 重启后找到 Docker Desktop 图标打开，第一次启动会等十几秒，看到电脑右下角系统托盘里出现 Docker 的小图标，就说明启动成功了

### 方法二：WSL2+Docker Desktop（更流畅，Win10 2004 + 适用）

想让 Docker 运行更丝滑，就用这个方法，先装 WSL2 再装 Docker，Docker 会自动识别并适配，不用额外配置：

1. 右键开始菜单，打开「Windows PowerShell (管理员)」，输入命令 `wsl --install` 回车，等着系统自动安装就行
2. 装完会提示重启电脑，按提示重启
3. 重启后再去装 Docker Desktop，安装步骤和方法一完全一样，全程无脑下一步，装完直接用

## Mac 系统装 Docker（比 Windows 还简单，一步到位）

Mac 装 Docker 真的超省事，没有多余配置，点几下鼠标就搞定：

1. 同样去 Docker 官网下载安装包，还是刚才那个地址，会自动识别 Mac 系统
2. 下载完是个.dmg 文件，双击打开，把里面的 Docker 图标拖到 Applications 文件夹里
3. 打开 Launchpad 找到 Docker，点击启动，第一次启动跟着提示点几下完成初始化，看到电脑顶部状态栏有 Docker 的小图标，就安装成功了

## Linux 系统装 Docker（以 Ubuntu 为例，其他发行版通用）

Linux 装 Docker 需要敲几个命令，看着多但都是复制粘贴的事，一点都不难。我以 Ubuntu 为例，CentOS、Debian 的话，把命令里的`apt`换成`yum`/`apt-get`就行，步骤完全一样。

**小提醒**：所有命令都在终端里敲，复制的时候别漏了符号，一步一步来！

1. 先更新一下系统的包，避免装的时候出依赖问题：

```
sudo apt update

sudo apt upgrade -y
```

1. 安装 Docker 需要的基础依赖包，直接复制命令回车：

```
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

1. 添加 Docker 的官方 GPG 密钥，验证安装包的真实性：

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

1. 把 Docker 的官方仓库加到系统里，这样才能装到最新的官方版本：

```
echo "deb \[arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \$(lsb\_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

1. 最后一步，安装 Docker 主程序：

```
sudo apt update

sudo apt install docker-ce docker-ce-cli containerd.io -y
```

1. 装完直接验证，敲这个命令，能跑起来 hello-world 容器就说明装成了：

```
sudo docker run hello-world
```

## 通用验证方法：装完这样检查，确保能用

不管你是哪个系统，装完之后简单验证两步，确保 Docker 真的装好了、能正常运行，避免后续用的时候出问题：

1. 基础验证：敲命令看 Docker 版本

```
docker --version
```

能看到类似`Docker version 26.0.0, build 2ae903e`的版本信息，就说明安装成功了。

1. 完整验证：运行 hello-world 测试容器

```
docker run hello-world
```

终端里能看到 “Hello from Docker!” 的提示文字，就说明 Docker 不仅装好了，还能正常启动容器，完美可用！

## 安装高频 3 大坑，我踩过的坑帮你避了

我第一次装 Docker 的时候，就栽在这几个问题上，折腾了半天才搞定，现在把解决方法全写出来，你遇到了直接照着弄就行，不用再瞎查资料。

### 坑 1：Linux 敲 Docker 命令，总提示「权限不够」

Linux 默认需要加 sudo 才能跑 Docker 命令，每次都敲太麻烦，把当前用户加到 docker 用户组就解决了：

```
sudo usermod -aG docker \$USER
```

**重点**：敲完命令后，**必须注销再重新登录系统**，配置才能生效，之后再敲 Docker 命令就不用加 sudo 了。

### 坑 2：Linux 启动 Docker 失败，提示「服务未运行」

偶尔会遇到 Docker 装完没自动启动，手动启动一下就行，还能设置开机自启，避免每次重启电脑都要重新开：

```
\# 手动启动Docker服务

sudo systemctl start docker

\# 设置Docker开机自启（推荐）

sudo systemctl enable docker

\# 检查Docker服务运行状态

sudo systemctl status docker
```

看到终端里绿色的 “active (running)”，就说明 Docker 服务正常运行了。

### 坑 3：拉取 Docker 镜像超慢，甚至拉不下来

Docker 默认的仓库在国外，国内网络访问慢，配置个国内的镜像加速就行，速度能快十倍，Win/Mac/Linux 的配置方法都写清楚：

1. **Win/Mac**：打开 Docker Desktop，找到「Settings」（设置），点左侧「Docker Engine」，把镜像加速地址粘贴到配置里，保存后重启 Docker 就生效；
2. **Linux**：先创建 / 编辑 daemon.json 配置文件，敲命令：

```
sudo vim /etc/docker/daemon.json
```

按「i」进入编辑模式，粘贴下面的配置（阿里云、网易的加速地址，随便用）：

```
{

&#x20; "registry-mirrors": \["https://hub-mirror.c.163.com", "https://mirror.aliyuncs.com"]

}
```

按「Esc」，输入「:wq」保存退出，最后重启 Docker 服务让配置生效：

```
sudo systemctl daemon-reload

sudo systemctl restart docker
```

## 最后说两句

其实装 Docker 真的没啥技术难度，Win 和 Mac 基本就是点几下鼠标，Linux 就是复制粘贴几个命令，全程 5 分钟就能搞定，遇到的问题也都是固定的，照着解决就行。

这篇把 Docker 的基础环境搭好了，下一篇咱们就来学 Docker 最核心、最常用的命令 —— 镜像和容器的基础操作，还是大白话 + 实操，保证学完就能自己拉镜像、建容器，真正开始用 Docker 折腾各种项目了，咱们下篇见！

