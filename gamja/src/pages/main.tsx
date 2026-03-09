import styled from "styled-components";
import Header from "../components/common/header";
import ImgSlide from "../components/main/ImgSlide";
import Post from "../components/main/post";

function Main() {
  return (
    <>
      <Header />
      <ImgSlide />

      <MainWrap>
        <MenuWrap>
          <Title>메뉴</Title>
          <Menu>내가 작성한 게시글</Menu>
          <Menu>좋아요한 게시글</Menu>
          <Menu>새 게시글 작성</Menu>
          <Menu>문의하기</Menu>
          <Menu>로그아웃</Menu>
        </MenuWrap>

        <div>
          <Order>
            <div
              style={{
                borderRight: "1px solid black",
                paddingRight: "6px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              좋아요순
            </div>
            <div
              style={{ color: "gray", paddingLeft: "6px", fontSize: "16px" }}
            >
              최신순
            </div>
          </Order>
          <PostWrap>
            <Post />
            <Post />
          </PostWrap>
        </div>
      </MainWrap>
    </>
  );
}

export default Main;

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const Title = styled.h1`
  font-weight: 600;
`;
const Order = styled.div`
  display: flex;
  margin-bottom: 15px;
  margin-left: 15px;
`;
const PostWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const MenuWrap = styled.div`
  font-size: 14px;
  border: 1px solid rgba(163, 163, 163);
  border-radius: 6px;
  width: 164px;
  height: 281px;
  box-sizing: border-box;
  padding: 20px;
  margin-right: 20px;
  margin-top: 30px;
`;

const Menu = styled.div`
  margin-top: 15px;
  color: gray;
`;
