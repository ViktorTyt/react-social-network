import { Loader } from "components/loader/Loader";
import { useSelector } from "react-redux";
import { useAllPostByUserQuery, useGetPostsQuery } from "redux/postsAPI";
import Post from "../post/Post";
import { PostsList } from "./Posts.styled";

export default function Posts({ profile }) {
  const { _id } = useSelector((state) => state.state);

  const { data: timelinePosts, isLoading: isLoadingTimline } = useGetPostsQuery(
    _id,
    { skip: profile }
  );
  const { data: allPostByUser, isLoading: isLoadingUsers } =
    useAllPostByUserQuery(profile, { skip: !profile });

  // console.log(profile);
  // console.log("posts");
  const renderPosts = profile ? allPostByUser : timelinePosts;

  return isLoadingTimline || isLoadingUsers ? (
    <Loader />
  ) : (
    <PostsList className="posts">
      {renderPosts?.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </PostsList>
  );
}
