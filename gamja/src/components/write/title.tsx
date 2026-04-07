import styled from "styled-components";
import { useState } from "react";

const Title = () => {
  const [title, setTitle] = useState("");
  const onChange = (e: any) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <Wrap placeholder="제목을 작성하세요" onChange={onChange}></Wrap>
    </>
  );
};

export default Title;

const Wrap = styled.input`
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
