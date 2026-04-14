import styled from "styled-components";

const Comment = () => {
  return (
    <>
      <Wrap>
        <Name>이름</Name>
        <Content>내용</Content>
        <CreatedAt>생성일자</CreatedAt>
      </Wrap>
    </>
  );
};

export default Comment;

const Wrap = styled.div`
  border: 1px solid black;
  display: flex;
  width: 800px;
  margin: auto;
  padding: 20px;
  gap: 5px;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 20px;
`;

const Name = styled.div`
  font-size: 15px;
`;

const Content = styled.div`
  font-size: 20px;
`;

const CreatedAt = styled.div`
  font-size: 15px;
  color: gray;
`;
