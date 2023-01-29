import styled from "@emotion/styled";
import { device, theme } from "styles";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${theme.colors.lightMode.bgSoft};
  color: ${theme.colors.lightMode.textColor};

  ${device.tablet} {
    padding: 20px;
  }

  ${device.desktop} {
    padding: 10px 70px;
  }
`;
