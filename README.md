<p align="center">
  <a href="https://www.vintasoftware.com/blog/next-js-fastapi-template"><img src="https://cdn.prod.website-files.com/64b9f7763232fd7832edb089/67bcfe16c484e4960dcbf7fe_nextjs_and_fast_api_thumb.webp" alt="Next.js FastAPI Template"></a>
</p>
<p align="center">
    <em>Next.js FastAPI Template: Python + Modern TypeScript stack with Zod validation.</em>
</p>
<p align="center">
<a href="https://github.com/vintasoftware/nextjs-fastapi-template/actions/workflows/ci.yml" target="_blank">
    <img src="https://github.com/vintasoftware/nextjs-fastapi-template/actions/workflows/ci.yml/badge.svg" alt="CI">
</a>
<a href="https://coveralls.io/github/vintasoftware/nextjs-fastapi-template" target="_blank">
    <img src="https://coveralls.io/repos/github/vintasoftware/nextjs-fastapi-template/badge.svg" alt="Coverage">
</a>
</p>

---
**Source Code**: <a href="https://github.com/vintasoftware/nextjs-fastapi-template" target="_blank">https://github.com/vintasoftware/nextjs-fastapi-template</a>

---

# Next.js FastAPI Template
Introducing the Next.js FastAPI Template: A cutting-edge foundation for modern full-stack development that seamlessly integrates Next.js with FastAPI. This template combines Python's backend power with TypeScript's frontend, enhanced by Zod's robust type validation. Perfect for developers seeking a production-ready architecture that balances performance, type safety, and developer experience in one cohesive package.

## Table of Contents
* [About](#about)
* [Production-Ready Authentication & Dashboard](#production-ready-authentication-and-dashboard)
* [Getting Started with This Template](#getting-started-with-this-template)
* [Setup](#local-setup)
  * [Installing Required Tools](#installing-required-tools)
    * [1. uv](#1-uv)
    * [2. Node.js, npm and pnpm](#2-nodejsm-npm-and-pnpm)
    * [3. Docker](#3-docker)
    * [4. Docker Compose](#4-docker-compose)
  * [Setting Up Environment Variables](#setting-up-environment-variables)
  * [Running the Database](#running-the-database)
  * [Build the project (without Docker)](#build-the-project-without-docker)
    * [Backend](#backend)
    * [Frontend](#frontend)
  * [Build the project (with Docker)](#build-the-project-with-docker)
    * [Backend](#backend)
    * [Frontend](#frontend)
* [Running the Application](#running-the-application)
* [Hot Reload on development](#hot-reload-on-development)
  * [Manual Execution of Hot Reload Commands](#manual-execution-of-hot-reload-commands)
* [Testing](#testing)
* [Email Localhost Setup](#email-localhost-setup)
* [Pre-Commit Setup](#pre-commit-setup)
  * [Installing and Activating Pre-Commit Hooks](#installing-and-activating-pre-commit-hooks)
  * [Running Pre-Commit Checks](#running-pre-commit-checks)
  * [Updating Pre-Commit Hooks](#updating-pre-commit-hooks)
* [Alembic Database Migrations](#alembic-database-migrations)
* [GitHub Actions](#github-actions)
  * [Secrets Configuration](#secrets-configuration)
* [Production Deployment](#production-deployment)
* [CI (GitHub Actions) Setup for Production Deployment](#ci-github-actions-setup-for-production-deployment)
* [Post-Deployment Configuration](#post-deployment-configuration)
* [Makefile](#makefile)
* [Important Considerations](#important-considerations)
* [Contributing](#contributing)
* [Share your project!](#share-your-project)
* [Commercial Support](#commercial-support)

## About
This template streamlines building APIs with [FastAPI](https://fastapi.tiangolo.com/) and dynamic frontends with [Next.js](https://nextjs.org/). It integrates the backend and frontend using [@hey-api/openapi-ts](https://github.com/hey-api/openapi-ts) to generate a type-safe client, with automated watchers to keep the OpenAPI schema and client updated, ensuring a smooth and synchronized development workflow.  

- [Next.js](https://nextjs.org/): Fast, SEO-friendly frontend framework  
- [FastAPI](https://fastapi.tiangolo.com/): High-performance Python backend  
- [SQLAlchemy](https://www.sqlalchemy.org/): Powerful Python SQL toolkit and ORM
- [PostgreSQL](https://www.postgresql.org/): Advanced open-source relational database
- [Pydantic](https://docs.pydantic.dev/): Data validation and settings management using Python type annotations
- [Zod](https://zod.dev/) + [TypeScript](https://www.typescriptlang.org/): End-to-end type safety and schema validation  
- [fastapi-users](https://fastapi-users.github.io/fastapi-users/): Complete authentication system with:
  - Secure password hashing by default
  - JWT (JSON Web Token) authentication
  - Email-based password recovery
- [Shadcn/ui](https://ui.shadcn.com/): Beautiful and customizable React components
- [OpenAPI-fetch](https://github.com/Hey-AI/openapi-fetch): Fully typed client generation from OpenAPI schema  
- [fastapi-mail](https://sabuhish.github.io/fastapi-mail/): Efficient email handling for FastAPI applications
- [uv](https://docs.astral.sh/uv/): An extremely fast Python package and project manager
- [Pytest](https://docs.pytest.org/): Powerful Python testing framework
- Code Quality Tools:
  - [Ruff](https://github.com/astral-sh/ruff): Fast Python linter
  - [ESLint](https://eslint.org/): JavaScript/TypeScript code quality
- Hot reload watchers:  
  - Backend: [Watchdog](https://github.com/gorakhargosh/watchdog) for monitoring file changes  
  - Frontend: [Chokidar](https://github.com/paulmillr/chokidar) for live updates  
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/): Consistent environments for development and production
- [MailHog](https://github.com/mailhog/MailHog): Email server for development
- [Pre-commit hooks](https://pre-commit.com/): Enforce code quality with automated checks  
- [OpenAPI JSON schema](https://swagger.io/specification/): Centralized API documentation and client generation  

With this setup, you'll save time and maintain a seamless connection between your backend and frontend, boosting productivity and reliability.

## Production-Ready Authentication & Dashboard Features
This template comes with a pre-configured authentication system and a simple dashboard interface, allowing you to start building your application with user management features immediately.

## Getting Started with This Template

To use this template for your own project:

1. Create a new repository using this template by following GitHub's [template repository guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template)
2. Clone your new repository and navigate to it: `cd your-project-name`
3. Update this README:
   - Change the project name in the first line
   - Remove this "Getting Started with This Template" section
4. Make sure you have Python 3.12 installed

Once completed, proceed to the [Setup](#setup) section below.

## Setup

### Installing Required Tools

#### 1. uv
uv is used to manage Python dependencies in the backend. Install uv by following the [official installation guide](https://docs.astral.sh/uv/getting-started/installation/).

#### 2. Node.js, npm and pnpm
To run the frontend, ensure Node.js and npm are installed. Follow the [Node.js installation guide](https://nodejs.org/en/download/).
After that, install pnpm by running:
```bash
npm install -g pnpm
```

#### 3. Docker
Docker is needed to run the project in a containerized environment. Follow the appropriate installation guide:

- [Install Docker for Mac](https://docs.docker.com/docker-for-mac/install/)
- [Install Docker for Windows](https://docs.docker.com/docker-for-windows/install/)
- [Get Docker CE for Linux](https://docs.docker.com/install/linux/docker-ce/)

#### 4. Docker Compose
Ensure `docker-compose` is installed. Refer to the [Docker Compose installation guide](https://docs.docker.com/compose/install/).

### Setting Up Environment Variables

**Backend (`fastapi_backend/.env`):**
Copy the `.env.example` files to `.env` and update the variables with your own values.
   ```bash
   cd fastapi_backend && cp .env.example .env
   ```
1. You will only need to update the secret keys. You can use the following command to generate a new secret key:
   ```bash
   python3 -c "import secrets; print(secrets.token_hex(32))"
   ```
2. The DATABASE, MAIL, OPENAPI, CORS, and FRONTEND_URL settings are ready to use locally.
3. The DATABASE and MAIL settings are already configured in Docker Compose if you're using Docker.
4. The OPENAPI_URL setting is commented out. Uncommenting it will hide the /docs and openapi.json URLs, which is ideal for production.
5. You can check the .env.example file for more information about the variables.

**Frontend (`nextjs-frontend/.env.local`):**
Copy the `.env.example` files to `.env`. These values are unlikely to change, so you can leave them as they are.
   ```bash
   cd nextjs-frontend && cp .env.example .env
   ```

### Running the Database
1. Use Docker to run the database to avoid local installation issues. Build and start the database container:
   ```bash
   docker compose build db
   docker compose up -d db
   ```
2. Run the following command to apply database migrations:
   ```bash
   make docker-migrate-db
   ```

### Build the Project (without Docker):
To set the project environment locally, use the following commands:

#### Backend

1. Navigate to the `fastapi_backend` directory and run:
   ```bash
   uv sync
   ```

#### Frontend
1. Navigate to the `nextjs-frontend` directory and run:
   ```bash
   pnpm install
   ```

### Build the Project (with Docker):

1. Build the backend and frontend containers:
   ```bash
   make docker-build
   ```

## Running the Application

If you are not using Docker:

1. Start the FastAPI server:
   ```bash
   make start-backend
   ```

2. Start the Next.js development server:
   ```bash
   make start-frontend
   ```

If you are using Docker:
1. Start the FastAPI server container:
   ```bash
   make docker-start-backend
   ```
2. Start the Next.js development server container:
   ```bash
   make docker-start-frontend
   ```

- **Backend**: Access the API at `http://localhost:8000`.
- **Frontend**: Access the web application at `http://localhost:3000`.

### Hot Reload on Development
The project includes two hot reloads running the application, one for the backend and one for the frontend. These automatically restart local servers when they detect changes, ensuring that the application is always up to date without needing manual restarts.

- The **backend hot reload** monitors changes to the backend code.
- The **frontend hot reload** monitors changes to the frontend code and the `openapi.json` schema generated by the backend.

### Manual Execution of Hot Reload Commands
You can manually execute the same commands that the hot reloads call when they detect a change:

1. To export the `openapi.json` schema:
   ```bash
   cd fastapi_backend && uv run python -m commands.generate_openapi_schema
   ```
   or using Docker:
   ```bash
   docker compose run --rm --no-deps -T backend uv run python -m commands.generate_openapi_schema
   ```

2. To generate the frontend client:
   ```bash
   cd nextjs-frontend && npm run generate-client
   ```
   or using Docker:
   ```bash
   docker compose run --rm --no-deps -T frontend npm run generate-client
   ```

## Testing
To run the tests, you need to run the test database container:
   ```bash
   make docker-up-test-db
   ```

Then run the tests locally:
   ```bash
   make test-backend
   make test-frontend
   ```

Or using Docker:
   ```bash
   make docker-test-backend
   make docker-test-frontend
   ```
## Pre-Commit Setup
To maintain code quality and consistency, the project includes two separate pre-commit configuration files:
- `.pre-commit-config.yaml` is used to run pre-commit checks locally.
- `.pre-commit-config.docker.yaml` is used to run pre-commit checks within Docker.

### Installing and Activating Pre-Commit Hooks
To activate pre-commit hooks, run the following commands for each configuration file:

- **For the local configuration file**:
  ```bash
  pre-commit install -c .pre-commit-config.yaml
  ```

- **For the Docker configuration file**:
  ```bash
  pre-commit install -c .pre-commit-config.docker.yaml
  ```

### Localhost Email Server Setup

To set up the email server locally, you need to start [MailHog](https://github.com/mailhog/MailHog) by running the following command:
   ```bash
   make docker-up-mailhog
   ```

- **Email client**: Access the email at `http://localhost:8025`.

### Running Pre-Commit Checks
To manually run the pre-commit checks on all files, use:

```bash
pre-commit run --all-files -c .pre-commit-config.yaml
```

or

```bash
pre-commit run --all-files -c .pre-commit-config.docker.yaml
```

### Updating Pre-Commit Hooks
To update the hooks to their latest versions, run:

```bash
pre-commit autoupdate
```
## Alembic Database Migrations
If you need to create a new Database Migration:
   ```bash
   make docker-db-schema migration_name="add users"
   ```
then apply the migration to the database:
   ```bash
   make docker-migrate-db
   ```

## GitHub Actions
This project has a pre-configured GitHub Actions setup to enable CI/CD. The workflow configuration files are inside the .github/workflows directory. You can customize these workflows to suit your project's needs better.

### Secrets Configuration
For the workflows to function correctly, add the secret keys to your GitHub repository's settings. Navigate to Settings > Secrets and variables > Actions and add the following keys:
```
DATABASE_URL: The connection string for your primary database.
TEST_DATABASE_URL: The connection string for your test database.
ACCESS_SECRET_KEY: The secret key for access token generation.
RESET_PASSWORD_SECRET_KEY: The secret key for reset password functionality.
VERIFICATION_SECRET_KEY: The secret key for email or user verification.
```

## Production Deployment

### Overview

 Deploying to **Vercel** is supported, with dedicated buttons for the **Frontend** and **Backend** applications. Both require specific configurations during and after deployment to ensure proper functionality.

---

### Frontend Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvintasoftware%2Fnextjs-fastapi-template%2Ftree%2Fmain%2Fnextjs-frontend&env=API_BASE_URL&envDescription=The%20API_BASE_URL%20is%20the%20backend%20URL%20where%20the%20frontend%20sends%20requests.)

1. **Deploying the Frontend**  
   - Click the **Frontend** button above to start the deployment process.  
   - During deployment, you will be prompted to set the `API_BASE_URL`. Use a placeholder value (e.g., `https://`) for now, as this will be updated with the backend URL later.  
   - Complete the deployment process [here](#post-deployment-configuration).

### Backend Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvintasoftware%2Fnextjs-fastapi-template%2Ftree%2Fmain%2Ffastapi_backend&env=CORS_ORIGINS,ACCESS_SECRET_KEY,RESET_PASSWORD_SECRET_KEY,VERIFICATION_SECRET_KEY&stores=%5B%7B%22type%22%3A%22postgres%22%7D%5D)

1. **Deploying the Backend**  
   - Click the **Backend** button above to begin deployment.
   - First, set up the database. The connection is automatically configured, so follow the steps, and it should work by default.
   - During the deployment process, you will be prompted to configure the following environment variables:

     - **CORS_ORIGINS**  
       - Set this to `["*"]` initially to allow all origins. Later, you can update this with the frontend URL.

     - **ACCESS_SECRET_KEY**, **RESET_PASSWORD_SECRET_KEY**, **VERIFICATION_SECRET_KEY**  
       - During deployment, you can temporarily set these secret keys as plain strings (e.g., `examplekey`). However, you should generate secure keys and update them after the deployment in the **Post-Deployment Configuration** section.

   - Complete the deployment process [here](#post-deployment-configuration).


## CI (GitHub Actions) Setup for Production Deployment

We provide the **prod-backend-deploy.yml** and **prod-frontend-deploy.yml** files to enable continuous integration through Github Actions. To connect them to GitHub, simply move them to the .github/workflows/ directory.

You can do it with the following commands:
   ```bash
    mv prod-backend-deploy.yml .github/workflows/prod-backend-deploy.yml
    mv prod-frontend-deploy.yml .github/workflows/prod-frontend-deploy.yml
   ```

### Prerequisites
1. **Create a Vercel Token**:  
   - Generate your [Vercel Access Token](https://vercel.com/account/tokens).  
   - Save the token as `VERCEL_TOKEN` in your GitHub secrets.

2. **Install Vercel CLI**:  
   ```bash
   pnpm i -g vercel@latest
   ```
3. Authenticate your account.
    ```bash
   vercel login
   ```
### Database Creation (Required)

   1. **Choosing a Database**
      - You can use your database hosted on a different service or opt for the [Neon](https://neon.tech/docs/introduction) database, which integrates seamlessly with Vercel.

   2. **Setting Up a Neon Database via Vercel**
      - In the **Projects dashboard** page on Vercel, navigate to the **Storage** section.  
      - Select the option to **Create a Database** to provision a Neon database.

   3. **Configuring the Database URL**
      - After creating the database, retrieve the **Database URL** provided by Neon.  
      - Include this URL in your **Environment Variables** under `DATABASE_URL`.  

   4. **Migrating the Database**
      - The database migration will happen automatically during the GitHub action deployment, setting up the necessary tables and schema.
### Frontend Setup

1. Link the nextjs-frontend Project

2. Navigate to the nextjs-frontend directory and run:
   ```bash
   cd nextjs-frontend
   vercel link
   ```
3. Follow the prompts:
   - Link to existing project? No
   - Modify settings? No

4. Save Project IDs and Add GitHub Secrets:
  - Open `nextjs-frontend/.vercel/project.json` and add the following to your GitHub repository secrets:
    - `projectId` → `VERCEL_PROJECT_ID_FRONTEND`
    - `orgId` → `VERCEL_ORG_ID`

### Backend Setup

1. Link the fastapi_backend Project

2. Navigate to the fastapi_backend directory and run:
   ```bash
   cd fastapi_backend
   vercel link --local-config=vercel.prod.json
   ```
   - We use a specific configuration file to set the --local-config value.
3. Follow the prompts:
   - Link to existing project? No
   - Modify settings? No

4. Save Project IDs and Add GitHub Secrets:
  - Open `fastapi_backend/.vercel/project.json` and add the following to your GitHub repository secrets:
    - `projectId` → `VERCEL_PROJECT_ID_BACKEND`
    - `orgId` → `VERCEL_ORG_ID` (Only in case you haven't added that before)

### Notes
- Once everything is set up, run `git push`, and the deployment will automatically occur.
- Please ensure you complete the setup for both the frontend and backend separately.
- Refer to the [Vercel CLI Documentation](https://vercel.com/docs/cli) for more details.
- You can find the project_id in the vercel web project settings.
- You can find the organization_id in the vercel web organization settings.

## **Post-Deployment Configuration**

### Frontend
   - Navigate to the **Settings** page of the deployed frontend project.  
   - Access the **Environment Variables** section.  
   - Update the `API_BASE_URL` variable with the backend URL once the backend deployment is complete.

### Backend
   - Access the **Settings** page of the deployed backend project.  
   - Navigate to the **Environment Variables** section and update the following variables with secure values:

     - **CORS_ORIGINS**  
       - Once the frontend is deployed, replace `["*"]` with the actual frontend URL.

     - **ACCESS_SECRET_KEY**  
       - Generate a secure key for API access and set it here.  

     - **RESET_PASSWORD_SECRET_KEY**
       - Generate a secure key for password reset functionality and set it.

     - **VERIFICATION_SECRET_KEY**  
       - Generate a secure key for user verification and configure it.

   - For detailed instructions on setting these secret keys, please look at the section on [Setting up Environment Variables](#setting-up-environment-variables).

### Fluid Serverless Activation
[Fluid](https://vercel.com/docs/functions/fluid-compute) is Vercel's new concurrency model for serverless functions, allowing them to handle multiple 
requests per execution instead of spinning up a new instance for each request. This improves performance, 
reduces cold starts, and optimizes resource usage, making serverless workloads more efficient.

Follow this [guide](https://vercel.com/docs/functions/fluid-compute#how-to-enable-fluid-compute) to activate Fluid.

## Makefile

This project includes a `Makefile` that provides a set of commands to simplify everyday tasks such as starting the backend and frontend servers, running tests, building Docker containers, and more.

### Available Commands

You can see all available commands and their descriptions by running the following command in your terminal:

```bash
make help
```

## Important Considerations
- **Environment Variables**: Ensure your `.env` files are up-to-date.
- **Database Setup**: It is recommended to use Docker to run the database, even when running the backend and frontend locally, to simplify configuration and avoid potential conflicts.
- **Consistency**: It is **not recommended** to switch between running the project locally and using Docker, as this may cause permission issues or unexpected problems. You can choose one method and stick with it.

## Contributing

If you wish to contribute to this project, please discuss the change you want to make via an [issue](https://github.com/vintasoftware/nextjs-fastapi-template/issues).

Check our [contributing guide](https://github.com/vintasoftware/nextjs-fastapi-template/blob/main/CONTRIBUTING.md) to learn more about our development process and how you can test your changes to the boilerplate.

## Share your project!

You can use our template to kick-start your project or streamline your efforts to secure funding. Starting with a strong foundation can make your product more resilient and allow you to focus on what matters most: delivering value to your customers.

If our template has been part of your journey, we'd love to hear about it! Share your story with us, and we’ll help spread the word about your project through our social media channels, giving it a broader reach.

Please email us at contact@vintasoftware.com telling us more about how our template helped you boost your project.

## Commercial Support

[![alt text](https://avatars2.githubusercontent.com/u/5529080?s=80&v=4 "Vinta Logo")](https://www.vinta.com.br/)

This project is maintained by [Vinta Software](https://www.vinta.com.br/) and is used in products of Vinta's clients. We are always looking for exciting work! If you need any commercial support, feel free to get in touch: contact@vinta.com.br
