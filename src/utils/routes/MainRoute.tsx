import CommonLayout from "../../layouts/CommonLayout.tsx";
import { createBrowserRouter, Link, RouterProvider, useParams } from "react-router-dom";
import LoginPage from "@/components/page/Login/Login.tsx";
import RegisterPage from "@/components/page/Register/Register.tsx";
import AnalyticsPage from "@/pages/Dashboard/AnalyticsPage.tsx";
import ProjectDetailPage from "@/pages/Project/ProjectDetailPage.tsx";
import { PrivateRoute } from "@/layouts/PrivateRoute.tsx";
import { TRole } from "@/@types";
import WorkspaceDetailPage from "@/pages/Workspace/WorkspaceDetailPage.tsx";

import i18n from "@/intl/i18n.ts";

import { BreadcrumbSeparator } from "@/components/ui/Breadcrumb/breadcrumb.tsx";
import CreateProjectPage from "@/pages/Project/CreateProjectPage.tsx";
import BookmarkDetailPage from "@/pages/Bookmark/BookmarkDetail.tsx";
import TaskDetailPage from "@/pages/Task/TaskDetailPage.tsx";
import WorkspacesPage from "@/pages/Workspace/WorkspacesPage.tsx";
import { pageTitles } from "../constants/pageTitles.tsx";
import BookmarksPage from "@/pages/Bookmark/BookmarksPage.tsx";
import ArchivesPage from "@/pages/Archive/ArchivesPage.tsx";
import ArchiveDetailPage from "@/pages/Archive/ArchiveDetail.tsx";
import UpdateTaskPage from "@/pages/Task/UpdateTaskPage.tsx";
import CreateTaskPage from "@/pages/Task/CreateTaskPage.tsx";
import UpdateProjectPage from "@/pages/Project/UpdateProjectPage.tsx";
import CreateBudgetPage from "@/pages/Budget/CreateBudgetPage.tsx";
import SettingPage from "@/pages/Setting/SettingPage.tsx";
import AccountSettingPage from "@/pages/Setting/AccountSettingPage.tsx";
import ProfileSettingPage from "@/pages/Setting/ProfileSettingPage.tsx";
import PreferencesSettingPage from "@/pages/Setting/PreferencesSettingPage.tsx";
import SettingLayout from "@/layouts/SettingLayout.tsx";
import { createRoutes } from "./createRoutes.tsx";
import { routes } from "./routes.tsx";
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
  const params = useParams()
  const router = createBrowserRouter(
    createRoutes(routes, params)
    )
  return <RouterProvider router={router} />;
}
