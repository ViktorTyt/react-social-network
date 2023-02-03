import Stories from "../../components/stories/Stories";
import ShareTest from "../../components/shareTest/ShareTest";
import PostTest from "../../components/postTest/PostTest";

import { HomeWrapper } from "./Home.styled";
import Posts from "components/posts/Posts";
import { useCurrentUserQuery } from "redux/authAPI";

export default function Home() {
  const { data: currentUser, isFetching, error } = useCurrentUserQuery();
  console.log(currentUser);
  console.log("home");
  return (
    !isFetching && (
      <>
        <HomeWrapper>
          <Stories />
          <ShareTest />
          <Posts />
        </HomeWrapper>
      </>
    )
  );
}
