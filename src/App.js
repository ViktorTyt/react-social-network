import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { useCurrentUserQuery } from "redux/authAPI";

import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "pages/profile/Profile";
import Messenger from "pages/messenger/Messenger";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Rightbar from "./components/rightbar/Rightbar";

// import { DarkModeContext } from "./context/darkModeContext";
function App() {
  // const { darkMode } = useContext(DarkModeContext);
  const { token, isLoggedIn } = useSelector((state) => state.state);

  const Layout = () => {
    const { data: currentUser } = useCurrentUserQuery();

    return (
      isLoggedIn &&
      currentUser && (
        <>
          <Topbar />
          {/* <div style={{ display: "flex" }}> */}
          {/* <Sidebar /> */}
          <div>
            <Outlet />
          </div>
          {/* <Rightbar /> */}
          {/* </div> */}
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
          element: <Profile />,
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
