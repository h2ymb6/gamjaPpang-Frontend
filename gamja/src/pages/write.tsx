import Header from "../components/common/header";
import WritingSection from "../components/write/writingSection";
import styled from "styled-components";
import Title from "../components/write/title";
import Submit from "../components/write/submit";


function Write() {
  return (
    <>
      <Header />
      <TopWrap>
        <Title />
        <ProfileWrap>
          <Profile></Profile>
          <Name>작성자</Name>
        </ProfileWrap>
      </TopWrap>

      <WritingSection />
      <Submit />
    </>
  );
}

export default Write;

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
