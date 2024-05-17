import CommonLayout from "../../layouts/CommonLayout.tsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
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
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <RegisterPage />,
    },
    {
      path: "/",
      handle: {
        crumb: () => {
          return <Link to={`/`}>Dashboard</Link>;
        },
      },
      element: <PrivateRoute roles={[ROLE.ADMIN]} component={CommonLayout} />,
      children: [
        {
          path: "/",
          element: <AnalyticsPage />,
        },
        {
          path: "/workspace/:workspaceId",
          element: <WorkspaceDetailPage />,
          handle: {
            crumb: (id: string) => {
              return <Link to={`/workspace/${id}`}>{id}</Link>;
            },
          },
        },
        {
          path: "/workspace/:workspaceId/:projectId",
          element: <ProjectDetailPage />,
          handle: {
            crumb: (id: string) => {
              return <Link to={`/project/${id}`}>{id}</Link>;
            },
          },
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
