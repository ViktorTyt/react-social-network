import styled from "@emotion/styled";
import { device, theme } from "styles";

export const ProfileWrapper = styled.div`
  ${theme.colors.lightMode.bgSoft}
`;

// export const Images = styled.div`
//   width: 100%;
//   height: 300px;
//   position: relative;
// `;

// export const CoverPicture = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// export const ProfilePicture = styled.img`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   object-fit: cover;
//   position: absolute;
//   left: 0;
//   right: 0;
//   margin: auto;
//   top: 200px;
// `;

// export const EditCoverBox = styled.div`
//   position: absolute;
//   right: 10px;
//   bottom: 8px;

//   button {
//     display: flex;
//     align-items: center;
//     height: 24px;
//     gap: 2px;
//     font-size: 12px;
//     padding: 4px 6px;
//     border-radius: 6px;
//     background-color: ${theme.colors.lightMode.bg};

//     &:hover {
//       background-color: ${theme.colors.lightMode.bgSoft};
//     }

//     &:focus {
//       background-color: ${theme.colors.lightMode.bgSoft};
//     }

//     span {
//       ${device.mobile} {
//         display: none;
//       }

//       ${device.desktop} {
//         display: flex;
//       }
//     }
//   }
// `;
export const PofileContainer = styled.div`
  padding: 10px;

  ${device.tablet} {
    padding: 20px;
  }

  ${device.desktop} {
    padding: 20px 70px;
  }
`;

export const UserInfo = styled.div`
  ${device.mobileOnly} {
    margin-top: 100px;
  }

  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  background-color: ${theme.colors.lightMode.bg};
  color: ${theme.colors.lightMode.textColo};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 30vh;
  padding: 20px;

  ${device.tablet} {
    flex-direction: row;
    height: 180px;
    padding: 50px;
  }
`;

export const UserInfoLeft = styled.div`
  flex: 0.5;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  /* ${device.desktop} {
    flex-wrap: nowrap;
  } */

  a {
    color: ${theme.colors.lightMode.textColorSoft};
  }
`;

export const UserInfoCenter = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  span {
    font-size: 20px;
    font-weight: 500;
  }

  .info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .item {
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${theme.colors.lightMode.textColorSoft};

      span {
        font-size: 12px;
      }
    }
  }
  button {
    border: none;
    background-color: #5271ff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const UserInfoRight = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;
