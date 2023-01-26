export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const ActionsTypes = {
  LoginStart: "LOGIN_START",
  LoginSuccess: "LOGIN_SUCCESS",
  LoginFailure: "LOGIN_FAILURE",
};

export const Follow = (userId) => ({ type: "FOLLOW", payload: userId });
export const UnFollow = (userId) => ({ type: "UNFOLLOW", payload: userId });
