import { IWorkspace, IProject } from "@/api/workspace";
import {
  AnalysticIcon,
  BookmarkIcon,
  OverviewIcon,
  // GoalsIcon,
  // HomeIcon,
  // PlanningIcon,
  // ProgressIcon,
  // TaskIcon,
  // SettingIcon,
} from "@/components/icons/commonIcons";

export const sidebarItems = (injectables: {
  workspaces: IWorkspace[];
  bookmarks: IProject[];
}) => [
  {
    label: "Dashboard ",
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
      label: "Workspaces",
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
      label: "Bookmarks",
      link: `/bookmarks`,
      icon: <BookmarkIcon />,
      items,
    };
  })(),
];
