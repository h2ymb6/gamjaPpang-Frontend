import styled from "styled-components";
import Post from "../components/main/post";
import MainPageLayouts from "../layouts/mainPageLoyouts";
import { commentWrite } from "../apis/comment/index";
import { useEffect, useState } from "react";
import type { Type } from "../apis/comment/type";

function MainMyPost() {
  const [comment, setComment] = useState<Type[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getComment = async () => {
      try {
        const data = await commentWrite();
        setComment(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getComment();
  }, []);

  if (loading === true) return <div>로딩중</div>;
  return (
    <>
      <MainPageLayouts>
        <PostWrap>
          {comment.map((post) => {
            return <Post />;
          })}
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
