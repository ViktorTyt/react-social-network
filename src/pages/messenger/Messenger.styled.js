import styled from "@emotion/styled";
import { device, theme } from "styles";

export const MessengerWrapper = styled.div`
  height: calc(100vh - 100px);
  display: flex;

  position: sticky;
  top: 70px;

  ${device.mobileOnly} {
    flex-direction: column;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  ${device.tablet} {
    display: none;
  }
`;
export const ConvButton = styled.button`
  /* width: 100px; */
  /* height: 50px; */
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
`;
export const OnlineButton = styled.button`
  /* width: 100px; */
  /* height: 50px; */
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
`;

export const Wrapper = styled.div`
  padding: 10px;
  height: 100%;
`;

export const ChatMenu = styled.div`
  ${device.mobileOnly} {
    display: ${(p) => (p.isOpenConv ? "block" : "none")};
    position: absolute;
    top: 55px;
    left: 10px;
    z-index: 99;
    width: 150px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
    -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  }

  ${device.tablet} {
    display: flex;

    flex: 3.5;
    height: 100%;

    overflow-y: scroll;
    padding-right: 10px;

    &::-webkit-scrollbar {
      display: none;
    }
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
export const ConvList = styled.ul`
  display: flex;
  flex-direction: column;
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
  height: 300px;
  overflow-y: scroll;
  padding: 10px;
  background-color: ${theme.colors.lightMode.bg};
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  ${device.tablet} {
    height: 100%;
  }
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
    background-color: ${({ disabled }) => (disabled ? "lightgray" : "teal")};
    color: white;
  }
`;

export const ChatOnlineFriends = styled.div`
  ${device.mobileOnly} {
    display: ${(p) => (p.isOpenOnline ? "block" : "none")};
    position: absolute;
    top: 55px;
    right: 10px;
    width: 150px;
    z-index: 99;
    background-color: white;
    -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
    -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  }

  ${device.tablet} {
    display: flex;

    flex: 3.5;

    height: 100%;
    overflow-y: scroll;
    padding-right: 10px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
