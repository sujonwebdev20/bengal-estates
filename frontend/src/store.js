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

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    propertyApi.reducerPath,
    blogApi.reducerPath,
    generalEnquiry.reducerPath,
    contactApi.reducerPath,
    maintenanceRequestApi.reducerPath,
  ],
};

const rootReducer = combineReducers({
  auth: authSlice,
  [authApi.reducerPath]: authApi.reducer,
  [propertyApi.reducerPath]: propertyApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
  [generalEnquiry.reducerPath]: generalEnquiry.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
  [maintenanceRequestApi.reducerPath]: maintenanceRequestApi.reducer,
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
    ]),
});
export const persistor = persistStore(store);
