import { Loader } from "components/loader/Loader";
import { useSelector } from "react-redux";
import { useAllPostByUserQuery, useGetPostsQuery } from "redux/postsAPI";
import PostTest from "../postTest/PostTest";
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
  //TEMPORARY
  // const posts = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     userId: 1,
  //     profilePic: "person/6.jpeg",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Doe",
  //     userId: 2,
  //     profilePic: "person/6.jpeg",
  //     desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
  //   },
  // ];
  const renderPosts = profile ? allPostByUser : timelinePosts;

  return isLoadingTimline || isLoadingUsers ? (
    <Loader />
  ) : (
    <PostsList className="posts">
      {renderPosts?.map((post) => (
        <PostTest post={post} key={post._id} />
      ))}
    </PostsList>
  );
}
