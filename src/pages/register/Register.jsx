import "./register.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const URL = "http://localhost:8800/api/";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post(`${URL}auth/register`, user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

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
              placeholder="Username"
              required
              className="loginInput"
              ref={username}
            />
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
              min="6"
              required
              className="loginInput"
              ref={password}
            />
            <input
              placeholder="Password Again"
              type="password"
              min="6"
              required
              className="loginInput"
              ref={passwordAgain}
            />
            <button className="loginButton" type="submit">
              Sign In
            </button>
            <button className="registerButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
