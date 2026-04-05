export type Role = 'ADMIN' | 'USER';

export function assertMobileAccess(role: Role): { allowed: boolean; message?: string } {
  if (role === 'ADMIN') {
    return {
      allowed: false,
      message: 'Mobile access is restricted for Admin users. Please use the web portal.'
    };
  }

  return { allowed: true };
}
