import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { propertyApi } from "./redux/features/propertyApi";
import { authApi } from "./redux/features/auth/authApi";
import authSlice from "./redux/features/auth/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { blogApi } from "./redux/features/BlogApi";
import { generalEnquiry } from "./redux/features/generalEnquiryApi";
import { contactApi } from "./redux/features/contactApi";
import { maintenanceRequestApi } from "./redux/features/maintenanceRequestApi";
import { newsApi } from "./redux/features/newsApi";
import { sendEmailApi } from "./redux/features/sendEmailApi";
import { messageApi } from "./redux/features/messageApi";
import newsSlice from "./redux/features/newsSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    propertyApi.reducerPath,
    blogApi.reducerPath,
    generalEnquiry.reducerPath,
    contactApi.reducerPath,
    maintenanceRequestApi.reducerPath,
    newsApi.reducerPath,
    sendEmailApi.reducerPath,
  ],
};

const rootReducer = combineReducers({
  auth: authSlice,
  news: newsSlice,
  [authApi.reducerPath]: authApi.reducer,
  [propertyApi.reducerPath]: propertyApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
  [generalEnquiry.reducerPath]: generalEnquiry.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
  [maintenanceRequestApi.reducerPath]: maintenanceRequestApi.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [sendEmailApi.reducerPath]: sendEmailApi.reducer,
  [messageApi.reducerPath]: messageApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authApi.middleware,
      propertyApi.middleware,
      blogApi.middleware,
      generalEnquiry.middleware,
      contactApi.middleware,
      maintenanceRequestApi.middleware,
      newsApi.middleware,
      sendEmailApi.middleware,
      messageApi.middleware,
    ]),
});
export const persistor = persistStore(store);
