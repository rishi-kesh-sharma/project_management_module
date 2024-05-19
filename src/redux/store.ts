import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/app/appSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { workspaceApi } from "@/api/workspace";
import { bookmarkApi } from "@/api/bookmark";
import { inventoriesApi } from "@/api/inventories";
const store = configureStore({
  reducer: {
    app: appReducer,
    [workspaceApi.reducerPath]: workspaceApi.reducer,
    [bookmarkApi.reducerPath]: bookmarkApi.reducer,
    [inventoriesApi.reducerPath]: inventoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      workspaceApi.middleware,
      bookmarkApi.middleware,
      inventoriesApi.middleware
    ),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
