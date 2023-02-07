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

const Profile = () => {
  const currentUser = useSelector((state) => state.state);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <ProfileWrapper className="profile">
      {/* <EditCoverBox> */}
      <CoverMenu />
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
            <span>{currentUser.name}</span>
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
        <Posts profile={currentUser.name} />
      </PofileContainer>
    </ProfileWrapper>
  );
};

export default Profile;
