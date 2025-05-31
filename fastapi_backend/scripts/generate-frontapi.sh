
# 步骤 1: 进入后端项目目录并设置 PYTHONPATH
cd fastapi_backend
source .venv/Scripts/activate
python -m commands.generate_openapi_schema

# 步骤 2: 进入前端项目目录
cd ../nextjs-frontend

# 步骤 3: 生成前端 API 客户端
pnpm run generate-client

# 步骤 4: 通知用户检查使用
echo "前端 API 客户端已生成，请检查使用。"