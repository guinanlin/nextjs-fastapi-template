from fastapi import FastAPI
from .schemas import UserCreate, UserRead, UserUpdate
from .users import auth_backend, fastapi_users, AUTH_URL_PATH
from fastapi.middleware.cors import CORSMiddleware
from .utils import simple_generate_unique_route_id
from app.routes.items import router as items_router
from app.core.config import settings
from fastapi.openapi.docs import get_swagger_ui_html, get_redoc_html

app = FastAPI(
    generate_unique_id_function=simple_generate_unique_route_id,
    openapi_url=settings.OPENAPI_URL,
    docs_url=None,  # 禁用默认 Swagger UI
    redoc_url=None,  # 禁用默认 Redoc
)

# Middleware for CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include authentication and user management routes
app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix=f"/{AUTH_URL_PATH}/jwt",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix=f"/{AUTH_URL_PATH}",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_reset_password_router(),
    prefix=f"/{AUTH_URL_PATH}",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_verify_router(UserRead),
    prefix=f"/{AUTH_URL_PATH}",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate),
    prefix="/users",
    tags=["users"],
)

# Include items routes
app.include_router(items_router, prefix="/items")


# 自定义 Swagger UI 端点
@app.get("/docs", include_in_schema=False, tags=["docs"])
async def custom_swagger_ui():
    return get_swagger_ui_html(
        openapi_url=settings.OPENAPI_URL,
        title="文档API",
        swagger_js_url="https://cdn.bootcdn.net/ajax/libs/swagger-ui/5.0.0/swagger-ui-bundle.js",
        swagger_css_url="https://cdn.bootcdn.net/ajax/libs/swagger-ui/5.0.0/swagger-ui.css",
    )


# 自定义 Redoc 端点
@app.get("/redoc", include_in_schema=False, tags=["redoc"])
async def custom_redoc():
    return get_redoc_html(
        openapi_url=settings.OPENAPI_URL,
        title="文档API",
        redoc_js_url="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js",
    )
