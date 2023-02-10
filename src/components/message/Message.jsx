import "./message.css";
import TimeAgo from "react-timeago";
import { useGetUserQuery } from "redux/usersAPI";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/authSlice";

export default function Message({ message, own }) {
  const user = useSelector(selectCurrentUser);
  const { data: friend } = useGetUserQuery(message.sender, { skip: own });
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const choiceUser = own ? user : friend.data.user;

  return (
    <div className={own ? "message own" : "message"} own={own}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={
            choiceUser?.profilePicture
              ? choiceUser.profilePicture
              : PF + "person/not_found.png"
          }
          alt=""
        />
        <p className="messageText" own={own}>
          {message.text}
        </p>
      </div>
      <div className="messageBottom">
        <TimeAgo date={message.createdAt} />
      </div>
    </div>
  );
}
