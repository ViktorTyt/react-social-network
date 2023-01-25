import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  console.log(username);
  useEffect(() => {
    const getPosts = async () => {
      const { data } = username
        ? await axios.get(`http://localhost:8800/api/posts/profile/${username}`)
        : await axios.get(
            "http://localhost:8800/api/posts/timeline/" + user._id
          );
      setPosts(data);
    };
    getPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
