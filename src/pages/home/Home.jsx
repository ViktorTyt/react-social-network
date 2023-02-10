// import Sidebar from "components/sidebar/Sidebar";
// import Rightbar from "components/rightbar/Rightbar";
import Stories from "../../components/stories/Stories";
import ShareTest from "../../components/share/Share";
import Posts from "components/posts/Posts";

import { HomeWrapper } from "./Home.styled";

export default function Home() {
  console.log("home");
  return (
    <>
      {/* <Sidebar /> */}
      <HomeWrapper>
        <Stories />
        <ShareTest />
        <Posts />
      </HomeWrapper>
      {/* <Rightbar /> */}
    </>
  );
}
