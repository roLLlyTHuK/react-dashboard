import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import tasksReducer from "./tasksSlice"; // Import the default export
import { filtersSlice } from "./filtersSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistFiltersConfig = {
  key: "filters",
  storage,
};

const persistedFiltersReducer = persistReducer(
  persistFiltersConfig,
  filtersSlice.reducer
);

const persistTasksConfig = {
  key: "tasks",
  storage,
};

const persistedTasksReducer = persistReducer(persistTasksConfig, tasksReducer);

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    tasks: persistedTasksReducer,
    filters: persistedFiltersReducer,
  },
});
export const persistor = persistStore(store);
