import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "./authAPI";
// import { postsApi } from "./postsApi";

const initialState = {
  name: "",
  email: "",
  token: "",
  profilePicture: "",
  isLoggedIn: false,
  isRegistredIn: false,
  userContacts: [],
};

const authSlice = createSlice({
  name: "state",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authAPI.endpoints.registrer.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.user.name;
          state.email = payload.user.email;
          // state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authAPI.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          console.log(payload);
          state.name = payload.data.name;
          state.email = payload.data.email;
          state.profilePicture = payload.data.profilePicture;
          state.token = payload.data.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authAPI.endpoints.currentUser.matchRejected,
        (state, { payload }) => {
          if (payload?.status === 401) {
            state.token = "";
          }
        }
      )
      .addMatcher(
        authAPI.endpoints.currentUser.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.name;
          state.email = payload.email;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authAPI.endpoints.logout.matchFulfilled,
        (state, { payload }) => {
          state.token = "";
          state.isLoggedIn = false;
          state.userContacts = null;
        }
      );
    // .addMatcher(
    //   postsApi.endpoints.getContacts.matchFulfilled,
    //   (state, { payload }) => {
    //     state.userContacts = payload;
    //   }
    // );
  },
});

export const { loginSuccess, getCurrentSuccess } = authSlice.actions;
export default authSlice.reducer;
