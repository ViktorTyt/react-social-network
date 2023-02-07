import styled from "@emotion/styled";
import { device, theme } from "styles";

export const Images = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;
export const CoverPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ProfilePictureBox = styled.div`
  /* display: flex;
  align-items: center;
  gap: 20px; */
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 200px;
  width: 200px;
  height: 200px;

  > button {
    position: absolute;
    left: 150px;
    bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background-color: ${theme.colors.lightMode.bgSoft};
    border-radius: 50%;
    /* border: 1px solid black; */
  }
`;

export const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const EditProfilePictureContainer = styled.div`
  position: absolute;
  top: 185px;
  width: 150px;
  /* height: 50px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  padding: 12px;
  background-color: ${theme.colors.lightMode.bg};
  border-radius: 8px;
  border: 1px solid gray;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    display: flex;
    align-items: center;
    height: 24px;
    gap: 2px;
    font-size: 12px;
    padding: 4px 6px;
    border-radius: 6px;
    background-color: ${theme.colors.lightMode.bg};

    &:hover {
      background-color: ${theme.colors.lightMode.bgSoft};
    }

    &:focus {
      background-color: ${theme.colors.lightMode.bgSoft};
    }

    span {
      ${device.mobile} {
        display: none;
      }

      ${device.desktop} {
        display: flex;
      }
    }
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 0;
  height: 100px;
  width: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  padding: 12px;
  background-color: ${theme.colors.lightMode.bg};
  border-radius: 8px;
  border: 1px solid gray;
  font-size: 16px;
`;

export const EditCoverBox = styled.div`
  position: absolute;
  right: 10px;
  bottom: 8px;
`;

export const CancelCover = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  display: flex;
  align-items: center;
  height: 24px;
  gap: 2px;
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 6px;
  background-color: ${theme.colors.lightMode.bgSoft};
`;
