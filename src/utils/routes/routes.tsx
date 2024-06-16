import LoginPage from "@/pages/Auth/LoginPage";
import { pageTitles } from "../constants/pageTitles";
import RegisterPage from "@/components/page/Register/Register";
import { PrivateRoute } from "@/layouts/PrivateRoute";
import { ROLE } from "../constants";
import CommonLayout from "@/layouts/CommonLayout";
import AnalyticsPage from "@/pages/Dashboard/AnalyticsPage";
import WorkspacesPage from "@/pages/Workspace/WorkspacesPage";
import BookmarksPage from "@/pages/Bookmark/BookmarksPage";
import ArchivesPage from "@/pages/Archive/ArchivesPage";
import WorkspaceDetailPage from "@/pages/Workspace/WorkspaceDetailPage";
import ProjectDetailPage from "@/pages/Project/ProjectDetailPage";
import CreateProjectPage from "@/pages/Project/CreateProjectPage";
import UpdateProjectPage from "@/pages/Project/UpdateProjectPage";
import CreateTaskPage from "@/pages/Task/CreateTaskPage";
import UpdateTaskPage from "@/pages/Task/UpdateTaskPage";
import BookmarkDetailPage from "@/pages/Bookmark/BookmarkDetail";
import ArchiveDetailPage from "@/pages/Archive/ArchiveDetail";
import CreateBudgetPage from "@/pages/Budget/CreateBudgetPage";
import SettingLayout from "@/layouts/SettingLayout";
import AccountSettingPage from "@/pages/Setting/AccountSettingPage";
import ProfileSettingPage from "@/pages/Setting/ProfileSettingPage";
import PreferencesSettingPage from "@/pages/Setting/PreferencesSettingPage";

// setting routes
export const settingRoutes = [
  {
    path: `/settings`,
    element: ProfileSettingPage,
    pageTitle: pageTitles.settingProfilePage,
    crumbs: () => [
      {
        label: { key: ``, fallback: `Profile` },
        path: `/settings/profile`,
      },
    ],
  },
  {
    path: `/settings/account`,
    element: AccountSettingPage,
    pageTitle: pageTitles.settingAccountPage,
    crumbs: () => [
      {
        label: { key: ``, fallback: `Account` },
        path: `/settings/account`,
      },
    ],
  },
  {
    path: `/settings/profile`,
    element: ProfileSettingPage,
    pageTitle: pageTitles.settingProfilePage,
    crumbs: () => [
      {
        label: { key: ``, fallback: `Profile` },
        path: `/settings/profile`,
      },
    ],
  },
  {
    path: `/settings/preferences`,
    element: PreferencesSettingPage,
    pageTitle: pageTitles.settingPreferencesPage,
    crumbs: () => [
      {
        label: { key: ``, fallback: `Preferences` },
        path: `/settings/preferences`,
      },
    ],
  },
];

// private routes
export const privateRoutes = [
  {
    path: `/`,
    element: AnalyticsPage,
    pageTitle: pageTitles.analyticsPage,
  },

  // bookmark related routes
  {
    path: `/bookmarks`,
    element: BookmarksPage,
    pageTitle: pageTitles.bookmarksPage,
    crumbs: () => [
      { label: { key: ``, fallback: `Bookmarks` }, path: `/bookmarks` },
    ],
  },
  {
    path: `/bookmark/:projectId`,
    element: BookmarkDetailPage,
    pageTitle: pageTitles.bookmarkDetailPage,
    crumbs: ({ projectId }: { projectId: string }) => [
      {
        label: { key: ``, fallback: `Bookmarks` },
        path: `/project/${projectId}`,
      },
    ],
  },

  // archive related routes
  {
    path: `/archives`,
    element: ArchivesPage,
    pageTitle: pageTitles.archivesPage,
    crumbs: () => [
      { label: { key: ``, fallback: `Archives` }, path: `/archives` },
    ],
  },
  {
    path: `/archive/:projectId`,
    element: ArchiveDetailPage,
    pageTitle: pageTitles.archiveDetailPage,
    crumbs: ({ projectId }: { projectId: string }) => [
      {
        label: { key: ``, fallback: `Archive` },
        path: `/project/${projectId}`,
      },
    ],
  },

  // workspace related routes
  {
    path: `/workspaces`,
    element: WorkspacesPage,
    pageTitle: pageTitles.workspacesPage,
    crumbs: () => [
      { label: { key: ``, fallback: `Workspaces` }, path: `/workspaces` },
    ],
  },
  {
    path: `/workspace/:workspaceId`,
    element: WorkspaceDetailPage,
    pageTitle: pageTitles.workspaceDetailPage,
    crumbs: ({ workspaceId }: { workspaceId: string }) => [
      {
        label: { key: ``, fallback: `Workspace` },
        path: `/workspace/${workspaceId}`,
      },
    ],
  },

  // project related routes
  {
    path: `/workspace/:workspaceId/project/:projectId`,
    element: ProjectDetailPage,
    pageTitle: pageTitles.projectDetailPage,
    crumbs: ({
      workspaceId,
      projectId,
    }: {
      workspaceId: string;
      projectId: string;
    }) => [
      {
        label: { key: ``, fallback: `Workspace` },
        path: `/workspace/${workspaceId}`,
      },
      {
        label: { key: ``, fallback: `Project` },
        path: `/workspace/${workspaceId}/project/${projectId}`,
      },
    ],
  },
  {
    path: `/workspace/:workspaceId/project/create`,
    element: CreateProjectPage,
    pageTitle: pageTitles.createProjectPage,
    crumbs: ({ workspaceId }: { workspaceId: string }) => [
      {
        label: { key: ``, fallback: `Workspace` },
        path: `/workspace/${workspaceId}`,
      },
      {
        label: { key: ``, fallback: `Create Project` },
        path: `/workspace/${workspaceId}/project/create`,
      },
    ],
  },
  {
    path: `/workspace/:workspaceId/project/:projectId/update`,
    element: UpdateProjectPage,
    pageTitle: pageTitles.updateProjectPage,
    crumbs: ({
      workspaceId,
      projectId,
    }: {
      workspaceId: string;
      projectId: string;
    }) => [
      {
        label: { key: ``, fallback: `Workspace` },
        path: `/workspace/${workspaceId}`,
      },
      {
        label: { key: ``, fallback: ` Project` },
        path: `/workspace/${workspaceId}/project/${projectId}`,
      },
      {
        label: { key: ``, fallback: ` Update` },
        path: `/workspace/${workspaceId}/project/${projectId}/update`,
      },
    ],
  },

  // task related routes
  {
    path: `/workspace/:workspaceId/project/:projectId/task/create`,
    element: CreateTaskPage,
    pageTitle: pageTitles.createTaskPage,
    crumbs: ({
      workspaceId,
      projectId,
    }: {
      workspaceId: string;
      projectId: string;
    }) => [
      {
        label: { key: ``, fallback: `Workspace` },
        path: `/workspace/${workspaceId}`,
      },
      {
        label: { key: ``, fallback: `Project` },
        path: `/workspace/${workspaceId}/project/${projectId}`,
      },
      {
        label: { key: ``, fallback: `Create Task` },
        path: `/workspace/${workspaceId}/project/${projectId}/task/create`,
      },
    ],
  },
  {
    path: `/workspace/:workspaceId/project/:projectId/task/:taskId/update`,
    element: UpdateTaskPage,
    pageTitle: pageTitles.updateTaskPage,
    crumbs: ({
      workspaceId,
      projectId,
      taskId,
    }: {
      workspaceId: string;
      projectId: string;
      taskId: string;
    }) => [
      {
        label: { key: ``, fallback: `Workspace` },
        path: `/workspace/${workspaceId}`,
      },
      {
        label: { key: ``, fallback: `Project` },
        path: `/workspace/${workspaceId}/project/${projectId}`,
      },
      {
        label: { key: ``, fallback: `Task` },
        path: `/workspace/${workspaceId}/project/${projectId}/task/${taskId}`,
      },
      {
        label: { key: ``, fallback: `Update` },
        path: `/workspace/${workspaceId}/project/${projectId}/task/${taskId}/update`,
      },
    ],
  },

  // budget related routes
  {
    path: `/workspace/:workspaceId/project/:projectId/budget/create`,
    element: CreateBudgetPage,
    pageTitle: pageTitles.createBudgetPage,
    crumbs: ({
      workspaceId,
      projectId,
    }: {
      workspaceId: string;
      projectId: string;
    }) => [
      {
        label: { key: ``, fallback: `Workspace` },
        path: `/workspace/${workspaceId}`,
      },
      {
        label: { key: ``, fallback: `Project` },
        path: `/workspace/${workspaceId}/project/${projectId}`,
      },
      {
        label: { key: ``, fallback: `Create Budget` },
        path: `/workspace/${workspaceId}/project/${projectId}/budget/create`,
      },
    ],
  },

  // settings related routes
  {
    path: `/`,
    element: PrivateRoute,
    roles: [ROLE.ADMIN],
    component: SettingLayout,
    crumbs: () => [
      {
        label: {
          key: `component.sidebar.menu.setting`,
          fallback: `Settings`,
        },
        path: `/settings`,
      },
    ],
    children: settingRoutes,
  },
];

// all routes
export const routes = [
  // public routes
  {
    path: `/login`,
    element: LoginPage,
    pageTitle: pageTitles.loginPage,
  },
  {
    path: `/signup`,
    element: RegisterPage,
    pageTitle: pageTitles.signupPage,
  },

  // private routes
  {
    path: `/`,
    element: PrivateRoute,
    // roles: [ROLE.ADMIN],
    component: CommonLayout,
    crumbs: () => [
      {
        label: {
          key: `component.sidebar.menu.dashboard`,
          fallback: `Dashboard`,
        },
        path: `/`,
      },
    ],
    children: privateRoutes,
  },
];
