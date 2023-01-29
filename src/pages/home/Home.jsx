import Feed from "../../components/feed/Feed";
import Posts from "../../components/posts/Posts";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Stories from "../../components/stories/Stories";
import Topbar from "../../components/topbar/Topbar";
import ShareTest from "../../components/shareTest/ShareTest";

import { HomeWrapper } from "./Home.styled";

export default function Home() {
  console.log("home");
  return (
    <>
      {/* <Topbar /> */}
      <HomeWrapper>
        <Stories />
        {/* <ShareTest />
        <Posts /> */}
        {/* <Sidebar /> */}
        {/* <Feed /> */}
        {/* <Rightbar /> */}
      </HomeWrapper>
    </>
  );
}
