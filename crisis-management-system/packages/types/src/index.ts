export type Role = 'ADMIN' | 'USER';

export type CrisisSeverity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type CrisisStatus = 'OPEN' | 'IN_PROGRESS' | 'ESCALATED' | 'CLOSED';

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: Role;
  isActive: boolean;
}

export interface Team {
  id: string;
  teamType: 'CMTR' | 'CMT';
  teamName: string;
  teamLeadUserId: string;
}

export interface Crisis {
  id: string;
  crisisCode: string;
  title: string;
  description: string;
  severity: CrisisSeverity;
  status: CrisisStatus;
  assignedCmtrId?: string;
  resolutionSummary?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuditEvent {
  entityName: string;
  entityId: string;
  action: 'CREATE' | 'UPDATE' | 'CLOSE' | 'REOPEN';
  performedBy: string;
  metadata: Record<string, unknown>;
}
