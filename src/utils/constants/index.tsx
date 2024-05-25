/* eslint-disable react-refresh/only-export-components */
import { ICommandProps, IUpcomingDeadlineData } from "@/@types";
import {
  ArchiveIconOutlined,
  BookmarkIconOutlined,
  DotIconFilled,
  EmailIconReadOutlined,
  NotificationIconOutlined,
  PeopleIcon,
  ProjectsIcon,
  SettingIcon,
  TaskIcon,
  UserIconCircleOutlined,
  WorkspaceIcon,
} from "@/components/custom/common/icons/commonIcons";
import i18n from "@/intl/i18n";
import { faker } from "@faker-js/faker";
import {
  // CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  // FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import moment from "moment";

export const BASE_URL = `http://localhost:4000`;
export const avatarDropdownMenu = {
  label: "",
  items: [
    {
      id: 1,
      label: "My Account",
      isLink: true,
      link: "/account",
    },
    {
      id: 2,
      label: "Profile",
      isLink: true,
      link: "/profile",
    },
    {
      id: 3,
      label: "Dashboard",
      isLink: true,
      link: "/dashboard",
    },
    {
      id: 4,
      label: "Logout",
      isLink: false,
      link: "/team",
    },
  ],
};

export const dropdownMenus = {
  label: "Profile",
  items: [
    {
      id: 1,
      label: "My Account",
      isLink: true,
      link: "/account",
    },
    {
      id: 2,
      label: "Profile",
      isLink: true,
      link: "/profile",
    },
    {
      id: 3,
      label: "Billing",
      isLink: true,
      link: "/billing",
    },
    {
      id: 4,
      label: "Team",
      isLink: true,
      link: "/team",
    },
    {
      id: 5,
      label: "Subscription",
      isLink: true,
      link: "/subscription",
    },
  ],
};

export const userInfo = {
  name: "User",
  username: "user",
  email: "user@gmail.com",
  role: "manager",
};

export const ROLE = {
  ADMIN: "admin",
  MANAGER: "manager",
  USER: "user",
};

export const pieChartData = {
  labels: [
    i18n.t("component.home.text.projectStatus.pending", "pending"),
    i18n.t("component.home.text.projectStatus.notStarted", "Not Started"),
    i18n.t("component.home.text.projectStatus.onProgress", "On Progress"),
    i18n.t("component.home.text.projectStatus.completed", "Completed"),
  ],
  datasets: [
    {
      data: [12, 10, 8, 12],
      backgroundColor: [
        "#FF3A29",
        "#02A0FC",
        "#5541D8",
        "#34B53A",
        // "#FFB200",
        // "#FFE5D3",
      ],
    },
  ],
};

export const barChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: i18n.t("component.home.text.budgetEstimation.actual", "Actual"),
      data: [12, 10, 8, 12, 10, 8, 12, 10, 8, 12, 10, 8],
      backgroundColor: "#0E84ED",
      borderRadius: 5,
      pointStyle: "square",
    },
    {
      label: i18n.t(
        "component.home.text.budgetEstimation.expected",
        "Esperado"
      ),
      data: [8, 15, 10, 12, 10, 8, 12, 10, 8, 12, 10, 8],
      backgroundColor: "#99D045",
      borderRadius: 5,
      pointStyle: "square",
    },
  ],
};

export const overdueProjectData = {
  tableCaption: i18n.t(
    "component.home.analytics.overdueProject",
    "Overdue Projects"
  ),
  columns: [
    {
      label: i18n.t("component.home.text.overdueProject.overdue", "Overdue"),
      id: "overdue",
    },
    {
      id: "name",
      label: "Project Name",
    },
    {
      id: "status",
      label: "Status",
    },
  ],
  data: [
    {
      id: faker.string.uuid(),
      status: faker.helpers.arrayElement([
        "Pending",
        "Not Started",
        "On Progress",
        "Completed",
      ]),
      name: "Community Outreach Initiative",
      overdue: moment(faker.date.recent()).fromNow(),
    },
    {
      id: faker.string.uuid(),
      status: faker.helpers.arrayElement([
        "Pending",
        "Not Started",
        "On Progress",
        "Completed",
      ]),
      name: "Community Outreach Initiative",
      overdue: moment(faker.date.recent()).fromNow(),
    },
    {
      id: faker.string.uuid(),
      status: faker.helpers.arrayElement([
        "Pending",
        "Not Started",
        "On Progress",
        "Completed",
      ]),
      name: "Acme Product Launch",
      overdue: moment(faker.date.recent()).fromNow(),
    },
    {
      id: faker.string.uuid(),
      status: faker.helpers.arrayElement([
        "Pending",
        "Not Started",
        "On Progress",
        "Completed",
      ]),
      name: "City Park Renovation",
      overdue: moment(faker.date.recent()).fromNow(),
    },
    {
      id: faker.string.uuid(),
      status: faker.helpers.arrayElement([
        "Pending",
        "Not Started",
        "On Progress",
        "Completed",
      ]),
      name: "Office Relocation Project",
      overdue: moment(faker.date.recent()).fromNow(),
    },
  ],
};

export const upcomingDeadlineData = {
  tableCaption: "Upcoming Deadlines",
  columns: [
    {
      id: "name",
      label: "Project Name",
    },
    {
      id: "due_date",
      label: "Due Date",
    },

    {
      id: "progress",
      label: "Progress",
    },
    {
      id: "status",
      label: "status",
    },
    // {
    //   id: "priority",
    //   label: "Priority",
    // },
  ],
  data: [
    {
      id: faker.string.uuid(),
      name: faker.helpers.arrayElement(["Project"]),
      due_date: moment(faker.date.soon()).fromNow(),
      progress: faker.number.int({
        max: 100,
        min: 30,
      }),
      status: faker.helpers.arrayElement([
        "On Progress",
        "Not Started",
        "Completed",
        "Pending",
      ]) as IUpcomingDeadlineData["status"],
      // priority: faker.helpers.arrayElement([
      //   "low",
      //   "medium",
      //   "high",
      // ]) as IUpcomingDeadlineData["priority"],
    },
    {
      id: faker.string.uuid(),
      name: faker.helpers.arrayElement(["Project"]),
      due_date: moment(faker.date.soon()).fromNow(),
      progress: faker.number.int({
        max: 100,
        min: 30,
      }),
      status: faker.helpers.arrayElement([
        "On Progress",
        "Not Started",
        "Completed",
        "Pending",
      ]) as IUpcomingDeadlineData["status"],
      // priority: faker.helpers.arrayElement([
      //   "low",
      //   "medium",
      //   "high",
      // ]) as IUpcomingDeadlineData["priority"],
    },
    {
      id: faker.string.uuid(),
      name: faker.helpers.arrayElement(["Project"]),
      due_date: moment(faker.date.soon()).fromNow(),
      progress: faker.number.int({
        max: 100,
        min: 30,
      }),
      status: faker.helpers.arrayElement([
        "On Progress",
        "Not Started",
        "Completed",
        "Pending",
      ]) as IUpcomingDeadlineData["status"],
      // priority: faker.helpers.arrayElement([
      //   "low",
      //   "medium",
      //   "high",
      // ]) as IUpcomingDeadlineData["priority"],
    },
    {
      id: faker.string.uuid(),
      name: faker.helpers.arrayElement(["Project"]),
      due_date: moment(faker.date.soon()).fromNow(),
      progress: faker.number.int({
        max: 100,
        min: 30,
      }),
      status: faker.helpers.arrayElement([
        "On Progress",
        "Not Started",
        "Completed",
        "Pending",
      ]) as IUpcomingDeadlineData["status"],
      // priority: faker.helpers.arrayElement([
      //   "low",
      //   "medium",
      //   "high",
      // ]) as IUpcomingDeadlineData["priority"],
    },
    {
      id: faker.string.uuid(),
      name: faker.helpers.arrayElement(["Project"]),
      due_date: moment(faker.date.soon()).fromNow(),
      progress: faker.number.int({
        max: 100,
        min: 30,
      }),
      status: faker.helpers.arrayElement([
        "On Progress",
        "Not Started",
        "Completed",
        "Pending",
      ]) as IUpcomingDeadlineData["status"],
      // priority: faker.helpers.arrayElement([
      //   "low",
      //   "medium",
      //   "high",
      // ]) as IUpcomingDeadlineData["priority"],
    },
  ],
};

export const cardData = [
  {
    count: 10,
    label: i18n.t("component.home.analytics.workspaceNum", " Workspaces"),
    icon: <WorkspaceIcon />,
  },
  {
    count: 40,
    label: i18n.t("component.home.analytics.projectNum", " Projects"),
    icon: <ProjectsIcon />,
  },
  {
    count: 80,
    label: i18n.t("component.home.analytics.memberNum", "Members"),
    icon: <PeopleIcon />,
  },
];

export const users = [
  {
    name: faker.person.fullName(),
    profile_pic: faker.image.urlPicsumPhotos(),
  },
  {
    name: faker.person.fullName(),
    profile_pic: faker.image.urlPicsumPhotos(),
  },
  {
    name: faker.person.fullName(),
    profile_pic: faker.image.urlPicsumPhotos(),
  },
  {
    name: faker.person.fullName(),
    profile_pic: faker.image.urlPicsumPhotos(),
  },
];

export const commandData: ICommandProps = {
  shortcut: "⌘j",
  placeholder: "Press ⌘j to open command palette",
  emptyText: "No results found",
  commandGroups: [
    {
      heading: "Navigation",
      commandItems: [
        {
          icon: <SettingIcon className="mr-2 h-4 w-4" />,
          text: "Go to settings",
          link: `/settings`,
          hasLink: true,
        },
        {
          icon: <ArchiveIconOutlined className="mr-2 h-4 w-4" />,
          text: "Go to archives",
          link: `/archives`,
          hasLink: true,
        },
        {
          icon: <UserIconCircleOutlined className="mr-2 h-4 w-4" />,
          text: "Go to Edit Profile ",
          link: `/account/profile/edit`,
          hasLink: true,
        },

        {
          icon: <RocketIcon className="mr-2 h-4 w-4" />,
          text: "Go to Bookmarks ",
          link: `/bookmarks`,
          hasLink: true,
        },
        {
          icon: <RocketIcon className="mr-2 h-4 w-4" />,
          text: "Go to Notifications ",
          link: `/account/notifications`,
          hasLink: true,
        },
        {
          icon: <UserIconCircleOutlined className="mr-2 h-4 w-4" />,
          text: "Go to Profile Detail",
          link: `/account/profile`,
          hasLink: true,
        },
        {
          icon: <ProjectsIcon className="mr-2 h-4 w-4" />,
          text: "Go to Create Project ",
          link: `/project/create`,
          hasLink: true,
        },

        {
          icon: <ProjectsIcon className="mr-2 h-4 w-4" />,
          text: "Go to Update Project",
          link: `/project/update`,
          hasLink: true,
        },
        {
          icon: <TaskIcon className="mr-2 h-4 w-4" />,
          text: "Go to Create Task ",
          link: `/task/create`,
          hasLink: true,
        },
        {
          icon: <TaskIcon className="mr-2 h-4 w-4" />,
          text: "Go to Update  task",
          link: `/task/update`,
          hasLink: true,
        },
        {
          icon: <TaskIcon className="mr-2 h-4 w-4" />,
          text: "Go to Create Sub Task  ",
          link: `/sub-task/create`,
          hasLink: true,
        },
        {
          icon: <TaskIcon className="mr-2 h-4 w-4" />,
          text: "Go to Update Sub Task ",
          link: `/task/update`,
          hasLink: true,
        },
      ],
    },

    {
      heading: " My Account",
      commandItems: [
        {
          icon: <PersonIcon className="mr-2 h-4 w-4" />,
          text: "Profile",
          shortcut: "⌘P",
        },
        {
          icon: <EnvelopeClosedIcon className="mr-2 h-4 w-4" />,
          text: "Mail",
          shortcut: "⌘B",
        },
        {
          icon: <GearIcon className="mr-2 h-4 w-4" />,
          text: "Settings",
          shortcut: "⌘S",
        },
      ],
    },
    {
      heading: "Search",
      commandItems: [
        {
          icon: <WorkspaceIcon className="mr-2 h-4 w-4" />,
          text: "Search Workspace by name",
        },
        {
          icon: <ProjectsIcon className="mr-2 h-4 w-4" />,
          text: "Search Project by name",
        },

        {
          icon: <ArchiveIconOutlined className="mr-2 h-4 w-4" />,
          text: "Search Archive by name ",
        },

        {
          icon: <BookmarkIconOutlined className="mr-2 h-4 w-4" />,
          text: "Search Bookmark by name ",
        },
        {
          icon: <TaskIcon className="mr-2 h-4 w-4" />,
          text: "Search Task by name",
        },
        {
          icon: <TaskIcon className="mr-2 h-4 w-4" />,
          text: "Search sub Task by name",
        },
        {
          icon: <WorkspaceIcon className="mr-2 h-4 w-4" />,
          text: "Search Project templates by name",
        },
      ],
    },
    {
      heading: "General",
      commandItems: [
        {
          icon: <WorkspaceIcon className="mr-2 h-4 w-4" />,
          text: "Create Workspace",
        },
        {
          icon: <NotificationIconOutlined className="mr-2 h-4 w-4" />,
          text: "Clear all Notifications",
        },
        {
          icon: <EmailIconReadOutlined className="mr-2 h-4 w-4" />,
          text: "Mark all Notifications as read",
        },
      ],
    },
  ],
};

import { CalendarIcon } from "@radix-ui/react-icons";
import { IComboboxProps } from "@/@types";
import Combobox from "@/components/custom/common/Combobox/Combobox";
import SpeedDial from "@/components/custom/common/SpeedDial/SpeedDial";
import React from "react";

export const comboboxData: IComboboxProps = {
  defaultText: "Search items here...",
  emptyText: "No results found",
  placeholder: "Search here...",
  comboboxGroups: [
    {
      heading: "Suggestions",
      comboboxItems: [
        {
          icon: <CalendarIcon className="mr-2 h-4 w-4" />,
          label: "Calendar",
          value: "calendar",
        },
        {
          icon: <FaceIcon className="mr-2 h-4 w-4" />,
          label: "Search Emoji",
          value: "search-emoji",
        },
        {
          icon: <RocketIcon className="mr-2 h-4 w-4" />,
          label: "Launch",
          value: "launch",
        },
      ],
    },
    {
      heading: "Settings",
      comboboxItems: [
        {
          icon: <PersonIcon className="mr-2 h-4 w-4" />,
          label: "Profile",
          value: "profile",
        },
        {
          icon: <EnvelopeClosedIcon className="mr-2 h-4 w-4" />,
          label: "Mail",
          value: "mail",
        },
        {
          icon: <GearIcon className="mr-2 h-4 w-4" />,
          label: "Settings",
          value: "settings",
        },
      ],
    },
  ],
};

export const priorityFilterComboboxData: IComboboxProps = {
  defaultText: "Filter by priorities",
  emptyText: "No results found",
  placeholder: "Search priorities ..",
  comboboxGroups: [
    {
      heading: "Priorities",
      comboboxItems: [
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "High",
          value: "high",
        },
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "Medium",
          value: "medium",
        },
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "Low",
          value: "low",
        },
      ],
    },
  ],
};
export const statusFilterComboboxData: IComboboxProps = {
  defaultText: "Filter by  statuses",
  emptyText: "No results found",
  placeholder: "Search statuses ..",
  comboboxGroups: [
    {
      heading: "Statuses",
      comboboxItems: [
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "Pending",
          value: "pending",
        },
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "Not Started",
          value: "not-started",
        },
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "On Progress",
          value: "on-progress",
        },
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "Completed",
          value: "completed",
        },
      ],
    },
  ],
};
export const projectsTableFilterItems = [
  <Combobox comboboxData={priorityFilterComboboxData} />,
  <Combobox comboboxData={statusFilterComboboxData} />,
];

export const ProjectsTableFilters = () => {
  return (
    <SpeedDial
      children={projectsTableFilterItems}
      direction="left"
      itemWidth={180}
    />
  );
};
