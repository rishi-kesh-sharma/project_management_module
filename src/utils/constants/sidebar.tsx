import {
  AnalysticIcon,
  BookmarkIcon,
  GoalsIcon,
  HomeIcon,
  OverviewIcon,
  PlanningIcon,
  ProgressIcon,
  SettingIcon,
  TaskIcon,
} from "@/components/icons/commonIcons";

export const sidebarItems = () => [
  {
    label: "Analytics ",
    link: `/`,
    icon: <HomeIcon />,
  },
  {
    label: "Workspaces",
    link: `/workspaces`,
    icon: <OverviewIcon />,
    items: [
      {
        label: "Workspace1",
        link: `/workspace1`,
        icon: <AnalysticIcon />,
        items: [
          {
            label: "Project1",
            link: "projects/project1",
            icon: <AnalysticIcon />,
          },
          {
            label: "Project2",
            link: "projects/project2",
            icon: <AnalysticIcon />,
          },
          {
            label: "Project3",
            link: "projects/project3",
            icon: <AnalysticIcon />,
          },
        ],
      },
      {
        label: "Workspace2",
        link: `/workspace2`,
        icon: <AnalysticIcon />,
      },
      {
        label: "Workspace3",
        link: `/workspace3`,
        icon: <AnalysticIcon />,
      },
    ],
  },
  {
    label: "Projects",
    link: `/projects`,
    icon: <OverviewIcon />,
    items: [
      {
        label: "Project1",
        link: "projects/project1",
        icon: <AnalysticIcon />,
      },
      {
        label: "Project2",
        link: "projects/project2",
        icon: <AnalysticIcon />,
      },
      {
        label: "Project3",
        link: "projects/project3",
        icon: <AnalysticIcon />,
      },
    ],
  },

  {
    label: "Bookmarks",
    link: `/bookmarks`,
    icon: <BookmarkIcon />,
    items: [
      {
        label: "Bookmarks1",
        link: `/bookmark1`,
        icon: <BookmarkIcon />,
      },
      {
        label: "Bookmarks2",
        link: `/bookmark2`,
        icon: <BookmarkIcon />,
      },
      {
        label: "Bookmarks3",
        link: `/bookmark3`,
        icon: <BookmarkIcon />,
      },
    ],
  },
  {
    label: "Tasks",
    link: `/tasks`,
    icon: <TaskIcon />,
  },
  {
    label: "Plannings",
    link: `/plannings`,
    icon: <PlanningIcon />,
  },
  {
    label: "Progress",
    link: `/progress`,
    icon: <ProgressIcon />,
  },
  {
    label: "Goals",
    link: `/goals`,
    icon: <GoalsIcon />,
  },
  {
    label: "Settings",
    link: `/setting`,
    icon: <SettingIcon />,
  },
];
