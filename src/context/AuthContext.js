import { useReducer } from "react";
import { createContext } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "63cc12c3cb1b77d917b8f480",
    username: "viktor",
    email: "viktor@gmail.com",
    profilePicture: "person/5.jpeg",
    coverPicture: "",
    followers: ["63cc12dccb1b77d917b8f482"],
    isAdmin: false,
    followings: [],
    city: "Kyiv",
    from: "Poltava",
    relationship: 1,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
