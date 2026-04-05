-- Starter schema for crisis management system
CREATE TABLE users (
  id UUID PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('ADMIN', 'USER')),
  is_active BOOLEAN DEFAULT TRUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE teams (
  id UUID PRIMARY KEY,
  team_type TEXT NOT NULL CHECK (team_type IN ('CMTR', 'CMT')),
  team_name TEXT NOT NULL,
  team_lead_user_id UUID,
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE crises (
  id UUID PRIMARY KEY,
  crisis_code TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  severity TEXT NOT NULL CHECK (severity IN ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL')),
  category TEXT,
  location TEXT,
  status TEXT NOT NULL CHECK (status IN ('OPEN', 'IN_PROGRESS', 'ESCALATED', 'CLOSED')),
  created_by UUID,
  assigned_cmtr_id UUID,
  resolution_summary TEXT,
  closed_by UUID,
  closed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
