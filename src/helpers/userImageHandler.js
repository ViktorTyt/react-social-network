const userImageHandler = async (
  picture,
  newImage,
  addImageToDB,
  clearNewImageField,
  userId
) => {
  console.log(picture);

  const data = new FormData();

  const fileName = Date.now() + newImage.name;
  data.append("name", fileName);
  data.append(picture, newImage);
  data.append("userId", userId);
  console.dir(data);
  for (const value of data.values()) {
    console.log(value);
  }
  try {
    await addImageToDB(data);
    console.log("after add data to DB");
    // window.location.reload();
  } catch (error) {
    console.log(error);
  } finally {
    clearNewImageField(null);
  }
};

export default userImageHandler;

//  const data = new FormData();

//   const fileName = Date.now() + cover.name;
//   data.append("name", fileName);
//   data.append("cover", cover);
//   data.append("userId", currentUser._id);
//   // console.dir(data);
//   // for (const value of data.values()) {
//   //   console.log(value);
//   // }
//   try {
//     await updateCover(data);
//     console.log("after createPost data");
//     // window.location.reload();
//   } catch (error) {
//     console.log(error);
//   } finally {
//     setCover(null);
//   }
