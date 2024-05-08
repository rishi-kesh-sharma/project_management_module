import {
  AnalysticIcon,
  GoalsIcon,
  HomeIcon,
  OverviewIcon,
  PlanningIcon,
  ProgressIcon,
  SettingIcon,
  TaskIcon,
} from "@/components/icons";

export const sidebarItems = () => [
  {
    label: "Home ",
    link: `/dashboard`,
    icon: <HomeIcon />,
  },
  {
    label: "Overview",
    link: `/overview`,
    icon: <OverviewIcon />,
    items: [
      {
        label: "Analystic",
        link: `/analystic`,
        icon: <AnalysticIcon />,
      },
      {
        label: "Analystic",
        link: `/analystic`,
        icon: <AnalysticIcon />,
      },
      {
        label: "Analystic",
        link: `/analystic`,
        icon: <AnalysticIcon />,
      },
    ],
  },
  {
    label: "Analystic",
    link: `/analystic`,
    icon: <AnalysticIcon />,
    items: [
      {
        label: "Analystic",
        link: `/analystic`,
        icon: <AnalysticIcon />,
      },
      {
        label: "Analystic",
        link: `/analystic`,
        icon: <AnalysticIcon />,
      },
      {
        label: "Analystic",
        link: `/analystic`,
        icon: <AnalysticIcon />,
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
