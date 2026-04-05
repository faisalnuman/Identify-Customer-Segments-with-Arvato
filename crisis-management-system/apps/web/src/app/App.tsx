import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../features/auth/LoginPage';
import { AdminDashboardPage, UserDashboardPage } from '../features/dashboard/DashboardPages';
import { CrisisListPage, CrisisDetailPage, CrisisFormPage } from '../features/crises/CrisisPages';
import { TeamManagementPage } from '../features/teams/TeamManagementPage';
import { UserManagementPage } from '../features/users/UserManagementPage';
import { CrisisChatPage } from '../features/chat/CrisisChatPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/user/dashboard" element={<UserDashboardPage />} />
        <Route path="/crises" element={<CrisisListPage />} />
        <Route path="/crises/new" element={<CrisisFormPage mode="create" />} />
        <Route path="/crises/:id" element={<CrisisDetailPage />} />
        <Route path="/crises/:id/edit" element={<CrisisFormPage mode="edit" />} />
        <Route path="/crises/:id/chat" element={<CrisisChatPage />} />
        <Route path="/teams" element={<TeamManagementPage />} />
        <Route path="/users" element={<UserManagementPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
