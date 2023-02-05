import styled from "@emotion/styled";
import { device, theme } from "styles";

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalContainer = styled.div`
  position: absolute;
  right: 0;
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  padding: 12px;
  background-color: ${theme.colors.lightMode.bg};
`;
