import "./topbar.scss";
import {
  Person,
  Search,
  Chat,
  Notifications,
  DarkModeOutlined,
  HomeOutlined,
  GridViewOutlined,
  SearchOutlined,
  PersonOutlined,
  EmailOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbar">
      <div className="left">
        <Link style={{ textDecoration: "none" }}>
          <span>Viktorsocial</span>
        </Link>
        <HomeOutlined />
        <DarkModeOutlined />
        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/not_found.png"
            }
            alt="1.jpeg"
            className="topbarImg"
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="topbarContainer">
  //     <div className="topbarLeft">
  //       <Link to="/" style={{ textDecoration: "none" }}>
  //         <span className="logo">Viktorsocial</span>
  //       </Link>
  //     </div>
  //     <div className="topbarCenter">
  //       <div className="searchBar">
  //         <Search className="searchIcon" />
  //         <input
  //           placeholder="Search for friend, post or video"
  //           className="searchInput"
  //         />
  //       </div>
  //     </div>
  //     <div className="topbarRight">
  //       <div className="topbarLinks">
  //         <span className="topbarLink">Homepage</span>
  //         <span className="topbarLink">Timeline</span>
  //       </div>
  //       <div className="topbarIcons">
  //         <div className="topbarIconItem">
  //           <Person />
  //           <span className="topbarIconBadge">1</span>
  //         </div>
  //         <div className="topbarIconItem">
  //           <Chat />
  //           <span className="topbarIconBadge">1</span>
  //         </div>
  //         <div className="topbarIconItem">
  //           <Notifications />
  //           <span className="topbarIconBadge">1</span>
  //         </div>
  //       </div>
  //       <Link to={`/profile/${user.username}`}>
  //         <img
  //           src={
  //             user.profilePicture
  //               ? PF + user.profilePicture
  //               : PF + "person/not_found.png"
  //           }
  //           alt="1.jpeg"
  //           className="topbarImg"
  //         />
  //       </Link>
  //     </div>
  //   </div>
  // );
}
