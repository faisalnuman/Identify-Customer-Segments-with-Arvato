import { Card, SectionTitle } from '@cms/ui';

export function AdminDashboardPage() {
  return (
    <section className="space-y-4 p-6">
      <SectionTitle>Admin Dashboard</SectionTitle>
      <Card>Global KPI cards: open, critical, closed, average closure time, team workload.</Card>
    </section>
  );
}

export function UserDashboardPage() {
  return (
    <section className="space-y-4 p-6">
      <SectionTitle>User Dashboard</SectionTitle>
      <Card>Assigned crises, personal workload, and recent activity only.</Card>
    </section>
  );
}
