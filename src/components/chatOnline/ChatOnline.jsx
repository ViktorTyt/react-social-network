import axios from "axios";
import { useEffect, useState } from "react";
import {
  ImageContainer,
  OnlineFriendInfo,
  OnlineFriendName,
  OnlineWrapper,
} from "./ChatOnline.module";

export default function ChatOnline({
  token,
  onlineUsers,
  currentId,
  setCurrentChat,
}) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const getFriends = async () => {
      console.log("before reaquest");
      const res = await axios.get(
        "http://localhost:8800/api/users/friends/" + currentId,
        config
      );
      console.log(res);
      setFriends(res.data.data);
    };

    getFriends();
  }, [currentId, token]);

  useEffect(() => {
    console.log(friends);
    console.log(onlineUsers);

    setOnlineFriends(friends.filter((f) => onlineUsers?.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const res = await axios.get(
        `http://localhost:8800/api/conversations/find/${currentId}/${user._id}`,
        config
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <OnlineWrapper className="chatOnline">
      {onlineFriends.length > 0 &&
        onlineFriends.map((o) => (
          <OnlineFriendInfo
            className="chatOnlineFriend"
            onClick={() => handleClick(o)}
            key={o._id}
          >
            <ImageContainer className="chatOnlineImgContainer">
              <img
                className="chatOnlineImg"
                src={
                  o?.profilePicture
                    ? o.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
              <div className="chatOnlineBadge"></div>
            </ImageContainer>
            <OnlineFriendName className="chatOnlineName">
              {o?.name}
            </OnlineFriendName>
          </OnlineFriendInfo>
        ))}
    </OnlineWrapper>
  );
}
