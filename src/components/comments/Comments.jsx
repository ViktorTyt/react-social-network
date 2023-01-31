import { useContext } from "react";
import { TestAuthContext } from "../../context/testAuthContext";
import { CommentBox, CommentsWrapper, Item } from "./Commets.styled";

const Comments = () => {
  const { currentUser } = useContext(TestAuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <CommentsWrapper className="comments">
      <CommentBox className="write">
        <img src={PF + currentUser.profilePicture} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </CommentBox>
      <ul>
        {comments.map((comment) => (
          <Item className="comment" key={comment.id}>
            <img src={comment.profilePicture} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </Item>
        ))}
      </ul>
    </CommentsWrapper>
  );
};

export default Comments;
