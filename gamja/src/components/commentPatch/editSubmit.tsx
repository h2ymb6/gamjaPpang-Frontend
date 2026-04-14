import styled from "styled-components";
import { patchPost } from "../../apis/patch/post";

interface Type {
  postId: number;
  title: string;
  content: string;
  tag: string[];
}

const EditSubmit = ({ postId, title, content, tag }: Type) => {
  const handleSubmit = async () => {
    try {
      await patchPost({ postId, title, content, tag });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Wrap>
        <Button onClick={handleSubmit}>제출하기</Button>
      </Wrap>
    </>
  );
};

export default EditSubmit;

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
