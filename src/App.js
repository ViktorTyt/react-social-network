import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import Profile from "./pages/profile/Profile";
import ProfileTest from "./pages/profileTest/ProfileTest";
import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";
import { DarkModeContext } from "./context/darkModeContext";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Rightbar from "./components/rightbar/Rightbar";
import "./style.scss";

import { TestAuthContext } from "./context/testAuthContext";
import { useSelector } from "react-redux";
import { useCurrentUserQuery } from "redux/authAPI";
import { useGetUserQuery } from "redux/usersAPI";
import Messenger from "pages/messenger/Messenger";
function App() {
  // const { darkMode } = useContext(DarkModeContext);
  // const { currentUser } = useContext(TestAuthContext);
  const { token, isLoggedIn } = useSelector((state) => state.state);
  // // console.log(currentUser);

  const Layout = () => {
    const { data: currentUser, isFetching, error } = useCurrentUserQuery();

    return (
      isLoggedIn &&
      currentUser && (
        <>
          <Topbar />
          <div style={{ display: "flex" }}>
            {/* <Sidebar /> */}
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            {/* <Rightbar /> */}
          </div>
        </>
      )
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:name/:id",
          element: <ProfileTest />,
        },
        {
          path: "/messenger",
          element: <Messenger />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
  // return (
  //   <Routes>
  //     <Route path="/" element={user ? <Home /> : <Register />} />
  //     <Route
  //       path="/login"
  //       // element={user ? <Navigate to="/login" /> : <Login />}
  //       element={<Login />}
  //     />
  //     <Route
  //       path="/register"
  //       // element={user ? <Navigate to="/" /> : <Register />}
  //       element={<Register />}
  //     />
  //     <Route path="/profile/:username" element={<Profile />} />
  //   </Routes>
  // );
}

export default App;
