import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import CoverMenu from "components/coverMenu/CoverMenu";
import ShareTest from "../../components/share/Share";
import Posts from "../../components/posts/Posts";

import { Link, useParams } from "react-router-dom";
import {
  useFollowMutation,
  useGetUserQuery,
  useUnfollowMutation,
} from "redux/usersAPI";

import {
  ProfileWrapper,
  PofileContainer,
  UserInfo,
  UserInfoLeft,
  UserInfoCenter,
  UserInfoRight,
} from "./Profile.styled";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/authSlice";
import Sidebar from "components/sidebar/Sidebar";
import Rightbar from "components/rightbar/Rightbar";
import { useState } from "react";
import MessageModal from "components/messageModal/MessageModal";
import { useAddConversationMutation } from "redux/conversationsAPI";

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const id = useParams().id;
  const [open, setOpen] = useState(false);
  const { data: user } = useGetUserQuery(id);
  const [follow] = useFollowMutation();
  const [unfollow] = useUnfollowMutation();
  const [addConversation, { data, isLoading, isError }] =
    useAddConversationMutation();

  const handleFollow = () => {
    const data = {
      id,
      userId: currentUser._id,
    };

    if (!alreadyFriend) {
      follow(data);
    } else {
      unfollow(data);
    }
  };

  const handleModal = () => {
    if (!open) {
      const createConv = async () => {
        try {
          const data = {
            senderId: currentUser._id,
            receiverId: user?.data.user._id,
          };
          await addConversation(data);
        } catch (error) {
          console.log(error);
        }
      };
      createConv();
    }
    setOpen(!open);
  };

  // console.log(user);
  const alreadyFriend = user?.data.user.followers.includes(currentUser._id);
  const own = currentUser._id === id;

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <ProfileWrapper className="profile">
        <CoverMenu user={user?.data.user} />

        <PofileContainer className="profileContainer">
          <UserInfo className="uInfo">
            <UserInfoLeft className="left">
              <div>
                {currentUser._id === id ? (
                  <>
                    <Link to={`/messenger`}>
                      <button>Messenger</button>
                    </Link>
                  </>
                ) : (
                  <button onClick={handleModal}>Повідомлення</button>
                )}
              </div>
              {open && (
                <MessageModal
                  open={open}
                  onModal={handleModal}
                  user={user?.data.user}
                  currentUser={currentUser}
                />
              )}
            </UserInfoLeft>
            <UserInfoCenter className="center">
              <span>{user?.data.user.name}</span>
              <div className="info">
                <div className="item">
                  <PlaceIcon />
                  <span>Адреса не вказана</span>
                </div>
                <div className="item">
                  <LanguageIcon />
                  <span>Сайт не вказаний</span>
                </div>
              </div>
            </UserInfoCenter>
            <UserInfoRight
              className="right"
              alreadyFriend={alreadyFriend}
              own={own}
            >
              {!own ? (
                <button onClick={handleFollow}>
                  {alreadyFriend ? "unfollow" : "follow"}
                </button>
              ) : (
                <button>Змінити особисті дані</button>
              )}
            </UserInfoRight>
          </UserInfo>
          {currentUser._id === id && <ShareTest />}
          <Posts profile={user?.data.user.name} />
        </PofileContainer>
      </ProfileWrapper>
      <Rightbar />
    </div>
  );
};

export default Profile;
