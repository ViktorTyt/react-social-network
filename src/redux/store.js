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
import { conversationsAPI } from "./conversationsAPI";
import { messagesAPI } from "./messagesAPI";
import authReducer from "./authSlice";

console.log(storage);

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
  blacklist: [
    postsAPI.reducerPath,
    authAPI.reducerPath,
    usersAPI.reducerPath,
    conversationsAPI.reducerPath,
    messagesAPI.reducerPath,
  ],
};

const persistedMyContactsReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    [postsAPI.reducerPath]: postsAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    [conversationsAPI.reducerPath]: conversationsAPI.reducer,
    [messagesAPI.reducerPath]: messagesAPI.reducer,
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
      .concat(usersAPI.middleware)
      .concat(conversationsAPI.middleware)
      .concat(messagesAPI.middleware),
});

export const persistor = persistStore(store);
export default store;
