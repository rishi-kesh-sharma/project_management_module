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
import TaskDetailPage from "@/pages/Task/TaskDetailPage";
import { Navigate } from "react-router";

// setting routes
export const settingRoutes = [
  {
    path: `/settings`,
    // element: ProfileSettingPage,
    element: () => {
      return <Navigate to={`/settings/profile`} />
    },
    replace: true,
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

export const projectManagementModuleRoutes = [
  {
    path: `/project`,
    element: AnalyticsPage,
    pageTitle: pageTitles.analyticsPage,
    crumbs: () => [
      {
        label: {
          key: `component.sidebar.menu.project-management`,
          fallback: `Dashboard`,
        },
        path: `/project`,
      },
    ],
  },
  // bookmark related routes
  {
    path: `/project/bookmarks`,
    element: BookmarksPage,
    pageTitle: pageTitles.bookmarksPage,
    crumbs: () => [
      { label: { key: ``, fallback: `Bookmarks` }, path: `bookmarks` },
    ],
  },
  {
    path: `/project/bookmark/:projectId`,
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
    path: `/project/archives`,
    element: ArchivesPage,
    pageTitle: pageTitles.archivesPage,
    crumbs: () => [
      { label: { key: ``, fallback: `Archives` }, path: `/archives` },
    ],
  },
  {
    path: `/project/archive/:projectId`,
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
    path: `/project/workspaces`,
    element: WorkspacesPage,
    pageTitle: pageTitles.workspacesPage,
    crumbs: () => [
      { label: { key: ``, fallback: `Workspaces` }, path: `/project/workspaces` },
    ],
  },
  {
    path: `/project/workspace/:workspaceId`,
    element: WorkspaceDetailPage,
    pageTitle: pageTitles.workspaceDetailPage,
    crumbs: ({ workspaceId }: { workspaceId: string }) => [
      {
        label: { key: ``, fallback: `Workspace` },
        path: `/project/workspace/${workspaceId}`,
      },
    ],
  },

  // project related routes
  {
    path: `/project/workspace/:workspaceId/project/:projectId`,
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
          path: `/project/workspace/${workspaceId}`,
        },
        {
          label: { key: ``, fallback: `Project` },
          path: `/project/workspace/${workspaceId}/project/${projectId}`,
        },
      ],
  },
  {
    path: `/project/workspace/:workspaceId/project/create`,
    element: CreateProjectPage,
    pageTitle: pageTitles.createProjectPage,
    crumbs: ({ workspaceId }: { workspaceId: string }) => [
      {
        label: { key: ``, fallback: `Workspace` },
        path: `/project/workspace/${workspaceId}`,
      },
      {
        label: { key: ``, fallback: `Create Project` },
        path: `/project/workspace/${workspaceId}/project/create`,
      },
    ],
  },
  {
    path: `/project/workspace/:workspaceId/project/:projectId/update`,
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
          path: `/project/workspace/${workspaceId}`,
        },
        {
          label: { key: ``, fallback: ` Project` },
          path: `/project/workspace/${workspaceId}/project/${projectId}`,
        },
        {
          label: { key: ``, fallback: ` Update` },
          path: `/project/workspace/${workspaceId}/project/${projectId}/update`,
        },
      ],
  },

  // task related routes
  {
    path: `/project/workspace/:workspaceId/project/:projectId/task/:taskId`,
    element: TaskDetailPage,
    pageTitle: pageTitles.taskDetailPage,
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
          path: `/project/workspace/${workspaceId}`,
        },
        {
          label: { key: ``, fallback: `Project` },
          path: `/project/workspace/${workspaceId}/project/${projectId}`,
        },
        {
          label: { key: ``, fallback: `Task` },
          path: `/project/workspace/${workspaceId}/project/${projectId}/task/${taskId}`,
        },
      ],
  },
  {
    path: `/project/workspace/:workspaceId/project/:projectId/task/create`,
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
          path: `/project/workspace/${workspaceId}`,
        },
        {
          label: { key: ``, fallback: `Project` },
          path: `/project/workspace/${workspaceId}/project/${projectId}`,
        },
        {
          label: { key: ``, fallback: `Create Task` },
          path: `/project/workspace/${workspaceId}/project/${projectId}/task/create`,
        },
      ],
  },
  {
    path: `/project/workspace/:workspaceId/project/:projectId/task/:taskId/update`,
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
          path: `/project/workspace/${workspaceId}`,
        },
        {
          label: { key: ``, fallback: `Project` },
          path: `/project/workspace/${workspaceId}/project/${projectId}`,
        },
        {
          label: { key: ``, fallback: `Task` },
          path: `/project/workspace/${workspaceId}/project/${projectId}/task/${taskId}`,
        },
        {
          label: { key: ``, fallback: `Update` },
          path: `/project/workspace/${workspaceId}/project/${projectId}/task/${taskId}/update`,
        },
      ],
  },

  // budget related routes
  {
    path: `/project/workspace/:workspaceId/project/:projectId/budget/create`,
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
          path: `/project/workspace/${workspaceId}`,
        },
        {
          label: { key: ``, fallback: `Project` },
          path: `/project/workspace/${workspaceId}/project/${projectId}`,
        },
        {
          label: { key: ``, fallback: `Create Budget` },
          path: `/project/workspace/${workspaceId}/project/${projectId}/budget/create`,
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
    crumbs: () => [
      {
        label: {
          key: `component.sidebar.menu.dashboard`,
          fallback: `Dashboard`,
        },
        path: `/`,
      },
    ],
  },
  // project management modules related routes
  {
    path: `/project`,
    roles: [ROLE.ADMIN],
    crumbs: () => [
      {
        label: {
          key: `component.sidebar.menu.project-management`,
          fallback: `Project`,
        },
        path: `/project`,
      },
    ],
    children: projectManagementModuleRoutes,
  },
  // settings module related routes
  {
    path: `/settings`,
    component: SettingLayout,
    element: SettingLayout,
    roles: [ROLE.ADMIN],
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
    component: CommonLayout,
    children: privateRoutes,
  },
];
