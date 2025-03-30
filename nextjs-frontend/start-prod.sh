#!/bin/bash

# 构建生产版本
pnpm run build

# 启动 Next.js 生产服务器（前台运行）
pnpm run start &

# 运行 watcher.js（如果需要）
node watcher.js &

# 等待所有后台进程
wait