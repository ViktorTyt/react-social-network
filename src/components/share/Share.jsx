import { useSelector } from "react-redux";
import { useState } from "react";
import { Cancel } from "@mui/icons-material";

import { useAddPostMutation } from "redux/postsAPI";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";

import {
  ShareBottom,
  ShareBottomLeft,
  ShareBottomRight,
  ShareContainer,
  ShareTop,
  ShareWrapper,
} from "./Share.styled";

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [postImg, setPostImg] = useState(null);
  const [text, setText] = useState("");
  const currentUser = useSelector((state) => state.state);
  const [createPost, { isLoading: isCreateLoading }] = useAddPostMutation();
  console.log("isCreateLoading:", isCreateLoading);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (postImg || text) {
      const data = new FormData();

      if (postImg) {
        const fileName = Date.now() + postImg.name;
        data.append("name", fileName);
        data.append("postImg", postImg);
      }

      data.append("userId", currentUser._id);
      data.append("desc", text);
      // console.dir(data);
      // for (const value of data.values()) {
      //   console.log(value);
      // }
      try {
        await createPost(data);
        console.log("after createPost data");
        // window.location.reload();
      } catch (error) {
        console.log(error);
      } finally {
        setText("");
        setPostImg(null);
      }
    }
  };

  return (
    <ShareWrapper className="share">
      <ShareContainer className="container">
        <ShareTop className="top">
          <img
            src={
              currentUser.profilePicture
                ? currentUser.profilePicture
                : PF + "person/not_found.png"
            }
            alt=""
          />
          <input
            type="text"
            name="text"
            value={text}
            onChange={handleTextChange}
            placeholder={`What's on your mind ${currentUser.name}?`}
          />
        </ShareTop>
        <hr />
        {postImg && (
          <div className="imageContainer">
            <img
              src={URL.createObjectURL(postImg)}
              alt=""
              className="shareImg"
            />
            <Cancel
              className="shareCancelImg"
              onClick={() => setPostImg(null)}
            />
          </div>
        )}
        <ShareBottom className="bottom" onSubmit={handleSubmit}>
          <ShareBottomLeft className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              accept=".png, .jpeg, .jpg"
              onChange={(e) => setPostImg(e.target.files[0])}
            />
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
            <button type="submit">Share</button>
          </ShareBottomRight>
        </ShareBottom>
      </ShareContainer>
    </ShareWrapper>
  );
};

export default Share;
