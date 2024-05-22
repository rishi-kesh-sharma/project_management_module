import { IWorkspace, IProject } from "@/api/workspace";
import {
  AnalysticIcon,
  BookmarkIconOutlined,
  OverviewIcon,
  // GoalsIcon,
  // HomeIcon,
  // PlanningIcon,
  // ProgressIcon,
  // TaskIcon,
  // SettingIcon,
} from "@/components/icons/commonIcons";
import i18n from "@/intl/i18n";

interface ISidebarItemsProps {
  workspaces: IWorkspace[];
  bookmarks: IProject[];
  archives: IProject[];
}
export const sidebarItems = (injectables: ISidebarItemsProps) => [
  {
    // label: "Dashboard ",
    label: i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
    link: `/`,
    icon: <OverviewIcon />,
  },
  (() => {
    const workspaces = injectables.workspaces;
    const items = workspaces?.map((workspace: IWorkspace) => {
      const link = `/workspace/${workspace?.id}`;
      const items = workspace?.projects?.map((project: IProject) => {
        return { label: project.projectName, link: `/project/${project?.id}` };
      });
      return { link, label: workspace.workspaceName, items };
    });
    return {
      label: i18n.t("component.sidebar.menu.workspaces", "Workspaces"),
      link: `/workspaces`,
      icon: <AnalysticIcon />,
      items,
    };
  })(),

  (() => {
    const bookmarks = injectables?.bookmarks;
    const items = bookmarks?.map((project: IProject) => {
      const link = `/bookmark/${project.id}`;
      return { link, label: project.projectName };
    });

    return {
      label: i18n.t("component.sidebar.menu.bookmarks", "Bookmarks"),
      link: `/bookmarks`,
      icon: <BookmarkIconOutlined />,
      items,
    };
  })(),
  (() => {
    const archives = injectables?.archives;
    const items = archives?.map((project: IProject) => {
      const link = `/archive/${project.id}`;
      return { link, label: project.projectName };
    });

    return {
      label: i18n.t("component.sidebar.menu.archives", "Archives"),
      link: `/archives`,
      icon: <BookmarkIconOutlined />,
      items,
    };
  })(),
];
