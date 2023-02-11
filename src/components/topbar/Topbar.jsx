import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  GridViewOutlined,
  SearchOutlined,
  PersonOutlined,
  EmailOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";

import ProfileMenu from "components/profileMenu/ProfileMenu";

// import { DarkModeContext } from "../../context/darkModeContext";

import {
  Header,
  Logo,
  NavLeft,
  SearchContainer,
  SearchInput,
  UserContainer,
  UserImg,
  UserInfo,
} from "./Topbar.styled.js";

export default function Topbar() {
  const currentUser = useSelector((state) => state.state);
  // console.log(currentUser);

  // const { darkMode, toggle } = useContext(DarkModeContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  console.log("topbar");
  console.log(currentUser);

  return (
    <Header>
      <NavLeft>
        <Link style={{ textDecoration: "none" }} to="/">
          <Logo>Viktorsocial</Logo>
        </Link>
        <HomeOutlined />
        {/* {darkMode ? (
          <WbSunnyOutlined onClick={toggle} />
        ) : (
          <DarkModeOutlined onClick={toggle} />
        )} */}
        <GridViewOutlined />
      </NavLeft>
      <SearchContainer>
        <SearchOutlined />
        <SearchInput type="text" placeholder="Search..." />
      </SearchContainer>
      <UserContainer>
        <PersonOutlined />
        <Link to={`/messenger`}>
          <EmailOutlined />
        </Link>
        <NotificationsOutlined />
        <UserInfo>
          <Link to={`/profile/${currentUser.name}/${currentUser._id}`}>
            <UserImg
              src={
                currentUser?.profilePicture
                  ? currentUser.profilePicture
                  : PF + "person/not_found.png"
              }
              alt="1.jpeg"
            />
          </Link>
          <ProfileMenu name={currentUser && currentUser.name} />
          {/* <span>{currentUser && currentUser.name}</span> */}
        </UserInfo>
      </UserContainer>
    </Header>
  );
}
