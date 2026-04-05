import type { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">{children}</div>;
}

export function SectionTitle({ children }: PropsWithChildren) {
  return <h2 className="text-lg font-semibold text-slate-900">{children}</h2>;
}
