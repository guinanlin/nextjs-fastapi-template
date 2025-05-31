#!/bin/bash

# 打印当前工作目录以调试
echo "Current working directory: $(pwd)"

# 确保 logs/ 目录存在
mkdir -p logs
if [ -d "logs" ]; then
    echo "Logs directory exists: $(ls -ld logs)"
else
    echo "Failed to create logs directory"
    exit 1
fi

if [ -f /.dockerenv ]; then
    echo "Running in Docker"
    uvicorn app.main:app --host 0.0.0.0 --port 8000 --log-config=app/core/log_config.yml --reload &
    python watcher.py
else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Running locally with uv"
    uv run uvicorn app.main:app --host 0.0.0.0 --port 8000 --log-config=app/core/log_config.yml --reload &
    uv run python watcher.py
fi

wait