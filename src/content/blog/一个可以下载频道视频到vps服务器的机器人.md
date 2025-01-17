---
author: xxxu
pubDatetime: 2025-01-16T10:20:35Z
modDatetime: 2025-01-16T10:20:35Z
title: 一个可以下载频道视频到vps服务器的机器人
slug:  一个可以下载频道视频到vps服务器的机器人-blog
featured: false
draft: false
tags:
  - 软件
  - 开源
description:
  一个可以下载频道视频到vps服务器的机器人
---

# Telegram 视频下载机器人

一个用于自动下载 Telegram 频道视频的机器人。支持大文件下载、进度显示和多频道监控。

在当今数字时代，Telegram 已成为重要的信息传播平台，大量优质视频内容通过各类频道进行分享。然而，这些内容往往具有时效性，可能随时被删除或无法访问。同时，在网络条件不稳定的情况下，直接观看在线视频也会遇到诸多不便。

## 开发动机

1. **内容保存需求**
   
   - 优质视频内容的本地存档需求
   - 避免内容失效或被删除的风险
   - 方便离线观看和二次使用
2. **技术挑战**
   
   - Telegram API 的使用限制
   - 大文件下载的技术难点
   - 多任务并发处理的需求
3. **用户痛点**
   
   - 手动下载费时费力
   - 无法批量处理视频文件
   - 下载进度无法实时监控
   - 存储管理不够便捷

## 解决方案

本项目通过以下方式解决这些问题：

1. **自动化处理**
   
   - 自动监控指定频道
   - 自动识别视频内容
   - 自动下载并分类存储
2. **用户友好**
   
   - 简单的命令行接口
   - 实时进度显示
   - 完整的状态反馈
   - 灵活的频道管理
3. **稳定可靠**
   
   - 断点续传支持
   - 自动重试机制
   - 错误处理完善
   - 日志记录详细

## 技术特点

1. **核心功能**
   
   - 基于 Telethon 库开发
   - 异步处理架构
   - 多任务并发支持
   - 完整的错误处理
2. **实用特性**
   
   - 大文件支持
   - 进度显示
   - 状态统计
   - 配置持久化
3. **扩展性**
   
   - 模块化设计
   - 配置灵活
   - 易于维护
   - 支持二次开发

## 应用场景

1. **个人用户**
   
   - 教育视频收藏
   - 学习资料存档
   - 兴趣内容保存
2. **内容创作者**
   
   - 素材收集整理
   - 作品备份存档
   - 资源管理工具
3. **团队协作**
   
   - 视频资源共享
   - 内容分发管理
   - 协同工作支持

## 未来展望

1. **功能增强**
   
   - 支持更多媒体类型
   - 添加文件分类功能
   - 优化存储管理
   - 增加批处理能力
2. **用户体验**
   
   - 添加 Web 界面
   - 优化进度显示
   - 增加数据统计
   - 提供更多自定义选项
3. **技术优化**
   
   - 提升下载速度
   - 优化内存使用
   - 增强稳定性
   - 完善错误处理

## 项目价值

1. **实用价值**
   
   - 提高工作效率
   - 节省人力成本
   - 保护重要内容
   - 便于资源管理
2. **技术价值**
   
   - Telegram API 应用示例
   - 异步编程实践
   - 文件处理参考
   - 开源社区贡献
3. **教育价值**
   
   - Python 学习资源
   - API 使用示例
   - 项目实践参考
   - 开源协作经验

## 结语

本项目旨在解决 Telegram 视频下载的实际需求，通过技术手段提高效率，为用户提供便捷的内容管理工具。我们欢迎社区的贡献和建议，共同推动项目的发展和完善。

## 功能特点

- 🎥 自动下载频道中的视频文件
- 📊 实时显示下载进度和速度
- 📁 支持大文件下载
- 📋 多频道监控管理
- 🔄 自动重试和断点续传
- 📈 下载统计和状态查看
  
  ![](https://image.xxxu.me/rest/zxk2cNK.png)
  ![](https://image.xxxu.me/rest/QcR2cNK.png)

## [github地址](https://github.com/xxxume/telegram_video_downloader)

## 安装步骤

### 1.创建/root/video目录

### 2.下载[文件](https://github.com/xxxume/telegram_video_downloader/releases/tag/%E4%B8%80%E4%B8%AA%E5%8F%AF%E4%BB%A5%E4%B8%8B%E8%BD%BD%E9%A2%91%E9%81%93%E8%A7%86%E9%A2%91%E5%88%B0vps%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA)上传到/root/video目录下

### 3.创建虚拟环境

```
python3 -m venv venv
source venv/bin/activate
```

### 4.安装依赖

```
pip install telethon humanize
```

### 5.创建必要的目录：

```
mkdir -p logs session data
```

### 6.设置权限：

```
chmod +x start\_bot.sh
```

## 配置说明

1. 从 @BotFather 获取 Bot Token
2. 从 @userinfobot 获取你的用户 ID
3. 修改 `telegram_video_downloader.py` 中的配置：
   - BOT_TOKEN
   - ADMIN_USER_ID

## 使用方法

启动机器人：screen -S telegram-bot ./start\_bot.sh   #（按 Ctrl+A+D 将程序放入后台运行）

## 机器人命令

- `/start` - 显示帮助信息
- `/add_channel @channel` - 添加要监控的频道
- `/remove_channel @channel` - 移除监控的频道
- `/list_channels` - 列出所有监控的频道
- `/status` - 查看下载统计信息
  ***初次使用需要/add_channel @你的频道用户名    添加监控频道。

## 常用命令

# 查看日志

tail -f logs/bot.log

# 查看 screen 会话

screen -ls

# 重新连接到 screen 会话

screen -r telegram-bot

# 停止机器人

screen -X -S telegram-bot quit

## 注意事项

1. 确保机器人是频道的管理员
2. 定期清理下载目录避免空间不足
3. 检查日志及时发现问题
4. 建议设置自动备份

## 故障排除

1. 如果机器人无响应：
   
   - 检查日志文件
   - 确认网络连接
   - 验证 Bot Token 是否正确
2. 如果下载失败：
   
   - 检查存储空间
   - 确认文件大小限制
   - 查看错误日志
3. 如果需要重置：
   
   - 停止机器人
   - 清理 session 目录
   - 重新启动

## 更新日志

### v1.0.0

- 初始版本发布
- 支持基本的视频下载功能
- 添加进度显示
- 支持大文件下载
  
  ## 文件分享
  
 start_bot.sh

```
#!/bin/bash
cd /root/video
source venv/bin/activate

while true; do
    echo "Starting bot..."
    python telegram_video_downloader.py >> /root/video/logs/bot.out 2>&1
    echo "Bot crashed or stopped, restarting in 10 seconds..."
    sleep 10
done
```

telegram_bot_downloader.py

```
import os
import asyncio
from datetime import datetime
import logging
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes
from telegram.error import TimedOut, NetworkError
import httpx
import time
import json
import math
import humanize  # 需要安装: pip install humanize

# 配置日志
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO,
    handlers=[
        logging.FileHandler('/root/video/bot.log'),  # 添加文件日志
        logging.StreamHandler()  # 保留控制台输出
    ]
)
logger = logging.getLogger(__name__)

# Telegram Bot配置
BOT_TOKEN = '填入机器人的TOKEN'
ADMIN_USER_ID = 填入你的用户ID
BASE_URL = "https://api.telegram.org/bot"  # 可以根据需要修改为其他 API 地址

# 视频保存路径
DOWNLOAD_PATH = '/root/video'
os.makedirs(DOWNLOAD_PATH, exist_ok=True)

# 存储被监控的频道
monitored_channels = set()

# 添加配置文件保存/加载功能
def save_channels():
    with open('/root/video/channels.json', 'w') as f:
        json.dump(list(monitored_channels), f)
    logger.info(f"保存频道配置: {monitored_channels}")

def load_channels():
    try:
        with open('/root/video/channels.json', 'r') as f:
            channels = json.load(f)
            monitored_channels.update(channels)
            logger.info(f"加载频道配置: {monitored_channels}")
    except FileNotFoundError:
        logger.info("没有找到频道配置文件")

# 添加进度条辅助函数
def create_progress_bar(progress):
    """创建进度条"""
    filled = '█' * int(progress * 10)
    empty = '░' * (10 - int(progress * 10))
    return f"{filled}{empty}"

def format_size(size):
    """格式化文件大小"""
    return humanize.naturalsize(size, binary=True)

async def progress_callback(current, total, message, start_time, file_name):
    """更新下载进度"""
    try:
        now = time.time()
        # 每2秒更新一次进度，避免频繁更新
        if now - progress_callback.last_update < 2:
            return
        progress_callback.last_update = now

        progress = current / total
        bar = create_progress_bar(progress)
        percentage = progress * 100
        
        # 计算速度和剩余时间
        elapsed_time = now - start_time
        speed = current / elapsed_time if elapsed_time > 0 else 0
        eta = (total - current) / speed if speed > 0 else 0
        
        # 格式化消息
        text = (
            f"📥 正在下载: {file_name}\n"
            f"进度: {bar} {percentage:.1f}%\n"
            f"大小: {format_size(current)}/{format_size(total)}\n"
            f"速度: {format_size(speed)}/s\n"
            f"预计剩余时间: {int(eta)}秒"
        )
        
        # 更新消息
        await message.edit_text(text)
    except Exception as e:
        logger.error(f"更新进度时出错: {str(e)}")

# 初始化最后更新时间
progress_callback.last_update = 0

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """处理 /start 命令"""
    logger.info(f"Received /start command from user ID: {update.effective_user.id}")
    
    if update.effective_user.id != ADMIN_USER_ID:
        logger.warning(f"Unauthorized access attempt from user {update.effective_user.id}")
        await update.message.reply_text("抱歉，您没有使用此机器人的权限。")
        return
    
    logger.info("Sending welcome message to admin")
    await update.message.reply_text(
        "欢迎使用频道视频下载机器人！\n"
        "/add_channel <频道链接> - 添加要监控的频道\n"
        "/remove_channel <频道链接> - 移除监控的频道\n"
        "/list_channels - 列出所有监控的频道\n"
        "/status - 查看下载状态和统计信息"
    )

async def add_channel(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """添加要监控的频道"""
    if update.effective_user.id != ADMIN_USER_ID:
        return
    
    if not context.args:
        await update.message.reply_text("请提供频道用户名，例如: /add_channel @channel_name")
        return
    
    channel = context.args[0].strip('@')
    try:
        # 验证频道
        chat = await context.bot.get_chat(f"@{channel}")
        if chat.type != 'channel':
            await update.message.reply_text("这不是一个频道")
            return
            
        # 检查机器人权限
        member = await chat.get_member(context.bot.id)
        if not member.status in ['administrator', 'creator']:
            await update.message.reply_text("请先将机器人添加为频道管理员")
            return
        
        monitored_channels.add(channel)
        save_channels()  # 保存配置
        await update.message.reply_text(f"已成功添加频道: @{channel}\n机器人将自动下载该频道的新视频")
        logger.info(f"Added channel: @{channel}")
        
    except Exception as e:
        error_message = str(e)
        logger.error(f"Failed to add channel {channel}: {error_message}")
        if "Chat not found" in error_message:
            await update.message.reply_text("找不到该频道，请确保:\n1. 频道用户名正确\n2. 频道是公开的\n3. 机器人已加入该频道")
        else:
            await update.message.reply_text(f"添加频道失败: {error_message}\n请确保:\n1. 频道用户名正确\n2. 机器人是频道管理员")

async def remove_channel(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """移除监控的频道"""
    if update.effective_user.id != ADMIN_USER_ID:
        return
    
    if not context.args:
        await update.message.reply_text("请提供要移除的频道链接或用户名")
        return
    
    channel = context.args[0]
    if channel.strip('@') in monitored_channels:
        monitored_channels.remove(channel.strip('@'))
        await update.message.reply_text(f"已移除频道: {channel}")
    else:
        await update.message.reply_text("未找到该频道")

async def list_channels(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """列出所有监控的频道"""
    if update.effective_user.id != ADMIN_USER_ID:
        return
    
    if not monitored_channels:
        await update.message.reply_text("当前没有监控任何频道")
        return
    
    channels_list = "\n".join(f"- {channel}" for channel in monitored_channels)
    await update.message.reply_text(f"当前监控的频道：\n{channels_list}")

async def handle_new_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """处理新消息，下载视频"""
    logger.info("收到新消息")
    
    if not update.channel_post:
        logger.info("不是频道消息，忽略")
        return
    
    channel_username = update.effective_chat.username
    logger.info(f"消息来自频道: {channel_username}")
    
    if channel_username not in monitored_channels:
        logger.info(f"频道 {channel_username} 不在监控列表中")
        return
    
    try:
        if update.channel_post.video:
            video = update.channel_post.video
            logger.info(f"检测到视频: {video.file_name}, 大小: {format_size(video.file_size)}")
            
            # 修改文件大小限制检查
            if video.file_size > 50 * 1024 * 1024:  # 50MB
                error_msg = (
                    f"文件太大 ({format_size(video.file_size)})，超过 Telegram Bot API 限制\n"
                    f"建议：\n"
                    f"1. 使用较小的视频文件（<50MB）\n"
                    f"2. 或者将视频分段上传\n"
                    f"3. 或者使用其他下载方式"
                )
                logger.error(error_msg)
                await context.bot.send_message(
                    chat_id=ADMIN_USER_ID,
                    text=f"❌ 下载失败\n"
                         f"频道: @{channel_username}\n"
                         f"文件: {video.file_name}\n"
                         f"大小: {format_size(video.file_size)}\n"
                         f"原因: 文件超过50MB限制"
                )
                return
            
            now = datetime.now().strftime('%Y%m%d_%H%M%S')
            file_name = video.file_name or f'video_{now}.mp4'
            file_path = os.path.join(DOWNLOAD_PATH, file_name)
            
            # 确保文件名唯一
            base_name, ext = os.path.splitext(file_name)
            counter = 1
            while os.path.exists(file_path):
                file_path = os.path.join(DOWNLOAD_PATH, f'{base_name}_{counter}{ext}')
                counter += 1
            
            # 发送初始下载消息
            progress_message = await context.bot.send_message(
                chat_id=ADMIN_USER_ID,
                text=f"开始下载视频: {file_name}\n大小: {format_size(video.file_size)}"
            )
            
            try:
                # 记录开始时间
                start_time = time.time()
                
                # 下载视频
                logger.info(f'开始下载视频: {file_path}')
                file = await context.bot.get_file(video.file_id)
                await file.download_to_drive(
                    custom_path=file_path,
                    progress_callback=lambda current, total: asyncio.create_task(
                        progress_callback(
                            current, total, progress_message, 
                            start_time, file_name
                        )
                    )
                )
                
                # 下载完成后的处理
                file_size = os.path.getsize(file_path)
                duration = time.time() - start_time
                average_speed = file_size / duration if duration > 0 else 0
                
                # 发送完成消息
                complete_message = (
                    f"✅ 视频下载完成\n"
                    f"频道: @{channel_username}\n"
                    f"文件: {file_name}\n"
                    f"大小: {format_size(file_size)}\n"
                    f"用时: {int(duration)}秒\n"
                    f"平均速度: {format_size(average_speed)}/s"
                )
                
                await progress_message.edit_text(complete_message)
                logger.info(f'视频下载完成: {file_path} ({format_size(file_size)})')
                
            except Exception as e:
                # 如果下载失败，删除可能的部分下载文件
                if os.path.exists(file_path):
                    os.remove(file_path)
                raise e
                
        else:
            logger.info("消息中没有视频")
            
    except Exception as e:
        error_message = f"下载视频时出错: {str(e)}"
        logger.error(error_message)
        # 通知管理员出错
        await context.bot.send_message(
            chat_id=ADMIN_USER_ID,
            text=f"❌ 下载失败\n频道: @{channel_username}\n错误: {str(e)}"
        )

async def status(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """显示下载状态和统计信息"""
    if update.effective_user.id != ADMIN_USER_ID:
        return
    
    try:
        # 获取下载目录的统计信息
        total_files = len([f for f in os.listdir(DOWNLOAD_PATH) if os.path.isfile(os.path.join(DOWNLOAD_PATH, f))])
        total_size = sum(os.path.getsize(os.path.join(DOWNLOAD_PATH, f)) for f in os.listdir(DOWNLOAD_PATH) if os.path.isfile(os.path.join(DOWNLOAD_PATH, f)))
        
        status_message = (
            "📊 下载统计信息\n"
            f"监控的频道数: {len(monitored_channels)}\n"
            f"已下载文件数: {total_files}\n"
            f"总存储大小: {total_size / 1024 / 1024:.2f} MB\n"
            f"存储路径: {DOWNLOAD_PATH}"
        )
        await update.message.reply_text(status_message)
    except Exception as e:
        await update.message.reply_text(f"获取状态信息时出错: {str(e)}")

def main():
    """启动机器人"""
    logger.info("Bot starting...")
    load_channels()  # 加载保存的频道配置
    logger.info(f"Admin ID: {ADMIN_USER_ID}")
    logger.info(f"Download path: {DOWNLOAD_PATH}")
    logger.info(f"Monitored channels: {monitored_channels}")
    
    while True:
        try:
            # 每次循环创建新的应用实例
            application = (
                Application.builder()
                .token(BOT_TOKEN)
                .connect_timeout(30.0)
                .read_timeout(30.0)
                .write_timeout(30.0)
                .pool_timeout(30.0)
                .get_updates_read_timeout(30.0)
                .build()
            )
            
            logger.info("Application built successfully")
            
            # 注册命令处理器
            application.add_handler(CommandHandler("start", start))
            application.add_handler(CommandHandler("add_channel", add_channel))
            application.add_handler(CommandHandler("remove_channel", remove_channel))
            application.add_handler(CommandHandler("list_channels", list_channels))
            application.add_handler(CommandHandler("status", status))
            
            # 注册消息处理器
            application.add_handler(MessageHandler(
                filters.ChatType.CHANNEL & (filters.VIDEO | filters.FORWARDED),
                handle_new_message
            ))
            
            logger.info("All handlers registered")
            
            # 启动轮询
            logger.info("Starting polling...")
            application.run_polling(
                allowed_updates=Update.ALL_TYPES,
                drop_pending_updates=True,
                timeout=30,
                read_timeout=30,
                write_timeout=30,
                connect_timeout=30,
                pool_timeout=30
            )
            
        except (TimedOut, NetworkError) as e:
            logger.error(f"Network error: {e}")
            logger.info("Waiting 10 seconds before retry...")
            time.sleep(10)
            continue
        except Exception as e:
            logger.error(f"Critical error: {str(e)}", exc_info=True)
            logger.info("Waiting 30 seconds before retry...")
            time.sleep(30)
            continue

if __name__ == '__main__':
    try:
        logger.info("Script started")
        main()
    except KeyboardInterrupt:
        logger.info("Bot stopped by user")
    except Exception as e:
        logger.error(f"Fatal error: {str(e)}", exc_info=True)
```

telegram_video_downloader.py

```
import os
import asyncio
from datetime import datetime
import logging
from telethon import TelegramClient, events
import humanize
import json
import time

# 配置日志
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO,
    handlers=[
        logging.FileHandler('/root/video/logs/bot.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Telegram Bot配置
BOT_TOKEN = os.getenv('BOT_TOKEN', '7701103060:AAEfjw6DUzRT3XSQwcTRROL2Q1I8Dkv1PKI')
ADMIN_USER_ID = int(os.getenv('ADMIN_USER_ID', '1824426271'))

# 使用公共测试服务器的 API ID 和 Hash
API_ID = 2040
API_HASH = "b18441a1ff607e10a989891a5462e627"

# 视频保存路径
DOWNLOAD_PATH = '/root/video'
os.makedirs(DOWNLOAD_PATH, exist_ok=True)

# session 文件路径
SESSION_PATH = '/root/video/session/bot_session'

# 存储被监控的频道
monitored_channels = set()

# 保存和加载频道配置
def save_channels():
    with open('/root/video/channels.json', 'w') as f:
        json.dump(list(monitored_channels), f)
    logger.info(f"保存频道配置: {monitored_channels}")

def load_channels():
    try:
        with open('/root/video/channels.json', 'r') as f:
            channels = json.load(f)
            monitored_channels.update(channels)
            logger.info(f"加载频道配置: {monitored_channels}")
    except FileNotFoundError:
        logger.info("没有找到频道配置文件")

def format_size(size):
    """格式化文件大小"""
    return humanize.naturalsize(size, binary=True)

async def progress_callback(current, total, message, start_time, file_name):
    """显示下载进度"""
    try:
        now = time.time()
        # 每2秒更新一次进度
        if hasattr(progress_callback, 'last_update'):
            if now - progress_callback.last_update < 2:
                return
        progress_callback.last_update = now

        # 计算进度
        percentage = (current / total) * 100
        speed = current / (now - start_time) if now - start_time > 0 else 0
        eta = (total - current) / speed if speed > 0 else 0

        # 创建进度条
        bar_length = 10
        filled = int(percentage / 100 * bar_length)
        bar = '█' * filled + '░' * (bar_length - filled)

        # 更新消息
        await message.edit(
            f"📥 正在下载: {file_name}\n"
            f"进度: {bar} {percentage:.1f}%\n"
            f"大小: {format_size(current)}/{format_size(total)}\n"
            f"速度: {format_size(speed)}/s\n"
            f"预计剩余时间: {int(eta)}秒"
        )
    except Exception as e:
        logger.error(f"更新进度时出错: {str(e)}")

async def main():
    try:
        # 创建客户端
        logger.info("Creating client...")
        client = TelegramClient(SESSION_PATH, API_ID, API_HASH)
        
        logger.info("Starting client with bot token...")
        await client.start(bot_token=BOT_TOKEN)
        
        logger.info("Bot started successfully")
        logger.info(f"Bot username: {(await client.get_me()).username}")
        
        # 加载保存的频道配置
        load_channels()
        
        @client.on(events.NewMessage(pattern='/start'))
        async def start_handler(event):
            if event.sender_id != ADMIN_USER_ID:
                return
            
            await event.respond(
                "欢迎使用频道视频下载机器人！\n"
                "/add_channel <频道链接> - 添加要监控的频道\n"
                "/remove_channel <频道链接> - 移除监控的频道\n"
                "/list_channels - 列出所有监控的频道\n"
                "/status - 查看下载状态和统计信息"
            )

        @client.on(events.NewMessage(pattern='/add_channel'))
        async def add_channel_handler(event):
            if event.sender_id != ADMIN_USER_ID:
                return
            
            try:
                channel = event.text.split(maxsplit=1)[1].strip('@')
                entity = await client.get_entity(channel)
                if not hasattr(entity, 'broadcast'):
                    await event.respond("这不是一个频道")
                    return
                
                monitored_channels.add(channel)
                save_channels()
                await event.respond(f"已成功添加频道: @{channel}")
                logger.info(f"Added channel: @{channel}")
            except Exception as e:
                await event.respond(f"添加频道失败: {str(e)}")
                logger.error(f"Failed to add channel: {str(e)}")

        @client.on(events.NewMessage(pattern='/remove_channel'))
        async def remove_channel_handler(event):
            if event.sender_id != ADMIN_USER_ID:
                return
            
            try:
                channel = event.text.split(maxsplit=1)[1].strip('@')
                if channel in monitored_channels:
                    monitored_channels.remove(channel)
                    save_channels()
                    await event.respond(f"已移除频道: @{channel}")
                else:
                    await event.respond("未找到该频道")
            except Exception as e:
                await event.respond(f"移除频道失败: {str(e)}")

        @client.on(events.NewMessage(pattern='/list_channels'))
        async def list_channels_handler(event):
            if event.sender_id != ADMIN_USER_ID:
                return
            
            if not monitored_channels:
                await event.respond("当前没有监控任何频道")
                return
            
            channels_list = "\n".join(f"- {channel}" for channel in monitored_channels)
            await event.respond(f"当前监控的频道：\n{channels_list}")

        @client.on(events.NewMessage(pattern='/status'))
        async def status_handler(event):
            if event.sender_id != ADMIN_USER_ID:
                return
            
            try:
                total_files = len([f for f in os.listdir(DOWNLOAD_PATH) if os.path.isfile(os.path.join(DOWNLOAD_PATH, f))])
                total_size = sum(os.path.getsize(os.path.join(DOWNLOAD_PATH, f)) for f in os.listdir(DOWNLOAD_PATH) if os.path.isfile(os.path.join(DOWNLOAD_PATH, f)))
                
                await event.respond(
                    "📊 下载统计信息\n"
                    f"监控的频道数: {len(monitored_channels)}\n"
                    f"已下载文件数: {total_files}\n"
                    f"总存储大小: {format_size(total_size)}\n"
                    f"存储路径: {DOWNLOAD_PATH}"
                )
            except Exception as e:
                await event.respond(f"获取状态信息时出错: {str(e)}")

        @client.on(events.NewMessage)
        async def download_handler(event):
            try:
                # 添加更多日志
                logger.info(f"Received message: {event.message.id}")
                
                if not event.is_channel:
                    logger.info("Not a channel message")
                    return
                
                channel_username = (await event.get_chat()).username
                logger.info(f"Message from channel: @{channel_username}")
                
                if channel_username not in monitored_channels:
                    logger.info(f"Channel @{channel_username} not in monitored list")
                    return

                if hasattr(event.message, 'media') and event.message.media:
                    logger.info("Message has media")
                    # 获取视频信息
                    media = event.message.media
                    if hasattr(media, 'document'):
                        # 获取文件信息
                        file_size = media.document.size
                        mime_type = media.document.mime_type
                        
                        # 只处理视频文件
                        if not mime_type or not mime_type.startswith('video/'):
                            return
                        
                        # 获取文件名
                        for attribute in media.document.attributes:
                            if hasattr(attribute, 'file_name') and attribute.file_name:
                                file_name = attribute.file_name
                                break
                        else:
                            file_name = f"video_{int(time.time())}.mp4"
                        
                        file_path = os.path.join(DOWNLOAD_PATH, file_name)
                        
                        # 确保文件名唯一
                        base_name, ext = os.path.splitext(file_name)
                        counter = 1
                        while os.path.exists(file_path):
                            file_path = os.path.join(DOWNLOAD_PATH, f"{base_name}_{counter}{ext}")
                            counter += 1
                        
                        # 发送开始下载消息
                        status_message = await client.send_message(
                            ADMIN_USER_ID,
                            f"开始下载视频: {file_name}\n大小: {format_size(file_size)}"
                        )
                        
                        try:
                            # 记录开始时间
                            start_time = time.time()
                            
                            # 创建进度回调
                            async def progress(current, total):
                                try:
                                    await progress_callback(current, total, status_message, start_time, file_name)
                                except Exception as e:
                                    logger.error(f"Progress callback error: {str(e)}")
                            
                            # 下载视频
                            await client.download_media(
                                message=event.message.media,
                                file=file_path,
                                progress_callback=progress
                            )
                            
                            # 下载完成后的处理
                            actual_size = os.path.getsize(file_path)
                            duration = time.time() - start_time
                            average_speed = actual_size / duration if duration > 0 else 0
                            
                            # 发送完成消息
                            await status_message.edit(
                                f"✅ 视频下载完成\n"
                                f"频道: @{channel_username}\n"
                                f"文件: {file_name}\n"
                                f"大小: {format_size(actual_size)}\n"
                                f"用时: {int(duration)}秒\n"
                                f"平均速度: {format_size(average_speed)}/s"
                            )
                            
                            logger.info(f"视频下载完成: {file_path}")
                            
                        except Exception as e:
                            # 如果下载失败，删除部分下载的文件
                            if os.path.exists(file_path):
                                os.remove(file_path)
                            raise e
                            
            except Exception as e:
                error_msg = f"下载视频时出错: {str(e)}"
                logger.error(error_msg)
                await client.send_message(
                    ADMIN_USER_ID, 
                    f"❌ 下载失败\n"
                    f"频道: @{channel_username}\n"
                    f"错误: {str(e)}"
                )

        try:
            logger.info("Starting bot...")
            await client.run_until_disconnected()
        except KeyboardInterrupt:
            logger.info("Bot stopped by user")
        except Exception as e:
            logger.error(f"Bot crashed: {str(e)}")
            raise

    except Exception as e:
        logger.error(f"Failed to start bot: {str(e)}", exc_info=True)
        raise

if __name__ == '__main__':
    try:
        logger.info("Script started")
        asyncio.run(main())
    except KeyboardInterrupt:
        logger.info("Bot stopped by user")
    except Exception as e:
        logger.error(f"Fatal error: {str(e)}", exc_info=True) 
```

