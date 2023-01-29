import Stories from "../../components/stories/Stories";
import ShareTest from "../../components/shareTest/ShareTest";
import PostTest from "../../components/postTest/PostTest";

import { HomeWrapper } from "./Home.styled";
import Posts from "components/posts/Posts";

export default function Home() {
  console.log("home");
  return (
    <>
      <HomeWrapper>
        <Stories />
        <ShareTest />
        <Posts />
      </HomeWrapper>
    </>
  );
}
