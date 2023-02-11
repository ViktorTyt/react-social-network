import styled from "@emotion/styled";
import { device, theme } from "styles";

export const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 320px;
  background-color: ${theme.colors.lightMode.bg};
  padding: 12px;
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  border-radius: 10px;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  .confirmButton {
    width: 150px;
  }

  textarea {
    height: 120px;
    padding: 12px 16px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    resize: none;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &::placeholder {

      color: rgba(117, 117, 117, 0.5);

    &:focus {
      border-color: ${theme.colors.lightMode.bg});
      outline: none;
    }
  }
}
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: ${theme.colors.lightMode.bg};
  }
`;
