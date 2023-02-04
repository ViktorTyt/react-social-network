import { Loader } from "components/loader/Loader";
import { useSelector } from "react-redux";
import { useGetPostsQuery } from "redux/postsAPI";
import PostTest from "../postTest/PostTest";
import { PostsList } from "./Posts.styled";

export default function Posts() {
  const { _id } = useSelector((state) => state.state);
  const { data, isFetching } = useGetPostsQuery(_id);
  console.log(data);
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

  return isFetching ? (
    <Loader />
  ) : (
    <PostsList className="posts">
      {data?.map((post) => (
        <PostTest post={post} key={post._id} />
      ))}
    </PostsList>
  );
}
