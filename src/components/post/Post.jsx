import { MoreVert } from "@mui/icons-material";
import "./post.css";
import axios from "axios";
import TimeAgo from "react-timeago";
import { useEffect, useState } from "react";

export default function Post({ post }) {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(PF);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(`users/${post.userId}`);
      setUser(data);
    };

    getUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user.profilePicture || PF + "person/not_found.png"}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">{user.username}</span>
            <span className="postDate">
              <TimeAgo date={post.createdAt} />
            </span>
          </div>
          <div className="postTopRight"></div>
          <MoreVert />
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="/assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCouter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
