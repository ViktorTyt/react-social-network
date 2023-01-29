import "./register.scss";

// import { Form, Label, Button } from "./Register.styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useRegistrerMutation } from "redux/authAPI";
import { useSelector } from "react-redux";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegistrerMutation();
  const { token } = useSelector((state) => state.users);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { name, email, password };
    register(credentials);
  };

  return (
    <>
      {token && <Navigate to="/" replace />};
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
              <input
                placeholder="Username"
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <input
                placeholder="Email"
                type="email"
                required
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <input
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
                required
                minLength={6}
              />
              <input placeholder="Name" type="text" />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
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
