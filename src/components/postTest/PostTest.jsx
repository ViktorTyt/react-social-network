import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import Comments from "../comments/Comments";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseQuery } from "redux/authAPI";
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
import { useGetUserQuery } from "redux/usersAPI";
import { useEditLikesMutation } from "redux/postsAPI";
import { useSelector } from "react-redux";

const PostTest = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const { _id } = useSelector((state) => state.state);
  const { data: user } = useGetUserQuery(post.userId);
  if (user) {
    console.log(user);
  }

  const [ediLikes] = useEditLikesMutation();

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // //TEMPORARY
  // const liked = false;
  useEffect(() => {
    setIsLiked(post.likes.includes(_id));
  }, [post.likes, _id]);

  const likeHandler = async () => {
    try {
      await ediLikes({ id: post._id, userId: _id });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <PostItem className="post">
      <PostContainer className="container">
        <User className="user">
          <UserInfo className="userInfo">
            <img
              src={
                user?.data.profilePicture
                  ? user.data.profilePicture
                  : PF + post.profilePic
              }
              alt=""
            />
            <UserInfoDetails className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <UserInfoName className="name">{post.name}</UserInfoName>
              </Link>
              <UserInfoDate className="date">
                <TimeAgo date={post.createdAt} />
              </UserInfoDate>
            </UserInfoDetails>
          </UserInfo>
          <MoreHorizIcon />
        </User>
        <PostContent className="content">
          <p>{post.desc}</p>
          <img src={post.postImageURL} alt="" />
        </PostContent>
        <PostInfo className="info">
          <div className="item" onClick={likeHandler}>
            {isLiked ? (
              <FavoriteOutlinedIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            {like} Likes
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
