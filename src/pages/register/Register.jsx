import "./register.scss";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Viktor Social</h1>
          <p>Connect with friends and the world around you on Viktorsocial</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input placeholder="Username" type="text" />
            <input placeholder="Email" type="email" required ref={email} />
            <input
              placeholder="Password"
              type="password"
              required
              minLength={6}
              ref={password}
            />
            <input placeholder="Name" type="text" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
// return (
//   <div className="register">
//     <div className="loginWrapper">
//       <div className="loginLeft">
//         <h3 className="loginLogo">Viktorsocial</h3>
//         <span className="loginDesc">
//           Connect with friends and the world around you on Viktorsocial
//         </span>
//       </div>
//       <div className="loginRight">
//         <form className="loginBox" onSubmit={handleSubmit}>
//           <input
//             placeholder="Username"
//             required
//             className="loginInput"
//             ref={username}
//           />
//           <input
//             placeholder="Email"
//             type="email"
//             required
//             className="loginInput"
//             ref={email}
//           />
//           <input
//             placeholder="Password"
//             type="password"
//             min="6"
//             required
//             className="loginInput"
//             ref={password}
//           />
//           <input
//             placeholder="Password Again"
//             type="password"
//             min="6"
//             required
//             className="loginInput"
//             ref={passwordAgain}
//           />
//           <button className="loginButton" type="submit">
//             Sign In
//           </button>
//           <button className="registerButton">Log into Account</button>
//         </form>
//       </div>
//     </div>
//   </div>
// );
