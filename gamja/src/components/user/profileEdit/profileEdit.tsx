import styled from "styled-components";
import { InputEdit } from "./inputEdit";
import { BtnWrapper } from "./Btnwrapper";

export const ProfileEdit = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <InputEdit title="닉네임" holder="변경할 닉네임을 입력하세요" />
        <InputEdit
          title="비밀번호"
          holder="변경할 비밀번호를 입력하세요"
          type="password"
        />
        <InputEdit
          title="비밀번호 확인"
          holder="변경할 비밀번호를 입력하세요"
          type="password"
        />
      </InputWrapper>

      <BtnWrapper />
    </Wrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper = styled.div`
  margin-left: 50px;
  margin-top: 20px;
`;
