---
author: xxxu
pubDatetime: 2026-04-09T19:00:00Z
modDatetime: 2026-04-09T21:00:00Z
title: VPS常用命令全攻略 | 从基础操作到高级管理，一篇搞定
slug: vps-common-commands-complete-guide
featured: true
draft: false
tags:
  - VPS
  - 服务器管理
  - 命令行
  - 系统维护
  - 安全加固
description: VPS常用命令完全指南，涵盖基础操作、系统管理、网络配置、安全加固等核心功能，帮助你快速掌握服务器管理技能！
---

# VPS常用命令全攻略

作为一名服务器管理员，掌握常用的VPS命令是必不可少的技能。本文将为你介绍从基础操作到高级管理的各种VPS常用命令，帮助你更高效地管理和维护你的服务器。

## 一、基础操作命令

### 1. 系统信息查看

```bash
# 查看系统版本
cat /etc/os-release

# 查看内核版本
uname -r

# 查看系统架构
uname -m

# 查看系统负载
uptime

# 查看内存使用情况
free -h

# 查看磁盘使用情况
df -h

# 查看CPU信息
lscpu
```

### 2. 文件和目录操作

```bash
# 列出目录内容
ls -la

# 创建目录
mkdir -p /path/to/directory

# 切换目录
cd /path/to/directory

# 复制文件或目录
cp -r source destination

# 移动文件或目录
mv source destination

# 删除文件
rm file.txt

# 删除目录及内容
rm -rf directory

# 创建空文件
touch file.txt

# 查看文件内容
cat file.txt

# 查看文件前n行
head -n 10 file.txt

# 查看文件后n行
tail -n 10 file.txt

# 实时查看文件变化
tail -f file.txt
```

## 二、系统管理命令

### 1. 用户管理

```bash
# 创建用户
useradd username

# 设置用户密码
passwd username

# 删除用户
userdel username

# 查看当前登录用户
who

# 查看用户登录历史
last

# 切换用户
su - username
```

### 2. 进程管理

```bash
# 查看所有进程
ps aux

# 查看进程树
pstree

# 查看占用CPU和内存的进程
top

# 终止进程
kill -9 PID

# 查看进程端口
lsof -i :80
```

### 3. 服务管理

```bash
# 查看服务状态
systemctl status service_name

# 启动服务
systemctl start service_name

# 停止服务
systemctl stop service_name

# 重启服务
systemctl restart service_name

# 设置服务开机自启
systemctl enable service_name

# 禁止服务开机自启
systemctl disable service_name
```

## 三、网络配置命令

### 1. 网络状态查看

```bash
# 查看网络接口
ifconfig

# 查看网络路由
route -n

# 查看网络连接
netstat -tuln

# 查看网络连接（更详细）
ss -tuln

# 测试网络连接
ping example.com

# 测试端口连接
telnet example.com 80

# 查看DNS配置
cat /etc/resolv.conf
```

### 2. 防火墙管理

```bash
# 查看防火墙状态
firewall-cmd --state

# 查看开放端口
firewall-cmd --list-ports

# 开放端口
firewall-cmd --permanent --add-port=80/tcp

# 关闭端口
firewall-cmd --permanent --remove-port=80/tcp

# 重新加载防火墙规则
firewall-cmd --reload

# 使用iptables查看规则
iptables -L
```

## 四、安全加固命令

### 1. 系统更新

```bash
# 更新软件包列表
apt update  # Debian/Ubuntu
yum update  # CentOS/RHEL

# 升级软件包
apt upgrade -y  # Debian/Ubuntu
yum upgrade -y  # CentOS/RHEL
```

### 2. SSH配置

```bash
# 查看SSH服务状态
systemctl status sshd

# 编辑SSH配置文件
vi /etc/ssh/sshd_config

# 重启SSH服务
systemctl restart sshd

# 生成SSH密钥
ssh-keygen -t rsa -b 4096

# 复制SSH密钥到远程服务器
ssh-copy-id username@server_ip
```

### 3. 日志查看

```bash
# 查看系统日志
tail -f /var/log/syslog  # Debian/Ubuntu
tail -f /var/log/messages  # CentOS/RHEL

# 查看安全日志
tail -f /var/log/auth.log  # Debian/Ubuntu
tail -f /var/log/secure  # CentOS/RHEL

# 查看HTTP日志
tail -f /var/log/apache2/access.log  # Apache
tail -f /var/log/nginx/access.log  # Nginx
```

## 五、磁盘管理命令

### 1. 磁盘分区

```bash
# 查看磁盘分区
fdisk -l

# 分区工具
fdisk /dev/sda

# 格式化分区
mkfs.ext4 /dev/sda1

# 挂载分区
mount /dev/sda1 /mnt

# 查看挂载情况
mount

# 设置开机自动挂载
vi /etc/fstab
```

### 2. 磁盘空间管理

```bash
# 查看磁盘使用情况
df -h

# 查看目录大小
du -sh /path/to/directory

# 查找大文件
find / -type f -size +100M 2>/dev/null

# 清理系统垃圾
apt autoclean  # Debian/Ubuntu
yum clean all  # CentOS/RHEL
```

## 六、实用工具命令

### 1. 压缩和解压缩

```bash
# 压缩文件为tar.gz
tar -czvf archive.tar.gz /path/to/directory

# 解压tar.gz文件
tar -xzvf archive.tar.gz

# 压缩文件为zip
zip -r archive.zip /path/to/directory

# 解压zip文件
unzip archive.zip
```

### 2. 网络工具

```bash
# 下载文件
wget https://example.com/file.zip

# 下载文件（更强大）
curl -O https://example.com/file.zip

# 测试网络速度
speedtest-cli

# 查看公网IP
curl ipinfo.io/ip
```

### 3. 系统监控

```bash
# 实时监控系统资源
top

# 更美观的系统监控
htop

# 查看磁盘I/O
iotop

# 查看网络流量
iftop
```

## 七、常见问题排查

### 1. 系统负载高

```bash
# 查看占用CPU的进程
top -o %CPU

# 查看占用内存的进程
top -o %MEM

# 查看磁盘I/O使用情况
iostat -x
```

### 2. 网络问题

```bash
# 检查网络连通性
ping -c 4 example.com

# 检查DNS解析
nslookup example.com

# 检查路由
traceroute example.com
```

### 3. 服务无法启动

```bash
# 查看服务日志
journalctl -u service_name

# 检查端口是否被占用
netstat -tuln | grep port_number

# 检查配置文件语法
nginx -t  # Nginx
apachectl configtest  # Apache
```

## 八、VPS初始化与配置最佳实践

### 1. 初始化系统

```bash
# 首次登录后更新系统
apt update && apt upgrade -y  # Debian/Ubuntu
yum update && yum upgrade -y  # CentOS/RHEL

# 安装必要的工具包
apt install -y wget curl vim htop unzip  # Debian/Ubuntu
yum install -y wget curl vim htop unzip  # CentOS/RHEL

# 设置时区
timedatectl set-timezone Asia/Shanghai

# 关闭 selinux（仅CentOS/RHEL）
sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config
setenforce 0
```

### 2. 安全配置

```bash
# 创建新用户并添加到sudo组
useradd -m -s /bin/bash newuser
usermod -aG sudo newuser
passwd newuser

# 禁用root远程登录
sed -i 's/PermitRootLogin yes/PermitRootLogin no/g' /etc/ssh/sshd_config

# 更改SSH默认端口
sed -i 's/#Port 22/Port 2222/g' /etc/ssh/sshd_config

# 启用密钥认证并禁用密码登录
sed -i 's/PasswordAuthentication yes/PasswordAuthentication no/g' /etc/ssh/sshd_config

# 重启SSH服务
systemctl restart sshd
```

## 九、常见应用部署命令

### 1. Web服务器部署

```bash
# 安装Nginx
apt install -y nginx  # Debian/Ubuntu
yum install -y nginx  # CentOS/RHEL

# 安装Apache
apt install -y apache2  # Debian/Ubuntu
yum install -y httpd  # CentOS/RHEL

# 安装PHP
apt install -y php php-fpm  # Debian/Ubuntu
yum install -y php php-fpm  # CentOS/RHEL

# 安装MySQL
apt install -y mysql-server  # Debian/Ubuntu
yum install -y mariadb-server  # CentOS/RHEL
```

### 2. 应用容器化

```bash
# 安装Docker
curl -fsSL https://get.docker.com | sh

# 启动Docker服务
systemctl start docker
systemctl enable docker

# 安装Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# 运行容器
docker run -d --name nginx -p 80:80 nginx
```

## 十、VPS性能优化

### 1. 系统参数优化

```bash
# 调整文件描述符限制
echo "* soft nofile 65536" >> /etc/security/limits.conf
echo "* hard nofile 65536" >> /etc/security/limits.conf

# 调整内核参数
cat >> /etc/sysctl.conf << EOF
# 网络优化
net.core.somaxconn = 65535
net.ipv4.tcp_max_syn_backlog = 65535
net.ipv4.tcp_fin_timeout = 30
net.ipv4.tcp_keepalive_time = 300
net.ipv4.tcp_keepalive_probes = 5
net.ipv4.tcp_keepalive_intvl = 15

# 内存管理
vm.swappiness = 10
vm.overcommit_memory = 1
EOF

# 应用内核参数
sysctl -p
```

### 2. 服务优化

```bash
# 禁用不必要的服务
systemctl stop postfix
systemctl disable postfix

# 优化Nginx配置
cat > /etc/nginx/nginx.conf << EOF
user www-data;
worker_processes auto;
events {
    worker_connections 65535;
    use epoll;
}
http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    gzip on;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    include /etc/nginx/conf.d/*.conf;
}
EOF

# 重启Nginx
systemctl restart nginx
```

## 十一、备份与恢复

### 1. 数据备份

```bash
# 备份重要文件
tar -czvf backup_$(date +%Y%m%d).tar.gz /etc /var/www /home

# 备份MySQL数据库
mysqldump -u root -p --all-databases > backup_$(date +%Y%m%d).sql

# 自动备份脚本
cat > /root/backup.sh << EOF
#!/bin/bash
BACKUP_DIR="/backup"
DATE=$(date +%Y%m%d)

mkdir -p $BACKUP_DIR

# 备份文件
tar -czvf $BACKUP_DIR/files_$DATE.tar.gz /etc /var/www

# 备份数据库
mysqldump -u root -pYourPassword --all-databases > $BACKUP_DIR/db_$DATE.sql

# 删除7天前的备份
find $BACKUP_DIR -type f -mtime +7 -delete
EOF

chmod +x /root/backup.sh

# 添加到定时任务
crontab -e
# 添加以下行（每天凌晨2点执行备份）
# 0 2 * * * /root/backup.sh
```

### 2. 数据恢复

```bash
# 恢复文件
tar -xzvf backup_20260409.tar.gz -C /

# 恢复MySQL数据库
mysql -u root -p < backup_20260409.sql
```

## 十二、总结

掌握这些VPS常用命令和最佳实践，将大大提高你的服务器管理效率和安全性。本文涵盖了从基础操作到高级管理的各种命令，包括系统初始化、安全配置、应用部署、性能优化和备份恢复等方面。

当然，不同的Linux发行版可能会有一些命令差异，本文主要基于Debian/Ubuntu和CentOS/RHEL系统。在实际使用中，你可能需要根据自己的系统类型进行适当调整。

希望本文对你有所帮助！
