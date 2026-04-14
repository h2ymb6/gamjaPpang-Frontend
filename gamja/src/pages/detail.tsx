import styled from "styled-components";
import Header from "../components/common/header";
import { GoToEditButton } from "../components/commentPatch/goToEditButton";
import { useEffect, useState } from "react";
import Comment from "../components/chat/comment";
import GetComment from "../apis/get/postComment/index";
import type { Type } from "../apis/get/postComment/type";
import { useParams } from "react-router-dom";

function Detail() {
  const [comment, setComment] = useState<Type[]>([]);

  const { postId } = useParams();
  const currentPostId = Number(postId);

  useEffect(() => {
    const getComment = async () => {
      try {
        const data = await GetComment(1);
        setComment(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getComment();
  }, []);

  return (
    <>
      <Header />

      <Wrap>
        <Title>[JAVA] Optional이란? Optional 개념 및 사용법</Title>
        <TitleBottom>
          <ProfileWrap>
            <Profile></Profile>
            <Name>작성자</Name>
          </ProfileWrap>

          <Date>2025.12.24. 19:19</Date>
        </TitleBottom>

        <Line style={{}}></Line>

        <Text>대충 내용</Text>
      </Wrap>
      <GoToEditButton postId={currentPostId} />
      {comment.map((comment, index) => {
        return (
          <Comment
            key={index}
            author={comment.author}
            content={comment.content}
            createdAt={comment.createdAt}
          />
        );
      })}
    </>
  );
}

export default Detail;

const Line = styled.div`
  border-bottom: 1px solid gray;
  width: 937px;
`;

const Date = styled.div``;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const Text = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: start;
  width: 900px;
`;

const TitleBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  margin: 20px 0px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  width: 937px;
  border: none;
  display: flex;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

const Profile = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray;
  border-radius: 100%;
`;

const Name = styled.p`
  font-size: 16px;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 10px 0px;
`;
