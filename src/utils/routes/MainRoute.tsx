import CommonLayout from "../../layouts/CommonLayout.tsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import LoginPage from "@/components/page/Login/Login.tsx";
import RegisterPage from "@/components/page/Register/Register.tsx";
import AnalyticsPage from "@/pages/AnalyticsPage.tsx";
import ProjectDetailPage from "@/pages/ProjectDetailPage.tsx";
import { PrivateRoute } from "@/layouts/PrivateRoute.tsx";
import { TRole } from "@/@types";
import WorkspaceDetailPage from "@/pages/WorkspaceDetailPage.tsx";

import i18n from "@/intl/i18n.ts";

import { BreadcrumbSeparator } from "@/components/ui/Breadcrumb/breadcrumb.tsx";
import CreateProjectPage from "@/pages/CreateProjectPage.tsx";
import BookmarkDetailPage from "@/pages/BookmarkDetail.tsx";
import TaskDetailPage from "@/pages/TaskDetailPage.tsx";

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
          return (
            <Link to={`/`}>
              {i18n.t("component.sidebar.menu.dashboard", "Dashboard")}
            </Link>
          );
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
            crumb: ({ workspaceId }: { workspaceId: string }) => {
              return (
                <Link to={`/workspace/${workspaceId}`}>{workspaceId}</Link>
              );
            },
          },
        },
        {
          path: "/workspace/:workspaceId/project/:projectId",
          element: <ProjectDetailPage />,
          handle: {
            crumb: ({
              workspaceId,
              projectId,
            }: {
              workspaceId: string;
              projectId: string;
            }) => {
              return (
                <>
                  {" "}
                  <Link to={`/workspace/${workspaceId}`}>{workspaceId}</Link>
                  <BreadcrumbSeparator />
                  <Link to={`/workspace/${workspaceId}/project/${projectId}`}>
                    {workspaceId}
                  </Link>
                </>
              );
            },
          },
        },
        {
          path: "/workspace/:workspaceId/project/create",
          element: <CreateProjectPage />,
          handle: {
            crumb: ({ workspaceId }: { workspaceId: string }) => {
              return (
                <Link to={`/workspace/${workspaceId}`}>{workspaceId}</Link>
              );
            },
          },
        },
        {
          path: "/bookmark/:projectId",
          element: <BookmarkDetailPage />,
          handle: {
            crumb: ({ projectId }: { projectId: string }) => {
              return <Link to={`/project/${projectId}`}>{projectId}</Link>;
            },
          },
        },
        {
          path: "/workspace/:workspaceId/project/:projectId/task/:taskId",
          element: <TaskDetailPage />,
          handle: {
            crumb: ({
              workspaceId,
              projectId,
              taskId,
            }: {
              workspaceId: string;
              projectId: string;
              taskId: string;
            }) => {
              return (
                <>
                  <Link to={`/workspace/${workspaceId}`}>{`Workspace`}</Link>
                  <BreadcrumbSeparator/>
                  <Link
                    to={`/workspace/${workspaceId}/project/${projectId}/`}>{`Project`}</Link>
                    <BreadcrumbSeparator/>
                  <Link
                    to={`/workspace/${workspaceId}/project/${projectId}/task/${taskId}`}>{`${taskId}`}</Link>
                </>
              );
            },
          },
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
