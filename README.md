[![CI](https://github.com/vintasoftware/nextjs-fastapi-template/actions/workflows/ci.yml/badge.svg)](https://github.com/vintasoftware/nextjs-fastapi-template/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/vintasoftware/nextjs-fastapi-template/badge.svg)](https://coveralls.io/github/vintasoftware/nextjs-fastapi-template)

# nextjs-fastapi-template

## 目录
* [关于](#关于)
* [生产就绪的身份验证和仪表板](#生产就绪的身份验证和仪表板)
* [使用此模板开始](#使用此模板开始)
* [设置](#设置)
  * [安装所需工具](#安装所需工具)
    * [1. uv](#1-uv)
    * [2. Node.js, npm 和 pnpm](#2-nodejsm-npm-and-pnpm)
    * [3. Docker](#3-docker)
    * [4. Docker Compose](#4-docker-compose)
  * [设置环境变量](#设置环境变量)
  * [运行数据库](#运行数据库)
  * [构建项目（不使用Docker）](#构建项目（不使用Docker）)
    * [后端](#后端)
    * [前端](#前端)
  * [构建项目（使用Docker）](#构建项目（使用Docker）)
    * [后端](#后端)
    * [前端](#前端)
* [运行应用程序](#运行应用程序)
* [开发环境下的热重载](#开发环境下的热重载)
  * [手动执行热重载命令](#手动执行热重载命令)
* [测试](#测试)
* [电子邮件本地主机设置](#电子邮件本地主机设置)
* [预提交设置](#预提交设置)
  * [安装和激活预提交钩子](#安装和激活预提交钩子)
  * [运行预提交检查](#运行预提交检查)
  * [更新预提交钩子](#更新预提交钩子)
* [Alembic数据库迁移](#Alembic数据库迁移)
* [GitHub Actions](#GitHub Actions)
  * [Secrets Configuration](#Secrets Configuration)
* [生产部署](#生产部署)
* [为生产部署设置CI（GitHub Actions）](#为生产部署设置CI（GitHub Actions）)
* [部署后配置](#部署后配置)
* [Makefile](#Makefile)
* [重要考虑因素](#重要考虑因素)
* [贡献](#贡献)
* [分享你的项目！](#分享你的项目！)
* [商业支持](#商业支持)

## 关于
这个模板简化了使用 [FastAPI](https://fastapi.tiangolo.com/) 构建API和使用 [Next.js](https://nextjs.org/) 构建动态前端的过程。它使用 [@hey-api/openapi-ts](https://github.com/hey-ai/openapi-ts) 来生成类型安全的客户端，自动监视OpenAPI模式和客户端的更新，确保开发工作流的顺畅和同步。

- [Next.js](https://nextjs.org/): 快速、SEO友好的前端框架
- [FastAPI](https://fastapi.tiangolo.com/): 高性能的Python后端
- [SQLAlchemy](https://www.sqlalchemy.org/): 强大的Python SQL工具包和ORM
- [PostgreSQL](https://www.postgresql.org/): 先进的开源关系数据库
- [Pydantic](https://docs.pydantic.dev/): 使用Python类型注释进行数据验证和设置管理
- [Zod](https://zod.dev/) + [TypeScript](https://www.typescriptlang.org/): 端到端类型安全和模式验证
- [fastapi-users](https://fastapi-users.github.io/fastapi-users/): 包含以下功能的完整身份验证系统：
  - 默认情况下进行安全密码哈希处理
  - JWT（JSON Web Token）身份验证
  - 基于电子邮件的密码恢复
- [Shadcn/ui](https://ui.shadcn.com/): 可定制的React组件
- [OpenAPI-fetch](https://github.com/Hey-AI/openapi-fetch): 从OpenAPI模式生成完全类型化的客户端
- [fastapi-mail](https://sabuhish.github.io/fastapi-mail/): 用于FastAPI应用的高效电子邮件处理
- [uv](https://docs.astral.sh/uv/): 一个极快的Python包和项目管理器
- [Pytest](https://docs.pytest.org/): 强大的Python测试框架
- 代码质量工具：
  - [Ruff](https://github.com/astral-sh/ruff): 快速的Python代码检查
  - [ESLint](https://eslint.org/): JavaScript/TypeScript代码质量
- 热重载监视器：
  - 后端：[Watchdog](https://github.com/gorakhargosh/watchdog) 用于监视文件更改
  - 前端：[Chokidar](https://github.com/paulmillr/chokidar) 用于实时更新
- [Docker](https://www.docker.com/) 和 [Docker Compose](https://docs.docker.com/compose/): 用于开发和生产的一致环境
- [MailHog](https://github.com/mailhog/MailHog): 用于开发的电子邮件服务器
- [Pre-commit hooks](https://pre-commit.com/): 使用自动检查来强制代码质量
- [OpenAPI JSON schema](https://swagger.io/specification/): 集中的API文档和客户端生成

通过这个设置，你将节省时间并保持后端和前端之间的无缝连接，提高生产力和可靠性。

## 生产就绪的身份验证和仪表板功能
这个模板带有预配置的身份验证系统和简单的仪表板界面，允许你立即开始构建具有用户管理功能的应用。

## 使用此模板开始

要为你自己的项目使用这个模板：

1. 按照GitHub的[模板存储库指南](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template)创建一个新的存储库
2. 克隆你的新存储库并导航到它：`cd your-project-name`
3. 更新这个README：
   - 更改第一行中的项目名称
   - 删除这个"使用此模板开始"部分
4. 确保你已经安装了Python 3.12

完成后，继续下面的[设置](#设置)部分。

## 设置

### 安装所需工具

#### 1. uv
uv 用于管理后端的Python依赖。按照[官方安装指南](https://docs.astral.sh/uv/getting-started/installation/)安装 uv。

#### 2. Node.jsm, npm 和 pnpm
确保已经安装了Node.js和npm以运行前端。按照[Node.js安装指南](https://nodejs.org/en/download/)进行安装。
安装完成后，运行以下命令安装pnpm：
```bash
npm install -g pnpm
```

#### 3. Docker
Docker是在容器化环境中运行项目所需的。按照适当的安装指南进行安装：

- [为Mac安装Docker](https://docs.docker.com/docker-for-mac/install/)
- [为Windows安装Docker](https://docs.docker.com/docker-for-windows/install/)
- [获取Linux的Docker CE](https://docs.docker.com/install/linux/docker-ce/)

#### 4. Docker Compose
确保已经安装了`docker-compose`。参考[Docker Compose安装指南](https://docs.docker.com/compose/install/)。

### 设置环境变量

**后端（`fastapi_backend/.env`）:**
将`.env.example`文件复制到`.env`并使用你自己的值更新变量。
   ```bash
   cd fastapi_backend && cp .env.example .env
   ```
1. 你只需要更新密钥。你可以使用以下命令生成一个新的密钥：
   ```bash
   python3 -c "import secrets; print(secrets.token_hex(32))"
   ```
2. DATABASE, MAIL, OPENAPI, CORS和FRONTEND_URL设置已经准备好在本地使用。
3. 如果你正在使用Docker，DATABASE和MAIL设置已经在Docker Compose中配置。
4. OPENAPI_URL设置被注释掉。取消注释将隐藏/docs和openapi.json的URL，这对于生产是理想的。
5. 你可以查看.env.example文件以获取有关变量的更多信息。

**前端（`nextjs-frontend/.env.local`）:**
将`.env.example`文件复制到`.env`。这些值不太可能改变，所以你可以将它们保留为它们的值。
   ```bash
   cd nextjs-frontend && cp .env.example .env
   ```

### 运行数据库
1. 使用Docker运行数据库以避免本地安装问题。构建并启动数据库容器：
   ```bash
   docker compose build db
   docker compose up -d db
   ```
2. 运行以下命令应用数据库迁移：
   ```bash
   make docker-migrate-db
   ```

### 构建项目（不使用Docker）:
要在本地设置项目环境，使用以下命令：

#### 后端

1. 导航到`fastapi_backend`目录并运行：
   ```bash
   uv sync
   ```

#### 前端
1. 导航到`nextjs-frontend`目录并运行：
   ```bash
   pnpm install
   ```

### 构建项目（使用Docker）:

1. 构建后端和前端容器：
   ```bash
   make docker-build
   ```

## 运行应用程序

如果你没有使用Docker：

1. 启动FastAPI服务器：
   ```bash
   make start-backend
   ```

2. 启动Next.js开发服务器：
   ```bash
   make start-frontend
   ```

如果你正在使用Docker：
1. 启动FastAPI服务器容器：
   ```bash
   make docker-start-backend
   ```

2. 启动Next.js开发服务器容器：
   ```bash
   make docker-start-frontend
   ```

- **后端**: 在`http://localhost:8000`访问API。
- **前端**: 在`http://localhost:3000`访问Web应用。

### 开发环境下的热重载
项目在运行应用程序时包括两个热重载，一个用于后端，一个用于前端，当它们检测到更改时会自动重新启动本地服务器。这确保了应用程序始终是最新的，无需手动重新启动。

- **后端热重载**监视后端代码的更改。
- **前端热重载**监视前端代码的更改，以及由后端生成的`openapi.json`模式的更改。

### 手动执行热重载命令
你可以手动执行热重载检测到更改时调用的相同命令：

1. 导出`openapi.json`模式：
   ```bash
   cd fastapi_backend && uv run python -m commands.generate_openapi_schema
   ```
   或使用Docker：
   ```bash
   docker compose run --rm --no-deps -T backend uv run python -m commands.generate_openapi_schema
   ```

2. 生成前端客户端：
   ```bash
   cd nextjs-frontend && npm run generate-client
   ```
   或使用Docker：
   ```bash
   docker compose run --rm --no-deps -T frontend npm run generate-client
   ```

## 测试
要运行测试，你需要运行测试数据库容器：
   ```bash
   make docker-up-test-db
   ```

然后在本地运行测试：
   ```bash
   make test-backend
   make test-frontend
   ```

或使用Docker：
   ```bash
   make docker-test-backend
   make docker-test-frontend
   ```

## 预提交设置
为了保持代码质量和一致性，项目包括两个单独的预提交配置文件：
- `.pre-commit-config.yaml`用于在本地运行预提交检查。
- `.pre-commit-config.docker.yaml`用于在Docker中运行预提交检查。

### 安装和激活预提交钩子
要激活预提交钩子，对每个配置文件运行以下命令：

- **对于本地配置文件**:
  ```bash
  pre-commit install -c .pre-commit-config.yaml
  ```

- **对于Docker配置文件**:
  ```bash
  pre-commit install -c .pre-commit-config.docker.yaml
  ```

### 电子邮件本地主机设置

要在本地设置电子邮件，你需要运行以下命令来启动[MailHog](https://github.com/mailhog/MailHog)：
   ```bash
   make docker-up-mailhog
   ```

- **电子邮件客户端**: 在`http://localhost:8025`访问电子邮件。

### 运行预提交检查
要手动运行所有文件的预提交检查，使用：

```bash
pre-commit run --all-files -c .pre-commit-config.yaml
```

或

```bash
pre-commit run --all-files -c .pre-commit-config.docker.yaml
```

### 更新预提交钩子
要将钩子更新到它们的最新版本，运行：

```bash
pre-commit autoupdate
```