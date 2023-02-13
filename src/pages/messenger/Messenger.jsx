// import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/authSlice";
import { useGetConversationByUserQuery } from "redux/conversationsAPI";
import { useGetMessagesQuery } from "redux/messagesAPI";
import {
  ChatBox,
  ChatBoxChat,
  ChatBoxInputBox,
  ChatIsEmpty,
  ChatMenu,
  MessengerWrapper,
  Wrapper,
  ChatOnlineFriends,
} from "./Messenger.styled";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const user = useSelector(selectCurrentUser);
  const scrollRef = useRef();

  useEffect(() => {
    console.log("before io line 36");
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    console.log("before arrivalMessage line 48");

    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    console.log("line 56");
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      console.log(user);
      console.log(users);
      setOnlineUsers(
        user.followings?.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    const getConversations = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/conversations/" + user._id,
          config
        );
        setConversations(res.data);
        setCurrentChat(res.data[0] || null);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    const getMessages = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/messages/" + currentChat?._id,
          config
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };

    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    console.log(currentChat);
    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post(
        "http://localhost:8800/api/messages",
        message,
        config
      );
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <MessengerWrapper className="messenger">
      <ChatMenu className="chatMenu">
        <Wrapper className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          {conversations.map((c) => (
            <ul onClick={() => setCurrentChat(c)}>
              <Conversation
                key={c._id}
                conversation={c}
                currentUser={user}
                currentChat={currentChat}
              />
            </ul>
          ))}
        </Wrapper>
      </ChatMenu>
      <ChatBox className="chatBox">
        <Wrapper className="chatBoxWrapper">
          {currentChat ? (
            <>
              <ChatBoxChat className="chatBoxTop">
                {messages.map((message) => (
                  <div ref={scrollRef}>
                    <Message
                      message={message}
                      own={message.sender === user._id}
                    />
                  </div>
                ))}
              </ChatBoxChat>
              <ChatBoxInputBox className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <button className="chatSubmitButton" onClick={handleSubmit}>
                  Send
                </button>
              </ChatBoxInputBox>
            </>
          ) : (
            <ChatIsEmpty className="noConversationText">
              Open a conversation to start a chat.
            </ChatIsEmpty>
          )}
        </Wrapper>
      </ChatBox>
      <ChatOnlineFriends className="chatOnline">
        <Wrapper className="chatOnlineWrapper">
          <ChatOnline
            onlineUsers={onlineUsers}
            currentId={user._id}
            token={user.token}
            setCurrentChat={setCurrentChat}
          />
        </Wrapper>
      </ChatOnlineFriends>
    </MessengerWrapper>
  );
}
