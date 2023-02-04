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

