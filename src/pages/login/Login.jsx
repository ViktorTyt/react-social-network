import "./login.scss";
import { useRef } from "react";
import { Link } from "react-router-dom";
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
      <div className="card">
        <div className="left">
          <h1>Hello Ukraine!</h1>
          <p>Connect with friends and the world around you on Viktorsocial</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>
              {isFetching ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                "Register"
              )}
            </button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input placeholder="Email" type="email" required ref={email} />
            <input
              placeholder="Password"
              type="password"
              required
              minLength={6}
              ref={password}
            />
            <button type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
