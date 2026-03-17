import styled from "styled-components";
import { InputEdit } from "./inputEdit";
import { Button } from "./Button";

interface EditProps {
  close: () => void;
}

export const ProfileEdit = ({ close }: EditProps) => {
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

      <ButtonWrapper>
        <Button text="취소" edit={close} />
        <Button text="확인" />
      </ButtonWrapper>
    </Wrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper = styled.div`
  margin-left: 50px;
  margin-top: 20px;
`;
