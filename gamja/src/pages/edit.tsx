import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../apis";
import Header from "../components/common/header";
import styled from "styled-components";
import Title from "../components/write/title";
import WritingSection from "../components/write/writingSection";
import EditSubmit from "../components/commentPatch/editSubmit";

export const Edit = () => {
  const { postId } = useParams();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await api.get(`/api/v1/post/${postId}`);

        setTitle(data.data.title);
        setContent(data.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [postId]);

  return (
    <>
      <Header />
      <TopWrap>
        <Title title={title} setTitle={setTitle} />
        <ProfileWrap>
          <Profile></Profile>
          <Name>작성자</Name>
        </ProfileWrap>
      </TopWrap>

      <WritingSection content={content} setContent={setContent} />
      <EditSubmit
        postId={Number(postId)}
        title={title}
        content={content}
        tag={[]}
      />
    </>
  );
};

const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0px;
`;

const Profile = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray;
  border-radius: 100%;
  margin-left: 30px;
`;

const Name = styled.p`
  font-size: 16px;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 10px 0px;
  width: 900px;
  border-bottom: 1px solid gray;
`;
