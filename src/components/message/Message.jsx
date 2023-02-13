import TimeAgo from "react-timeago";
import { useGetUserQuery } from "redux/usersAPI";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/authSlice";
import { MessageInfo, MessageTime, MessageWrapper } from "./Message.styled";

export default function Message({ message, own }) {
  // console.log(message);
  // console.log(own);
  const user = useSelector(selectCurrentUser);
  const { data: friend } = useGetUserQuery(message.sender, { skip: own });
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const choiceUser = own ? user : friend.data.user;

  return (
    <MessageWrapper className={own ? "message own" : "message"} own={own}>
      <MessageInfo className="messageTop" own={own}>
        <img
          className="messageImg"
          src={
            choiceUser?.profilePicture
              ? choiceUser.profilePicture
              : PF + "person/not_found.png"
          }
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </MessageInfo>
      <MessageTime className="messageBottom">
        <TimeAgo date={message.createdAt} />
      </MessageTime>
    </MessageWrapper>
  );
}
