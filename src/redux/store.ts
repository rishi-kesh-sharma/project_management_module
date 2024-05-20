import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/app/appSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { workspaceApi } from "@/api/workspace";
import { bookmarkApi } from "@/api/bookmark";
import { inventoriesApi } from "@/api/inventories";
import { humanResourcesApi } from "@/api/humanResource";
import { equipmentsApi } from "@/api/equipments";
import { budgetsApi } from "@/api/budgets";
const store = configureStore({
  reducer: {
    app: appReducer,
    [workspaceApi.reducerPath]: workspaceApi.reducer,
    [bookmarkApi.reducerPath]: bookmarkApi.reducer,
    [inventoriesApi.reducerPath]: inventoriesApi.reducer,
    [humanResourcesApi.reducerPath]: humanResourcesApi.reducer,
    [equipmentsApi.reducerPath]: equipmentsApi.reducer,
    [budgetsApi.reducerPath]: budgetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      workspaceApi.middleware,
      bookmarkApi.middleware,
      inventoriesApi.middleware,
      humanResourcesApi.middleware,
      equipmentsApi.middleware,
      budgetsApi.middleware
    ),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
