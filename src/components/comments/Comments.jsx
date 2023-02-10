import { useState } from "react";
import { useSelector } from "react-redux";
import { Comment } from "components/comment/Comment";
import { Loader } from "components/loader/Loader";
import { useAddCommentMutation, useGetPostCommentsQuery } from "redux/postsAPI";
import { CommentBox, CommentsWrapper } from "./Commets.styled";

const Comments = ({ postId }) => {
  const [commentText, setCommentText] = useState("");
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const currentUser = useSelector((state) => state.state);

  const { data, isLoading } = useGetPostCommentsQuery(postId);
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
