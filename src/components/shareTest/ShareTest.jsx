// import "./shareTest.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { TestAuthContext } from "../../context/testAuthContext";
import {
  ShareBottom,
  ShareBottomLeft,
  ShareBottomRight,
  ShareContainer,
  ShareTop,
  ShareWrapper,
} from "./ShareTest.styled";

const Share = () => {
  const { currentUser } = useContext(TestAuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <ShareWrapper className="share">
      <ShareContainer className="container">
        <ShareTop className="top">
          <img src={PF + currentUser.profilePicture} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind ${currentUser.name}?`}
          />
        </ShareTop>
        <hr />
        <ShareBottom className="bottom">
          <ShareBottomLeft className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </ShareBottomLeft>
          <ShareBottomRight className="right">
            <button>Share</button>
          </ShareBottomRight>
        </ShareBottom>
      </ShareContainer>
    </ShareWrapper>
  );
};

export default Share;
