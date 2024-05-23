import { IUpcomingDeadlineData } from "@/@types";
import i18n from "@/intl/i18n";
import { faker } from "@faker-js/faker";
import moment from "moment";

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
    label: i18n.t("component.home.analytics.workspaceNum", "No. of workspace"),
  },
  {
    count: 40,
    label: i18n.t("component.home.analytics.projectNum", "No. of Projects"),
  },
  {
    count: 80,
    label: i18n.t("component.home.analytics.memberNum", "No. of Members"),
  },
];
