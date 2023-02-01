import styled from "@emotion/styled";
import { device, theme } from "styles";

export const ShareWrapper = styled.div`
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  background-color: themed("bg");
  color: themed("textColor");
  margin-bottom: 20px;
`;

export const ShareContainer = styled.div`
  padding: 10px;

  ${device.tablet} {
    padding: 20px;
  }

  hr {
    margin: 20px 0px;
    border: none;
    height: 0.5px;
    background-color: themed("border");
  }
`;

export const ShareTop = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  input {
    border: none;
    outline: none;
    padding: 20px 10px;
    background-color: transparent;
    width: 60%;
    color: themed("textColor");
  }
`;

export const ShareBottom = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShareBottomLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 12px;
      color: gray;
    }
  }
`;

export const ShareBottomRight = styled.div`
  button {
    border: none;
    padding: 5px;
    color: white;
    cursor: pointer;
    background-color: #5271ff;
    border-radius: 3px;
  }
`;
