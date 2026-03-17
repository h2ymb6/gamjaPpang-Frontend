import HeaderV2 from "../components/common/headerV2";
import WritingSection from "../components/write/writingSection";
import styled from "styled-components";

function Write() {
  return (
    <>
      <HeaderV2 />
      <TopWrap>
        <Title placeholder="제목을 작성하세요"></Title>
        <ProfileWrap>
          <Profile></Profile>
          <Name>작성자</Name>
        </ProfileWrap>
      </TopWrap>

      <WritingSection />
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

const Title = styled.input`
  font-size: 40px;
  font-weight: 700;
  width: 937px;
  border: none;
  display: flex;
  justify-content: center;
  margin-left: 93px;

  &:focus {
    outline: none;
  }
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
