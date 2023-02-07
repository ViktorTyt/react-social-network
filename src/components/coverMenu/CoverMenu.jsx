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
import { useCurrentUserQuery } from "redux/authAPI";

export default function CoverMenu() {
  const currentUser = useSelector((state) => state.state);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [toFetch, setToFetch] = useState(true);
  const [cover, setCover] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const [anchorCover, setAnchorCover] = useState(null);
  const [anchorAvatar, setAnchorAvatar] = useState(null);

  const [updateCover] = useUpdateUserCoverMutation();
  const [updateAvatar] = useUpdateUserAvatarMutation();
  const { data, refetch } = useCurrentUserQuery(null, { skip: toFetch });

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

    try {
      if (cover) {
        await userImageHandler(
          "cover",
          cover,
          updateCover,
          setCover,
          currentUser._id
        );
        window.location.reload();
        // setToFetch(!toFetch);
      } else {
        await userImageHandler(
          "avatar",
          avatar,
          updateAvatar,
          setAvatar,
          currentUser._id
        );
        window.location.reload();

        // setToFetch(!toFetch);
      }
    } catch (err) {
      console.log(err);
    } finally {
      handleClose();
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

        <button id="avatar-button" onClick={handleClick} disabled={openCover}>
          <CameraAltIcon />
        </button>

        {anchorAvatar && (
          <EditProfilePictureContainer
            id="basic-menu"
            open={openAvatar}
            onClose={handleClose}
          >
            <form className="bottom" onSubmit={handleSubmit}>
              <label htmlFor="file">
                {!avatar && "Завантажити"}
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  accept=".png, .jpeg, .jpg"
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
              </label>
              {avatar && <button type="submit">Підтвердити</button>}
            </form>
            {!avatar && <button onClick={handleClose}>Видалити</button>}
            <button onClick={handleClose}>Назад</button>
          </EditProfilePictureContainer>
        )}
      </ProfilePictureBox>
      <EditCoverBox>
        <MenuWrapper>
          <button id="cover-button" onClick={handleClick} disabled={openAvatar}>
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
                  {!cover && "Завантажити"}
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    accept=".png, .jpeg, .jpg"
                    onChange={(e) => setCover(e.target.files[0])}
                  />
                </label>
                {cover && <button type="submit">Завантажити</button>}
              </form>

              {!cover && <button onClick={handleClose}>Видалити</button>}
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
