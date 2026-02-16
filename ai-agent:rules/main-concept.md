# DDD Архитектура платформы для хакатонов/соревнований

## Описание продукта
Платформа для проведения онлайн-хакатонов, соревнований по анализу данных и ML-проектов в стиле Collab.Finam и Kaggle.

Подробное описание продукта см. в [PRD](./prd-hackathon-platform.md).

## Технический стек
- **Backend**: FastAPI, SQLAlchemy, Alembic, Celery, Celery Beat, Redis, PostgreSQL
- **Frontend**: Next.js
- **Авторизация**: NextAuth.js (credentials)
- **Real-time**: WebSockets