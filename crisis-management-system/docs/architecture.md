# Architecture

## Services

- Auth Service
- User Management Service
- Team Management Service
- Crisis Service
- Chat Service (SignalR groups: `crisis-{id}`)
- Notification Service (Email + Push + In-app)
- Dashboard Service
- Audit Service

## Business Rules

1. ADMIN can use **web only**.
2. USER can use web and mobile.
3. Crisis create/update/close actions write to audit logs.
4. Crisis close requires resolution summary.
5. Crisis chat access is limited to assigned members.
