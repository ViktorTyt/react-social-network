// import axios from "axios";
import { useEffect, useState } from "react";
import { useGetUserQuery } from "redux/usersAPI";
import { ConversationWrapper } from "./Conversation.styled";

export default function Conversation({
  conversation,
  currentUser,
  currentChat,
  setCurrentChat,
}) {
  // const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const friendId = conversation.members.find((m) => m !== currentUser._id);
  const { data: user } = useGetUserQuery(friendId);

  const choiceConv = conversation._id === currentChat._id;
  console.log("conversation");
  console.log(choiceConv);

  return (
    <ConversationWrapper
      className="conversation"
      choiceConv={choiceConv}
      onClick={() => setCurrentChat(conversation)}
    >
      <img
        className="conversationImg"
        src={
          user?.data.user.profilePicture
            ? user?.data.user.profilePicture
            : PF + "person/not_found.png"
        }
        alt=""
      />
      <span className="conversationName">{user?.data.user.name}</span>
    </ConversationWrapper>
  );
}
