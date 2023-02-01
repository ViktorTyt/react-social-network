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
} from "./ShareTest.styled";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Cancel } from "@mui/icons-material";
import { useAddPostMutation } from "redux/postsAPI";

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const currentUser = useSelector((state) => state.state);
  const [createPost, { isLoading: isCreateLoading }] = useAddPostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: currentUser._id,
      desc: text,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      console.log(data);
      try {
        await createPost(data);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }

    // try {
    //   await axios.post(`${URL1}posts`, newPost);
    // } catch (error) {
    //   console.log(error);
    // }
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
            placeholder={`What's on your mind ${currentUser.name}?`}
          />
        </ShareTop>
        <hr />
        {file && (
          <div className="imageContainer">
            <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <ShareBottom className="bottom" onSubmit={handleSubmit}>
          <ShareBottomLeft className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              accept=".png, .jpeg, .jpg"
              onChange={(e) => setFile(e.target.files[0])}
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
