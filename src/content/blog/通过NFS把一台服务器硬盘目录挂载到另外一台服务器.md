---
author: xxxu
pubDatetime: 2025-01-12T10:20:35Z
modDatetime: 2025-01-12T10:20:35Z
title: 通过NFS把一台服务器硬盘目录挂载到另外一台服务器
slug:  通过NFS把一台服务器硬盘目录挂载到另外一台服务器-blog
featured: false
draft: false
tags:
  - 教程
description:
  通过NFS把一台服务器硬盘目录挂载到另外一台服务器
---



通过NFS把一台服务器硬盘目录挂载到另外一台服务器。

# 步骤 1：在 **192.1.1.1** 机器上设置 NFS 服务器

## 1.安装 NFS 服务器

### 确保 **192.1.1.1** 上安装了 NFS 服务器：

```
sudo apt update
sudo apt install nfs-kernel-server
```

## 2.创建要共享的目录（如果还没有）

```
sudo mkdir -p /ceshi
```

## 3.编辑 `/etc/exports` 文件

编辑 `/etc/exports` 文件，将你想共享的目录 `/ceshi` 添加到该文件中，并指定允许访问的 IP 地址（在本例中是 `192.1.1.2`）

```
sudo nano /etc/exports
```

在文件中添加以下行：

```
/xxxu 192.1.1.2(rw,sync,no_subtree_check)
```

* `/xxxu` 是共享的目录。
* `192.1.1.2` 是允许访问该目录的客户端 IP 地址。
* `rw`：表示读写权限。
* `sync`：表示写操作是同步的。
* `no_subtree_check`：禁用子目录检查，增加性能。

## 4.导出共享目录

运行以下命令以使 `/etc/exports` 中的配置生效：

```
sudo exportfs -ra
```

## 5.启动 NFS 服务

启动 NFS 服务（如果还没有启动）：

```
sudo systemctl start nfs-kernel-server
```

如果需要让 NFS 服务在每次启动时自动启动，可以使用以下命令：

```
sudo systemctl enable nfs-kernel-server
```

# 步骤 2：在 **192.1.1.2** 机器上设置 NFS 客户端

## 1.安装 NFS 服务器

### 确保 **192.1.1.2** 上安装了 NFS 服务器：

```
sudo apt update
sudo apt install nfs-kernel-server
```

## 2.创建挂载点目录

在 **192.1.1.2** 上，创建一个用于挂载远程目录的本地目录 `/ceshi2`：

```
sudo mkdir -p /ceshi2
```

## 3.挂载远程目录

使用 `mount` 命令将 **192.1.1.1** 上的 `/ceshi ` 目录挂载到 **192.1.1.2** 上的 `/ceshi2` 目录：

```
sudo mount 192.1.1.1:/ceshi /ceshi2
```

## 4.验证挂载

使用 `df -h` 或 `mount` 命令检查是否成功挂载：

```
df -h  或者  mount
```

## 5.配置自动挂载

如果你希望在每次系统重启时自动挂载，可以将挂载信息添加到 `/etc/fstab` 文件中：

```
echo "192.1.1.1:/ceshi /ceshi2 nfs defaults 0 0" | sudo tee -a /etc/fstab
```

# 步骤 3：取消挂载（如果需要）

如果你需要取消挂载，可以使用 `umount` 命令：

```
sudo umount /ceshi2
```

如果挂载失败或出现问题，可以使用 `-f` 强制卸载：

```
sudo umount -f /ceshi2
```
