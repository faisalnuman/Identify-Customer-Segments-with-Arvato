# Crisis Management System Monorepo

This repository contains a starter implementation for a **Crisis Management System** with:

- Web app (`apps/web`) for **ADMIN** and **USER** roles.
- Mobile app (`apps/mobile`) for **USER** role only (ADMIN is blocked).
- API (`apps/api`) built with NestJS + TypeScript.
- Shared packages for UI, config, and types.

## Monorepo Structure

```text
crisis-management-system/
  apps/
    api/
    web/
    mobile/
  packages/
    ui/
    config/
    types/
  infra/
    scripts/
    deployment/
  docs/
```

## Quick Start (non-Docker)

1. Install dependencies in each app/package.
2. Start PostgreSQL and Redis locally.
3. Configure `.env` files from examples.
4. Run API, web, and mobile independently.

> This is a scaffold designed to be extended with concrete DB migrations, providers, and production integrations.
