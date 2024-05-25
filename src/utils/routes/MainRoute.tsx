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
import WorkspacesPage from "@/pages/WorkspacesPage.tsx";
import { pageTitles } from "../constants/pageTitles.tsx";
import BookmarksPage from "@/pages/BookmarksPage.tsx";
import ArchivesPage from "@/pages/ArchivesPage.tsx";
import ArchiveDetailPage from "@/pages/ArchiveDetail.tsx";

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
      element: <LoginPage title={pageTitles.loginPage} />,
    },
    {
      path: "/signup",
      element: <RegisterPage title={pageTitles.signupPage} />,
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
          element: <AnalyticsPage title={pageTitles.analyticsPage} />,
        },
        {
          path: "/workspaces",
          element: <WorkspacesPage title={pageTitles.workspacesPage} />,
          handle: {
            crumb: () => {
              return <Link to={`/workspaces}`}>{`Workspaces`}</Link>;
            },
          },
        },
        {
          path: "/bookmarks",
          element: <BookmarksPage title={pageTitles.bookmarksPage} />,
          handle: {
            crumb: () => {
              return <Link to={`/bookmarks}`}>{`Bookmarks`}</Link>;
            },
          },
        },
        {
          path: "/archives",
          element: <ArchivesPage title={pageTitles.archivesPage} />,
          handle: {
            crumb: () => {
              return <Link to={`/archives}`}>{`Archives`}</Link>;
            },
          },
        },
        {
          path: "/workspace/:workspaceId",
          element: (
            <WorkspaceDetailPage title={pageTitles.workspaceDetailPage} />
          ),
          handle: {
            crumb: ({ workspaceId }: { workspaceId: string }) => {
              return (
                <Link to={`/workspace/${workspaceId}`}>{`Workspace`}</Link>
              );
            },
          },
        },
        {
          path: "/workspace/:workspaceId/project/:projectId",
          element: <ProjectDetailPage title={pageTitles.projectDetailPage} />,
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
                  <Link to={`/workspace/${workspaceId}`}>{`Workspace`}</Link>
                  <BreadcrumbSeparator />
                  <Link to={`/workspace/${workspaceId}/project/${projectId}`}>
                    {`Project`}
                  </Link>
                </>
              );
            },
          },
        },
        {
          path: "/workspace/:workspaceId/project/create",
          element: <CreateProjectPage title={pageTitles.createProjectPage} />,
          handle: {
            crumb: ({ workspaceId }: { workspaceId: string }) => {
              return (
                <Link to={`/workspace/${workspaceId}`}>{`Workspace`}</Link>
              );
            },
          },
        },
        {
          path: "/bookmark/:projectId",
          element: <BookmarkDetailPage title={pageTitles.bookmarkDetailPage} />,
          handle: {
            crumb: ({ projectId }: { projectId: string }) => {
              return <Link to={`/project/${projectId}`}>{`Bookmark`}</Link>;
            },
          },
        },
        {
          path: "/archive/:projectId",
          element: <ArchiveDetailPage title={pageTitles.archiveDetailPage} />,
          handle: {
            crumb: ({ projectId }: { projectId: string }) => {
              return <Link to={`/project/${projectId}`}>{`Archive`}</Link>;
            },
          },
        },

        {
          path: "/workspace/:workspaceId/project/:projectId/task/:taskId",
          element: <TaskDetailPage title={pageTitles.taskDetailPage} />,
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
                  <BreadcrumbSeparator />
                  <Link
                    to={`/workspace/${workspaceId}/project/${projectId}/`}>{`Project`}</Link>
                  <BreadcrumbSeparator />
                  <Link
                    to={`/workspace/${workspaceId}/project/${projectId}/task/${taskId}`}>{`${`Task`}`}</Link>
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
