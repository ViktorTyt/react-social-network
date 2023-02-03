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
import { usersAPI } from "./usersAPI";
import authReducer from "./authSlice";

console.log(storage);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["_id", "name", "email", "profilePicture", "token"],
  blacklist: [postsAPI.reducerPath, authAPI.reducerPath, usersAPI.reducerPath],
};

const persistedMyContactsReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    [postsAPI.reducerPath]: postsAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    state: persistedMyContactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authAPI.middleware)
      .concat(postsAPI.middleware)
      .concat(usersAPI.middleware),
});

export const persistor = persistStore(store);
export default store;
