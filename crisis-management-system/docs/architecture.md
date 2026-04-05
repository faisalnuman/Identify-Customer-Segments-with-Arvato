# Crisis Management System Architecture

## High-Level

- **Web App (React)** for ADMIN + USER.
- **Mobile App (React Native + Expo)** for USER only.
- **API (NestJS)** exposes REST endpoints and authorization checks.
- **PostgreSQL** persistence model (Prisma schema starter).
- **Redis / queue** extension point for notification fan-out.
- **Azure SignalR Service** integration seam for crisis chat groups (`crisis-{id}`).
- **Azure Notification Hubs** integration seam for push.
- **Email provider abstraction** (SendGrid/SMTP/Graph selectable).

## Module boundaries

- `AuthModule`: login/refresh/logout/me and role claims.
- `UsersModule`: user lifecycle and role/team assignment.
- `TeamsModule`: CMTR/CMT CRUD and membership.
- `CrisesModule`: create/list/update/close/reopen with validation.
- `ChatModule`: message history and send endpoint, plus hub group naming.
- `NotificationsModule`: event dispatch and notification log.
- `DashboardModule`: role-scoped KPI summaries.
- `AuditModule`: append-only operational audit trail.

## RBAC enforcement rules

- ADMIN: full web access; blocked from mobile.
- USER: web + mobile access within assignment scope.
- Crisis chat: only assigned users join the crisis group.
- Crisis closure: requires `resolutionSummary`.

## Primary endpoint map

- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/users`, `POST /api/users`, `PUT /api/users/:id`
- `GET /api/teams`, `POST /api/teams`, `PUT /api/teams/:id`
- `POST /api/teams/:id/members`, `DELETE /api/teams/:id/members/:userId`
- `GET /api/crises`, `POST /api/crises`, `PUT /api/crises/:id`
- `POST /api/crises/:id/close`, `POST /api/crises/:id/reopen`
- `GET /api/crises/:id/messages`, `POST /api/crises/:id/messages`
- `GET /api/notifications`, `POST /api/notifications/test`
- `GET /api/dashboard/admin`, `GET /api/dashboard/user`
