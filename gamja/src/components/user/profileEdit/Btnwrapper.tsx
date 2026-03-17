import styled from "styled-components";
import { Btn } from "./Btn";

export const BtnWrapper = () => {
  return (
    <>
      <Wrapper>
        <Btn text="취소"/>
        <Btn text="확인"/>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 20px;
`;
