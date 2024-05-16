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
  labels: ["Pending", "Not Started", "On Progress", "Completed"],
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
      label: "Actual",
      data: [12, 10, 8, 12, 10, 8, 12, 10, 8, 12, 10, 8],
      backgroundColor: "#0E84ED",
      borderRadius: 5,
      pointStyle: "square",
    },
    {
      label: "Expected",
      data: [8, 15, 10, 12, 10, 8, 12, 10, 8, 12, 10, 8],
      backgroundColor: "#99D045",
      borderRadius: 5,
    },
  ],
};

export const basicTableData = {
  // tableCaption: "A list of your recent invoices",
  tableCaption: "Overdue Projects",
  columns: [
    { label: "Overdue", id: "overdue" },
    { label: "Project Name", id: "projectName" },
    {
      label: "Deadline",
      id: "deadline",
    },
  ],
  data: [
    {
      id: 1,
      overdue: "3 days",
      projectName: "Community Outreach Initiative",
      deadline: "12/23/2024",
    },
    {
      id: 2,
      overdue: "3 days",
      projectName: "Community Outreach Initiative",
      deadline: "12/23/2024",
    },
    {
      id: 3,
      overdue: "7 days",
      projectName: "Acme Product Launch",
      deadline: "12/23/2024",
    },
    {
      id: 4,
      overdue: "9 days",
      projectName: "City Park Renovation",
      deadline: "12/23/2024",
    },
    {
      id: 5,
      overdue: "10 days",
      projectName: "Office Relocation Project",
      deadline: "12/23/2024",
    },
    {
      id: 6,
      overdue: "12 days",
      projectName: "E-commerce Platform Upgrade",
      deadline: "12/23/2024",
    },
    {
      id: 7,
      overdue: "14 days",
      projectName: "Office Relocation Project",
      deadline: "12/23/2024",
    },
  ],
};

export const cardData = [
  {
    count: 10,
    label: "No. of Workspaces",
  },
  {
    count: 40,
    label: "No. of Projects",
  },
  {
    count: 80,
    label: "No. of Members ",
  },
];
