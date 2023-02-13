import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "./authAPI";
// import { postsApi } from "./postsApi";

const initialState = {
  _id: "",
  name: "",
  email: "",
  token: "",
  profilePicture: "",
  coverPicture: "",
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
          state._id = payload.data._id;
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
          console.log(payload);
          state._id = payload.data._id;
          state.name = payload.data.name;
          state.email = payload.data.email;
          state.profilePicture = payload.data.profilePicture;
          state.coverPicture = payload.data.coverPicture;
          state.followings = payload.data.followings;
          state.followers = payload.data.followers;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authAPI.endpoints.logout.matchFulfilled,
        (state, { payload }) => {
          state.token = "";
          state._id = "";
          state.isLoggedIn = false;
          state.userContacts = null;
        }
      );
    // .addMatcher(
    //   postsApi.endpoints.getContacts.matchFulfilled,
    //   (state, { payload }) => {
    //     state.userContacts = payload.data;
    //   }
    // );
  },
});

export const { loginSuccess, getCurrentSuccess } = authSlice.actions;

export const selectCurrentUser = (state) => state.state;

export default authSlice.reducer;
