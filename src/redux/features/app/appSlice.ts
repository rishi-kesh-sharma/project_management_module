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
  // date: Date;
  time: string;
}
export interface IBreadCrumb {
  path: string;
  label: string;
}

interface AppState {
  isSidebarExpanded: boolean;
  isLoggedIn: boolean;
  user: IUser;
  notifications: INotification[];
  language: "en";
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
      // date: new Date(Date.now()),
      time: "10:00 AM",
    },
    {
      title: "Birthday Reminder",
      description: "Wish John a happy birthday today",
      // date: new Date(Date.now()),
      time: "All day",
    },
    {
      title: "Project Deadline",
      description: "Submit the project report by end of day",
      // date: new Date(Date.now()),
      time: "11:59 PM",
    },
  ],

  language: "en",
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

    setLanguage: (state, action: PayloadAction<{ language: "en" }>) => {
      state.language = action.payload.language;
      console.log(action.payload.language, "language");
      localStorage.setItem("lang", JSON.stringify(action.payload.language));
      window.location.reload();
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { expandSidebar, collapseSidebar, setLanguage } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsSidebarExpanded = (state: RootState) =>
  state.app.isSidebarExpanded;
export const selectNotifications = (state: RootState) =>
  state.app.notifications;
export const selectUser = (state: RootState) => state.app.user;
export const selectIsLoggedIn = (state: RootState) => state.app.isLoggedIn;
export const selectLanguage = (state: RootState) => state.app.language;

export default appSlice.reducer;
