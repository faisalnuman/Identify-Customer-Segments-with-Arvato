# Crisis Management System Monorepo

This monorepo provides a production-style starter implementation for a Crisis Management System with:
- **Web app (React + TypeScript + Tailwind)** for **ADMIN** and **USER**.
- **Mobile app (React Native + Expo + TypeScript)** for **USER only**.
- **API (NestJS + TypeScript)** with modular services, JWT RBAC, audit logging, notification triggers, and SignalR-ready chat boundaries.

## Monorepo Layout

```text
crisis-management-system/
  apps/
    api/        # NestJS backend
    web/        # React web app
    mobile/     # Expo mobile app
  packages/
    types/      # Shared domain types
    ui/         # Shared presentational UI primitives
    config/     # Shared config and env helpers
  infra/
    scripts/    # Local dev/seed scripts
    deployment/ # Deployment notes/placeholders
  docs/         # Architecture and implementation notes
```

## Getting Started (Non-Docker)

1. Install Node.js 20+ and npm.
2. From `crisis-management-system`, run `npm install`.
3. Create environment files from `.env.example` values in each app.
4. Start apps:
   - API: `npm run dev --workspace @cms/api`
   - Web: `npm run dev --workspace @cms/web`
   - Mobile: `npm run dev --workspace @cms/mobile`

## Delivered Architecture

### API modules
- `auth` (JWT auth, refresh scaffolding, role guards)
- `users` (admin user management)
- `teams` (CMTR/CMT CRUD + membership)
- `crises` (create/list/update/close/reopen)
- `chat` (crisis room boundaries + SignalR integration seam)
- `notifications` (email/push abstraction)
- `dashboard` (admin/user KPI entry points)
- `audit` (centralized audit logging)

### Business rules covered in starter
- ADMIN can log in to web only.
- Mobile login blocks ADMIN role with explicit UX message.
- Crisis close requires a resolution summary.
- Crisis create/update/close emit audit events and notification hooks.
- Chat authorization is scoped to assigned crisis members.

## Suggested build sequence
- **Phase 1**: Auth + Users + Teams + Crisis CRUD
- **Phase 2**: SignalR chat + Notification providers + audit persistence
- **Phase 3**: Dashboard reporting + file attachments + mobile hardening
