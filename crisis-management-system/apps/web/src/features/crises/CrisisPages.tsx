export function CrisisListPage() {
  return <div className="p-6">Crisis list with search, filters, sort, table/card view, and pagination.</div>;
}

export function CrisisDetailPage() {
  return <div className="p-6">Crisis detail with timeline, assignments, updates, and closure summary.</div>;
}

export function CrisisFormPage({ mode }: { mode: 'create' | 'edit' }) {
  return <div className="p-6">{mode === 'create' ? 'Create crisis' : 'Edit crisis'} form with RBAC field controls.</div>;
}
