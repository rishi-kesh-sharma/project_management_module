import CommonLayout from "../../layouts/CommonLayout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage404 from "@/components/custom/common/404Error/ErrorPage404.tsx";
import LoginPage from "@/components/page/Login/Login.tsx";
import RegisterPage from "@/components/page/Register/Register.tsx";
import AnalyticsPage from "@/pages/AnalyticsPage.tsx";
import ProjectDetailPage from "@/pages/ProjectDetailPage.tsx";
import { PrivateRoute } from "@/layouts/PrivateRoute.tsx";
import { TRole } from "@/@types";
import WorkspaceDetailPage from "@/pages/WorkspaceDetailPage.tsx";

interface IROLE {
  ADMIN: TRole;
  MANAGER: TRole;
  USER: TRole;
}

const ROLE: IROLE = {
  ADMIN: "admin",
  MANAGER: "manager",
  USER: "user",
};

export function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* private routes */}
        <Route
          path="/"
          element={
            <PrivateRoute roles={[ROLE.ADMIN]} component={CommonLayout} />
          }>
          <Route path="/" element={<AnalyticsPage />} />
          <Route
            path="/workspace/:workspaceId"
            element={<WorkspaceDetailPage />}
          />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        </Route>

        {/* public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage404 />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}
