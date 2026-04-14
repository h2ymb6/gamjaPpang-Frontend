import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Type {
  postId: number;
}

export const GoToEditButton = ({ postId }: Type) => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Button onClick={() => navigate(`/edit/${postId}`)}>수정하기</Button>
    </Wrap>
  );
};

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
