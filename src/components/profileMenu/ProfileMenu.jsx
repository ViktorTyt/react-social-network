import { useState } from "react";
import { useLogoutMutation } from "redux/authAPI";

import { MenuWrapper, ModalContainer } from "./ProfileMenu.styled";

export default function ProfileMenu({ name }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [logout] = useLogoutMutation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <MenuWrapper>
      <button id="basic-button" onClick={handleClick}>
        {name}
      </button>
      {anchorEl && (
        <ModalContainer id="basic-menu" open={open} onClose={handleClose}>
          <button onClick={handleClose}>Profile</button>
          <button onClick={handleClose}>My account</button>
          <button onClick={handleLogout}>Logout</button>
        </ModalContainer>
      )}
    </MenuWrapper>
  );
}
