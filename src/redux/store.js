import { configureStore } from "@reduxjs/toolkit";
import getGithubDataReducer from "../reducers/githubDataReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
const persistConfig = {
  key: "apiData",
  storage,
  whitelist: ["data", "isFetching", "error", "apiParams"],
};

const persistedGithubData = persistReducer(persistConfig, getGithubDataReducer);

export default configureStore({
  reducer: {
    apiData: persistedGithubData,
  },
  // devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
