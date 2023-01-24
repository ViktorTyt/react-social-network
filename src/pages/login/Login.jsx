import "./login.css";
import { useRef } from "react";
import { loginCall } from "../../apiCalls";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Viktorsocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Viktorsocial
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength={6}
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot password?</span>
            <button className="registerButton">
              {" "}
              {isFetching ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
