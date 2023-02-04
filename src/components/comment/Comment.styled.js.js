import styled from "@emotion/styled";
import { device, theme } from "styles";

export const Item = styled.li`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  div {
    flex: 5;
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: flex-start;
    background-color: ${theme.colors.lightMode.bgSoft};
    border-radius: 10px;
    padding: 8px 12px;

    p {
      color: ${theme.colors.lightMode.textColor};

      &:last-of-type {
        color: ${theme.colors.lightMode.textColorSoft};
      }
    }
  }

  span {
    flex: 1;
    align-self: center;
    color: gray;
    font-size: 12px;
  }
`;
