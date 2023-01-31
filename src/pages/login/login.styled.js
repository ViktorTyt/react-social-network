import styled from "@emotion/styled";
import { device, theme } from "styles";

export const LoginWrapper = styled.div`
  height: 100vh;
  background-color: rgb(193, 190, 255);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
  background-color: white;

  overflow: hidden;

  ${device.tablet} {
    flex-direction: row;
    min-height: 400px;
  }

  ${device.desktop} {
    /* width: 50%; */
    border-radius: 10px;
  }
`;

export const ImageSide = styled.div`
  flex: 1;
  background: linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)),
    url("https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600")
      center;
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  color: white;

  ${device.tablet} {
    gap: 30px;
  }

  h1 {
    font-size: 36px;
    line-height: 36px;

    ${device.tablet} {
      font-size: 64px;
      line-height: 64px;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.3;

    ${device.desktop} {
      font-size: 26px;

      align-self: center;
    }
  }

  span {
    font-size: 14px;
    line-height: 1.3;

    ${device.desktop} {
      font-size: 18px;

      align-self: center;
    }
  }

  button {
    width: 50%;
    padding: 10px;
    border: none;
    background-color: white;
    color: rebeccapurple;
    font-weight: bold;
    cursor: pointer;
    align-self: center;
  }
`;

export const FormSide = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  ${device.tablet} {
    gap: 50px;
    align-items: center;
  }

  h1 {
    color: #555;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;

    input {
      width: 250px;
      border: none;
      border-bottom: 1px solid lightgray;
      padding: 20px 10px;
      align-self: center;

      ${device.tablet} {
      }

      ${device.desktop} {
        width: 350px;
      }
    }

    button {
      width: 50%;
      padding: 10px;
      border: none;
      background-color: #938eef;
      color: white;
      font-weight: bold;
      cursor: pointer;
      align-self: center;
    }
  }
`;
