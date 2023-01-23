import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  // console.log(username);
  useEffect(() => {
    const getPosts = async () => {
      const { data } = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/63cc12dccb1b77d917b8f482");
      setPosts(data);
    };
    getPosts();
  }, [username]);

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
