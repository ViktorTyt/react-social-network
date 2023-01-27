import "./rightbar.scss";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";
const URL = "http://localhost:8800/api/";
export default function Rightbar() {
  const { user } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={
                  user?.profilePicture
                    ? PF + user?.profilePicture
                    : PF + "person/not_found.png"
                }
                alt="1.jpeg"
              />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={
                  user?.profilePicture
                    ? PF + user?.profilePicture
                    : PF + "person/not_found.png"
                }
                alt="1.jpeg"
              />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={
                  user?.profilePicture
                    ? PF + user?.profilePicture
                    : PF + "person/not_found.png"
                }
                alt="1.jpeg"
              />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={
                  user?.profilePicture
                    ? PF + user?.profilePicture
                    : PF + "person/not_found.png"
                }
                alt="1.jpeg"
              />
              <p>
                <span>John Doe</span> changing their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={
                  user?.profilePicture
                    ? PF + user?.profilePicture
                    : PF + "person/not_found.png"
                }
                alt="1.jpeg"
              />
              <p>
                <span>John Doe</span> changing their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={
                  user?.profilePicture
                    ? PF + user?.profilePicture
                    : PF + "person/not_found.png"
                }
                alt="1.jpeg"
              />
              <p>
                <span>John Doe</span> changing their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={
                  user?.profilePicture
                    ? PF + user?.profilePicture
                    : PF + "person/not_found.png"
                }
                alt="1.jpeg"
              />
              <div className="online"></div>
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Rightbar({ user }) {
//   const { user: currentUser, dispatch } = useContext(AuthContext);
//   const [friends, setFriends] = useState([]);
//   const [followed, setFollowed] = useState(() =>
//     currentUser.followings.includes(user?._id)
//   );
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

//   console.log(currentUser.followings);
//   console.log(followed);

//   // useEffect(() => {
//   //   setFollowed(currentUser.followings.includes(user?._id));
//   // }, [currentUser, user?._id]);

//   useEffect(() => {
//     // console.log("effect rightbar");
//     const getFriends = async () => {
//       if (user?._id) {
//         // console.log(user);
//         try {
//           const friendsList = await axios.get(
//             `${URL}users/friends/${user._id}`
//           );
//           // console.log("right after fetching");

//           setFriends(friendsList.data);
//         } catch (error) {
//           console.log(error);
//         }
//       } else {
//         return user;
//       }
//     };

//     getFriends();
//   }, [user]);

//   const handleFolllow = async () => {
//     try {
//       if (followed) {
//         await axios.put(`${URL}users/${user._id}/unfollow`, {
//           userId: currentUser._id,
//         });
//         dispatch({ type: "UNFOLLOW", payload: user._id });
//       } else {
//         await axios.put(`${URL}users/${user._id}/follow`, {
//           userId: currentUser._id,
//         });
//         dispatch({ type: "FOLLOW", payload: user._id });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setFollowed(!followed);
//   };

//   const HomeRightbar = () => {
//     return (
//       <>
//         <div className="birthdayContainer">
//           <img src="/assets/gift.png" alt="" className="birthdayImg" />
//           <span className="birthdayText">
//             <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
//           </span>
//         </div>
//         <img src={PF + "ad.png"} alt="" className="rightbarAd" />
//         <h4 className="rightbarTitle">Online Friends</h4>
//         <ul className="rightbarFriendList">
//           {Users.map((user) => (
//             <Online key={user.id} user={user} />
//           ))}
//         </ul>
//       </>
//     );
//   };

//   const ProfileRightbar = () => {
//     return (
//       <>
//         {user.username !== currentUser.username && (
//           <button className="rightbarFollowButton" onClick={handleFolllow}>
//             {followed ? "Unfollow" : "Follow"}
//             {followed ? <Remove /> : <Add />}
//           </button>
//         )}
//         <h4 className="rightbarTitle">User information</h4>
//         <div className="rightbarInfo">
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">City:</span>
//             <span className="rightbarInfoValue">{user.city}</span>
//           </div>
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">From:</span>
//             <span className="rightbarInfoValue">{user.from}</span>
//           </div>
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">Realationship:</span>
//             <span className="rightbarInfoValue">
//               {user.relationship === 1
//                 ? "Single"
//                 : user.relationship === 2
//                 ? "Married"
//                 : "-"}
//             </span>
//           </div>
//         </div>
//         <h4 className="rightbarTitle">User friends</h4>
//         <div className="rightbarFollowings">
//           {friends.map((friend) => (
//             <Link
//               key={friend._id}
//               to={`/profile/${friend.username}`}
//               style={{ textDecoration: "none" }}
//             >
//               <div className="rightbarFollowing">
//                 <img
//                   src={
//                     friend.profilePicture
//                       ? PF + friend.profilePicture
//                       : PF + "person/not_found.png"
//                   }
//                   alt=""
//                   className="rightbarFollowingImg"
//                 />
//                 <span className="rightbarFollowingName">{friend.username}</span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </>
//     );
//   };

//   return (
//     <div className="rightbar">
//       <div className="rightbarWrapper">
//         {user ? <ProfileRightbar /> : <HomeRightbar />}
//       </div>
//     </div>
//   );
// }
