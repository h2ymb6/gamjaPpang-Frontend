import ChatHistory from "../components/user/chatHistory";
import HeaderV2 from "../components/common/headerV2";
import styled from "styled-components";
import { ProfileEdit } from "../components/user/profileEdit/profileEdit";
import { useState } from "react";

function Mypage() {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <HeaderV2 />

      <Wrapper>
        <Myprofile>
          <MyProfileTitle>내 프로필</MyProfileTitle>
          <UserProfile></UserProfile>
          <NickName>감자빵</NickName>
          <ModifyBtn onClick={() => setEdit(true)}>프로필 수정</ModifyBtn>
        </Myprofile>

        <ChatWrap>
          <ChatTitle>댓글 기록</ChatTitle>
          <ChatHistory></ChatHistory>
          <ChatHistory></ChatHistory>
          <ChatHistory></ChatHistory>
        </ChatWrap>
      </Wrapper>

      {edit && <ProfileEdit/>}
    </>
  );
}

const ChatWrap = styled.div`
  margin-right: 100px;
`;

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Myprofile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 50px;
  margin-top: 30px;
  width: 212px;
`;

const MyProfileTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-left: -15px;
`;

const UserProfile = styled.div`
  width: 212px;
  height: 212px;
  background-color: gray;
  border-radius: 100%;
`;

const NickName = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
`;

const ModifyBtn = styled.button`
  font-size: 16px;
  width: 107px;
  height: 44px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: rgba(240, 240, 240);
  }
  &:active {
    background-color: rgba(200, 200, 200);
  }
`;

export default Mypage;
