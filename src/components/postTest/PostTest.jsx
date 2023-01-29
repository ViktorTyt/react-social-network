// import "./postTest.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import {
  PostItem,
  PostContainer,
  User,
  UserInfo,
  UserInfoDetails,
  UserInfoName,
  UserInfoDate,
  PostContent,
  PostInfo,
} from "./PostTest.module";

const PostTest = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  //TEMPORARY
  const liked = false;

  return (
    <PostItem className="post">
      <PostContainer className="container">
        <User className="user">
          <UserInfo className="userInfo">
            <img src={PF + post.profilePic} alt="" />
            <UserInfoDetails className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <UserInfoName className="name">{post.name}</UserInfoName>
              </Link>
              <UserInfoDate className="date">1 min ago</UserInfoDate>
            </UserInfoDetails>
          </UserInfo>
          <MoreHorizIcon />
        </User>
        <PostContent className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </PostContent>
        <PostInfo className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </PostInfo>
        {commentOpen && <Comments />}
      </PostContainer>
    </PostItem>
  );
};

export default PostTest;
