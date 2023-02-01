import { useContext } from "react";
import { useSelector } from "react-redux";
import { TestAuthContext } from "../../context/testAuthContext";
import { StoriesWrapper, Story } from "./Stories.styled";

const Stories = () => {
  // const { currentUser } = useContext(TestAuthContext);
  const currentUser = useSelector((state) => state.state);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  console.log(currentUser);
  // TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <StoriesWrapper className="stories">
      <Story className="story">
        <img
          src={
            currentUser.coverPicture
              ? currentUser.coverPicture
              : PF + "post/4.jpeg"
          }
          alt=""
        />
        <span>{currentUser.name}</span>
        <button>+</button>
      </Story>
      {stories.map((story) => (
        <Story className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </Story>
      ))}
    </StoriesWrapper>
  );
};

export default Stories;
