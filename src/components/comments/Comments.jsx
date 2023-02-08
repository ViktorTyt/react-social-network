import { Comment } from "components/comment/Comment";
import { Loader } from "components/loader/Loader";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useAddCommentMutation, useGetPostCommentsQuery } from "redux/postsAPI";
import { TestAuthContext } from "../../context/testAuthContext";
import { CommentBox, CommentsWrapper, Item } from "./Commets.styled";

const Comments = ({ postId }) => {
  const [commentText, setCommentText] = useState("");
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const currentUser = useSelector((state) => state.state);

  const { data, isLoading, isFetching } = useGetPostCommentsQuery(postId);
  console.log(data);

  const [addComment, { isLoading: isUpdating }] = useAddCommentMutation();

  const handleInputChange = (e) => {
    setCommentText(e.target.value);
  };

  const hadleSubmit = async () => {
    await addComment({
      postId,
      userId: currentUser._id,
      desc: commentText,
    }).unwrap();

    setCommentText("");
    // window.location.reload();
  };
  //Temporary
  // const comments = [
  //   {
  //     id: 1,
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
  //     name: "John Doe",
  //     userId: 1,
  //     profilePicture:
  //       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
  //     name: "Jane Doe",
  //     userId: 2,
  //     profilePicture:
  //       "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   },
  // ];
  return isLoading ? (
    <Loader />
  ) : (
    <CommentsWrapper className="comments">
      <CommentBox className="write">
        <img
          src={
            currentUser.profilePicture
              ? currentUser.profilePicture
              : PF + "person/not_found.png"
          }
          alt=""
        />
        <input
          type="text"
          placeholder="write a comment"
          value={commentText}
          onChange={handleInputChange}
        />
        <button onClick={hadleSubmit}>Send</button>
      </CommentBox>
      <ul>
        {!isUpdating &&
          data?.data.comments?.map((comment) => (
            <Comment comment={comment} key={comment._id} />
          ))}
      </ul>
    </CommentsWrapper>
  );
};

export default Comments;
