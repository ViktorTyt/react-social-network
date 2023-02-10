import styled from "@emotion/styled";
// import { device, theme } from "styles";

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => (p.own ? "flex-end" : "flex-start")};
  margin-top: 20px;
`;

export const MessageInfo = styled.div`
  display: flex;

  > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  > p {
    padding: 10px;
    border-radius: 20px;
    background-color: ${(p) => (p.own ? "rgb(245, 241, 241)" : "#1877f2")};
    color: ${(p) => (p.own ? "black" : "white")};
    max-width: 300px;
  }
`;

export const MessageTime = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;
