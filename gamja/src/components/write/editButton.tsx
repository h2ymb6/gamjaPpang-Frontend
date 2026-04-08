import styled from "styled-components";

interface EditButtonProps {
  onChange: () => void;
}

const EditButton = ({ onChange }: EditButtonProps) => {
  return (
    <>
      <Wrap>
        <Button onChange={onChange}>수정하기</Button>
      </Wrap>
    </>
  );
};

export default EditButton;

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
