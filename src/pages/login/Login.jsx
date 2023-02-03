import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import { loginCall } from "../../apiCalls";
// import { CircularProgress } from "@mui/material";
import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
import { TestAuthContext } from "../../context/testAuthContext";
import { useLoginMutation } from "redux/authAPI";
import { Container, ImageSide, FormSide, LoginWrapper } from "./login.styled";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isSuccess }] = useLoginMutation();
  console.log(isSuccess);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
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
    const credentials = { email, password };
    login(credentials);
  };
  // const { user, isFetching, error, dispatch } = useContext(AuthContext);
  // const { login } = useContext(TestAuthContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   login({
  //     _id: "63cc12c3cb1b77d917b8f480",
  //     username: "Viktor Tytenko",
  //     email: "viktor@gmail.com",
  //     profilePicture: "person/5.jpeg",
  //     coverPicture:
  //       "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     followers: ["63cc12dccb1b77d917b8f482"],
  //     isAdmin: false,
  //     followings: [],
  //     city: "Kyiv",
  //     from: "Poltava",
  //     relationship: 1,
  //   });
  //   // loginCall(
  //   //   { email: email.current.value, password: password.current.value },
  //   //   dispatch
  //   // );
  // };

  // console.log(user);
  return (
    <>
      {isSuccess && <Navigate to="/" replace />}
      <LoginWrapper className="login">
        <Container className="card">
          <ImageSide className="left">
            <h1>Hello Ukraine!</h1>
            <p>Connect with friends and the world around you on Viktorsocial</p>
            <span>Don't you have an account?</span>
            <Link to="/register">
              <button>
                Register
                {/* {isFetching ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                "Register"
              )} */}
              </button>
            </Link>
          </ImageSide>
          <FormSide className="right">
            <h1>Сторінка входу</h1>
            <form onSubmit={handleSubmit}>
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
                type="password"
                required
                minLength={6}
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              {/* <button type="submit" disabled={isFetching}> */}
              <button type="submit">
                Login
                {/* {isFetching ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                "Log In"
              )} */}
              </button>
            </form>
          </FormSide>
        </Container>
      </LoginWrapper>
    </>
  );
}
