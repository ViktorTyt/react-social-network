import styled from "@emotion/styled";
import { device, theme } from "styles";

export const StoriesWrapper = styled.section`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  height: 50px;
  padding: 10px 0;

  ${device.tablet} {
    height: 150px;
    gap: 20px;
    padding: 20px 0;
  }

  ${device.desktop} {
    height: 150px;
    gap: 20px;
  }
`;

export const Story = styled.section`
  position: relative;
  display: flex;
  overflow: hidden;

  ${device.mobileOnly} {
    flex: none;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  ${device.tablet} {
    flex: 1;
    border-radius: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    display: none;

    ${device.tablet} {
      position: absolute;
      display: flex;
      bottom: 10px;
      left: 10px;
      color: white;
      font-weight: 500;
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    color: white;
    background-color: #5271ff;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${device.tablet} {
      bottom: 10px;
      left: 10px;
    }
  }
`;
