import styled from "@emotion/styled";
import { device, theme } from "styles";

export const CommentsWrapper = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const CommentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0px;

  input {
    flex: 5;
    padding: 10px;
    border: 1px solid ${theme.colors.lightMode.border};
    background-color: transparent;
    color: ${theme.colors.lightMode.textColor};
  }

  button {
    border: none;
    background-color: #5271ff;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;
  }
`;

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

    span {
      font-weight: 500;
    }

    p {
      color: themed("textColorSoft");
    }
  }

  span {
    flex: 1;
    align-self: center;
    color: gray;
    font-size: 12px;
  }
`;
