import styled from "@emotion/styled";
import { device, theme } from "styles";

export const MessengerWrapper = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  position: sticky;
  top: 70px;
`;

export const Wrapper = styled.div`
  padding: 10px;
  height: 100%;
`;

export const ChatMenu = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: scroll;
  padding-right: 10px;

  ${device.tablet} {
    flex: 3.5;
  }

  input {
    ${device.mobile} {
      display: none;
    }

    ${device.tablet} {
      display: block;
      width: 90%;
      padding: 10px 0;
      border: none;
      border-bottom: 1px solid gray;
    }
  }
`;

export const ChatBox = styled.div`
  flex: 10;

  ${device.tablet} {
    flex: 5.5;
  }

  .chatBoxWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
`;

export const ChatBoxChat = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 10px;
  background-color: ${theme.colors.lightMode.bg};
  margin-bottom: 20px;
`;

export const ChatIsEmpty = styled.span`
  position: absolute;
  top: 10%;
  font-size: 50px;
  color: rgb(224, 220, 220);
  cursor: default;
`;

export const ChatBoxInputBox = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  > textarea {
    width: 80%;
    height: 90px;
    padding: 10px;
  }

  > button {
    width: 70px;
    height: 40px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: teal;
    color: white;
  }
`;

export const ChatOnlineFriends = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: scroll;
  padding-right: 10px;

  ${device.tablet} {
    flex: 3.5;
  }
`;
