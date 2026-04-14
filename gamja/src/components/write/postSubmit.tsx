import styled from "styled-components";
import WriteSubmit from "../../apis/write/index";

interface Type {
  title: string;
}

const postSubmit = ({ title }: Type) => {
  const handleSubmit = async () => {
    WriteSubmit({ title, content: "", tag: [] });
  };

  return (
    <>
      <Wrap>
        <Button onClick={handleSubmit}>제출하기</Button>
      </Wrap>
    </>
  );
};

export default postSubmit;

const Button = styled.div`
  background-color: rgba(270, 216, 206);
  width: 70px;
  height: 40px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;

  &:hover {
    background-color: pink;
  }

  &:active {
    background-color: rgba(270, 216, 206);
  }

  border: 1px solid black;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 100px;
`;
