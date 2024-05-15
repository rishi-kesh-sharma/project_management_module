import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state

interface IUser {
  name: string;
  username: string;
  email: string;
  role: "admin" | "user" | "manager";
  image?: string;
}
interface INotification {
  title: string;
  description: string;
  date: Date;
  time: string;
}
interface IBreadCrumb {
  path: string;
  label: string;
}
interface INavigation {
  currentPath: string;
  breadcrumbItems: IBreadCrumb[];
}
interface AppState {
  isSidebarExpanded: boolean;
  isLoggedIn: boolean;
  user: IUser;
  notifications: INotification[];
  navigation: INavigation;
}

// Define the initial state using that type
const initialState: AppState = {
  isSidebarExpanded: true,
  isLoggedIn: true,
  user: {
    name: "User",
    username: "user",
    email: "user@gmail.com",
    role: "admin",
  },
  notifications: [
    {
      title: "Meeting Reminder",
      description: "Don't forget about the team meeting at 10 AM",
      date: new Date("2024-05-15"),
      time: "10:00 AM",
    },
    {
      title: "Birthday Reminder",
      description: "Wish John a happy birthday today",
      date: new Date("2024-05-16"),
      time: "All day",
    },
    {
      title: "Project Deadline",
      description: "Submit the project report by end of day",
      date: new Date("2024-05-18"),
      time: "11:59 PM",
    },
  ],
  navigation: {
    currentPath: "/components/breadcrumb",
    breadcrumbItems: [
      { label: "Home", path: "/" },
      { label: "Components", path: "/components" },
      { label: "BreadCrumb", path: "/components/breadcrumb" },
    ],
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    expandSidebar: (state) => {
      state.isSidebarExpanded = true;
    },
    collapseSidebar: (state) => {
      state.isSidebarExpanded = false;
    },

    updateNavigation: (
      state,
      action: PayloadAction<{ location: { pathname: string } }>
    ) => {
      state.navigation = {
        ...state.navigation,
        currentPath: action.payload.location.pathname,
      };
    },
  },
});

export const { expandSidebar, collapseSidebar } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsSidebarExpanded = (state: RootState) =>
  state.app.isSidebarExpanded;
export const selectNotifications = (state: RootState) =>
  state.app.notifications;
export const selectUser = (state: RootState) => state.app.user;
export const selectNavigation = (state: RootState) => state.app.navigation;
export const selectIsLoggedIn = (state: RootState) => state.app.isLoggedIn;

export default appSlice.reducer;
