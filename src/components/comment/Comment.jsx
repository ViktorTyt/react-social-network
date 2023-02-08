import { useGetUserQuery } from "redux/usersAPI.js";
import { Item } from "./Comment.styled.js";
export const Comment = ({ comment }) => {
  const { data: user } = useGetUserQuery(comment?.userId);
  return (
    <Item className="comment">
      <img src={user?.data.user.profilePicture} alt="" />
      <div className="info">
        <p>{user?.data.user.name}</p>
        <p>{comment.desc}</p>
      </div>
      <span className="date">1 hour ago</span>
    </Item>
  );
};
