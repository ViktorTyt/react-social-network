import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import filterSlice from "./filterSlice";
import { postsAPI } from "./postsAPI";
import { authAPI } from "./authAPI";
import authSlice from "./authSlice";

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const persistedMyContactsReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
  reducer: {
    [postsAPI.reducerPath]: postsAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    // filter: filterSlice,
    users: persistedMyContactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(postsAPI.middleware)
      .concat(authAPI.middleware),
});

export const persistor = persistStore(store);
export default store;
