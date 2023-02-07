import {
  CoverPicture,
  EditCoverBox,
  Images,
  MenuWrapper,
  ModalContainer,
  ProfilePicture,
  CancelCover,
  ProfilePictureBox,
  EditProfilePictureContainer,
} from "./CoverMenu.styled";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState } from "react";
import {
  useUpdateUserAvatarMutation,
  useUpdateUserCoverMutation,
} from "redux/usersAPI";
import { useSelector } from "react-redux";
import { Cancel } from "@mui/icons-material";
import userImageHandler from "helpers/userImageHandler";

export default function CoverMenu() {
  const currentUser = useSelector((state) => state.state);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [cover, setCover] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const [anchorCover, setAnchorCover] = useState(null);
  const [anchorAvatar, setAnchorAvatar] = useState(null);

  const [updateCover] = useUpdateUserCoverMutation();
  const [updateAvatar] = useUpdateUserAvatarMutation();

  const openCover = Boolean(anchorCover);
  const openAvatar = Boolean(anchorAvatar);
  // const [logout] = useLogoutMutation();

  const handleClick = (event) => {
    console.log(event.currentTarget.id);
    if (event.currentTarget.id === "cover-button") {
      setAnchorCover(event.currentTarget);
    } else {
      setAnchorAvatar(event.currentTarget.id);
    }
  };
  const handleClose = () => {
    setAnchorCover(null);
    setCover(null);
    setAnchorAvatar(null);
    setAvatar(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cover) {
      userImageHandler("cover", cover, updateCover, setCover, currentUser._id);
    } else {
      userImageHandler(
        "avatar",
        avatar,
        updateAvatar,
        setAvatar,
        currentUser._id
      );
    }
  };

  return (
    <Images className="images">
      <CoverPicture
        src={
          !cover
            ? currentUser?.coverPicture
              ? currentUser.coverPicture
              : PF + "post/3.jpeg"
            : URL.createObjectURL(cover)
        }
        alt="coverPicture"
      />
      <ProfilePictureBox>
        <ProfilePicture
          src={
            !avatar
              ? currentUser?.profilePicture
                ? currentUser.profilePicture
                : PF + "person/not_found.png"
              : URL.createObjectURL(avatar)
          }
          alt="profilePicture"
        />

        <button id="avatar-button" onClick={handleClick}>
          <CameraAltIcon />
        </button>
      </ProfilePictureBox>
      {anchorAvatar && (
        <EditProfilePictureContainer
          id="basic-menu"
          open={openAvatar}
          onClose={handleClose}
        >
          <form className="bottom" onSubmit={handleSubmit}>
            <label htmlFor="file">
              Завантажити
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                accept=".png, .jpeg, .jpg"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
            </label>
            <button type="submit">Підтвердити</button>
          </form>
          <button onClick={handleClose}>Видалити</button>
          <button onClick={handleClose}>Назад</button>
        </EditProfilePictureContainer>
      )}
      <EditCoverBox>
        <MenuWrapper>
          <button id="cover-button" onClick={handleClick}>
            <CameraAltIcon />
            <span>Редагувати обкладинку</span>
          </button>

          {anchorCover && (
            <ModalContainer
              id="basic-menu"
              open={openCover}
              onClose={handleClose}
            >
              <form className="bottom" onSubmit={handleSubmit}>
                <label htmlFor="file">
                  Завантажити
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    accept=".png, .jpeg, .jpg"
                    onChange={(e) => setCover(e.target.files[0])}
                  />
                </label>
                <button type="submit">Завантажити</button>
              </form>

              <button onClick={handleClose}>Видалити</button>
              <button onClick={handleClose}>Назад</button>
            </ModalContainer>
          )}
        </MenuWrapper>
      </EditCoverBox>
      {cover && (
        <CancelCover>
          <Cancel className="shareCancelImg" onClick={() => setCover(null)} />
          <span>Відмінити</span>
        </CancelCover>
      )}
    </Images>
  );
}
