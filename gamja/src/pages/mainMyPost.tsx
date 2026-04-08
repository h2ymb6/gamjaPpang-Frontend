import styled from "styled-components";
import Post from "../components/main/post";
import MainPageLayouts from "../layouts/mainPageLoyouts";

function MainMyPost() {
  return (
    <>
      <MainPageLayouts>
        <PostWrap>
          <Post />
          <Post />
        </PostWrap>
      </MainPageLayouts>
    </>
  );
}

export default MainMyPost;

const PostWrap = styled.div`
  display: flex;
  gap: 10px;
`;
