// import axios from "axios";
// import { useEffect, useState } from "react";
import { useGetUserQuery } from "redux/usersAPI";
import { ConversationWrapper } from "./Conversation.styled";

export default function Conversation({ conversation, currentUser }) {
  // const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const friendId = conversation.members.find((m) => m !== currentUser._id);
  const { data: user } = useGetUserQuery(friendId);

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const res = await axios("/users?userId=" + friendId);
  //       setUser(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();
  // }, [currentUser, conversation]);

  return (
    <ConversationWrapper className="conversation">
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
