import { Link } from "react-router-dom";
import { useGetUserQuery } from "redux/usersAPI.js";
import { Item } from "./Comment.styled.js";

export const Comment = ({ comment }) => {
  const { data: user } = useGetUserQuery(comment?.userId);
  return (
    <Item className="comment">
      <Link to={`/profile/${user?.data.user.name}/${user?.data.user._id}`}>
        <img src={user?.data.user.profilePicture} alt="" />
      </Link>
      <div className="info">
        <p>{user?.data.user.name}</p>
        <p>{comment.desc}</p>
      </div>
      <span className="date">1 hour ago</span>
    </Item>
  );
};
