import axios from "axios";
import { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  let username = useParams();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(`/users?username=${username.username}`);
      setUser(data);
    };

    getUser();
  }, [username]);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture || PF + "post/8.jpeg"}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={user.profilePicture || PF + "person/not_found.png"}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={user.username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
