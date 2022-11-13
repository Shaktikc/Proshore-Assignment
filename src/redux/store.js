import { configureStore } from "@reduxjs/toolkit";
import getGithubDataReducer from "../reducers/githubDataReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
const persistConfigLogin = {
  key: "root",
  storage,
  whitelist: ["apiData"],
};

const persistedGithubData = persistReducer(
  persistConfigLogin,
  getGithubDataReducer
);

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
