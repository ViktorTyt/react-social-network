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
import { postsAPI } from "./postsAPI";
import { authAPI } from "./authAPI";
import authReducer from "./authSlice";

console.log(storage);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["name", "email", "profilePicture", "token"],
  blacklist: [postsAPI.reducerPath, authAPI.reducerPath],
};

const persistedMyContactsReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    [postsAPI.reducerPath]: postsAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    state: persistedMyContactsReducer,
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
