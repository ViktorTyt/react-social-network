import Feed from "../../components/feed/Feed";
import Posts from "../../components/posts/Posts";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Stories from "../../components/stories/Stories";
import Topbar from "../../components/topbar/Topbar";
import "./home.scss";

export default function Home() {
  console.log("home");
  return (
    <>
      {/* <Topbar /> */}
      <div className="home">
        <Stories />
        <Posts />
        {/* <Sidebar /> */}
        {/* <Feed /> */}
        {/* <Rightbar /> */}
      </div>
    </>
  );
}
