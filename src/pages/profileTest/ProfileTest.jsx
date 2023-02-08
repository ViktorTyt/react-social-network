import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import ShareTest from "../../components/shareTest/ShareTest";

import {
  ProfileWrapper,
  Images,
  EditCoverBox,
  PofileContainer,
  UserInfo,
  UserInfoLeft,
  UserInfoCenter,
  UserInfoRight,
  CoverPicture,
  ProfilePicture,
} from "./ProfileTest.styled";
import { useSelector } from "react-redux";
import CoverMenu from "components/coverMenu/CoverMenu";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "redux/usersAPI";

const Profile = () => {
  // const currentUser = useSelector((state) => state.state);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const id = useParams().id;
  const { data: user } = useGetUserQuery(id);

  console.log(user);

  return (
    <ProfileWrapper className="profile">
      {/* <EditCoverBox> */}
      <CoverMenu user={user?.data.user} />
      {/* </EditCoverBox> */}

      <PofileContainer className="profileContainer">
        <UserInfo className="uInfo">
          <UserInfoLeft className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </UserInfoLeft>
          <UserInfoCenter className="center">
            <span>{user?.data.user.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>lama.dev</span>
              </div>
            </div>
            <button>follow</button>
          </UserInfoCenter>
          <UserInfoRight className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </UserInfoRight>
        </UserInfo>
        <ShareTest />
        <Posts profile={user?.data.user.name} />
      </PofileContainer>
    </ProfileWrapper>
  );
};

export default Profile;
