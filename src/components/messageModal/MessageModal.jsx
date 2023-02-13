import { useEffect, useState } from "react";
import {
  useAddConversationMutation,
  useGetConversationByTwoUserQuery,
} from "redux/conversationsAPI";
import { useAddMessageMutation } from "redux/messagesAPI";
import { ModalWrapper, ButtonClose } from "./MessageModal.styled";

const MessageModal = ({ onModal, user, currentUser }) => {
  const [value, setValue] = useState("");
  const [getConv, setGetConv] = useState(true);
  const { data, isSuccess } = useGetConversationByTwoUserQuery(
    {
      firstUserId: currentUser._id,
      secondUserId: user._id,
    },
    { skip: getConv }
  );

  useEffect(() => {
    setGetConv(!getConv);
  }, []);

  const [addMessage] = useAddMessageMutation();

  console.log(data);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit", value);

    if (isSuccess) {
      try {
        await addMessage({
          conversationId: data._id,
          sender: currentUser._id,
          text: value,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setValue("");
      }
    }
  };
  return (
    <ModalWrapper>
      <ButtonClose onClick={onModal}>X</ButtonClose>
      <textarea
        name=""
        id=""
        cols="35"
        rows="10"
        value={value}
        onChange={handleChange}
      ></textarea>
      <button className="confirmButton" onClick={handleSubmit}>
        Надіслати
      </button>
    </ModalWrapper>
  );
};

export default MessageModal;
