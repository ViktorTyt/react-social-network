import axios from "axios";
import { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  // const { user: userCont } = useContext(AuthContext);
  const [user, setUser] = useState({});
  // console.log(user);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  let getParams = useParams();

  useEffect(() => {
    // console.log("effect");
    const getUser = async () => {
      const { data } = await axios.get(
        `http://localhost:8800/api/users?username=${getParams.username}`
      );
      setUser(data);
    };

    getUser();
  }, [getParams.username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "post/8.jpeg"
                }
                alt=""
                className="profileCoverImg"
              />
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/not_found.png"
                }
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
            <Feed username={getParams.username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
