import { MenuWrapper, ModalContainer } from "./CoverMenu.styled";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import { useState } from "react";
import { useUpdateUserCoverMutation } from "redux/usersAPI";
import { useSelector } from "react-redux";
import { Cancel } from "@mui/icons-material";

export default function CoverMenu() {
  const currentUser = useSelector((state) => state.state);

  const [cover, setCover] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const [updateCover] = useUpdateUserCoverMutation();

  const open = Boolean(anchorEl);
  // const [logout] = useLogoutMutation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cover) {
      const data = new FormData();

      const fileName = Date.now() + cover.name;
      data.append("name", fileName);
      data.append("cover", cover);
      data.append("userId", currentUser._id);
      // console.dir(data);
      // for (const value of data.values()) {
      //   console.log(value);
      // }
      try {
        await updateCover(data);
        console.log("after createPost data");
        // window.location.reload();
      } catch (error) {
        console.log(error);
      } finally {
        setCover(null);
      }
    }
  };

  return (
    <MenuWrapper>
      <button id="basic-button" onClick={handleClick}>
        <PhotoCameraOutlinedIcon />
        <span>Редагувати обкладинку</span>
      </button>

      {anchorEl && (
        <ModalContainer id="basic-menu" open={open} onClose={handleClose}>
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
            {cover && (
              <div className="imageContainer">
                <img
                  src={URL.createObjectURL(cover)}
                  alt=""
                  className="shareImg"
                />
                <Cancel
                  className="shareCancelImg"
                  onClick={() => setCover(null)}
                />
              </div>
            )}
            <button type="submit">Завантажити</button>
          </form>

          <button onClick={handleClose}>Видалити</button>
          <button onClick={handleClose}>Назад</button>
        </ModalContainer>
      )}
    </MenuWrapper>
  );
}
