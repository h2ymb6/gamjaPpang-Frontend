import styled from "styled-components";

interface TitleProps {
  title: string;
  holder: string;
  type?: string;
}

export const InputEdit = (props: TitleProps) => {
  return (
    <>
      <Wrapper>
        <Title>{props.title}</Title>
        <Input placeholder={props.holder} type={props.type}></Input>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 16px;
`;

const Input = styled.input`
  width: 270px;
  height: 40px;
  border-radius: 8px;
  font-size: 16px;
  padding-left: 10px;
  border: 1px solid gray;

  &:focus {
    outline: none;
  }
`;
