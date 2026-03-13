import styled from "styled-components";

function ChatHistory() {
  return (
    <>
      <Chat>좋은 글 감사합니다람쥐</Chat>
      <Bottom>
        <Date>2025.04.16</Date>
        <Title>'대충 개쩌는 글'에 쓴 댓글</Title>
      </Bottom>
    </>
  );
}

const Chat = styled.div`
  font-size: 16px;
  border-top: 1px solid black;
  width: 542px;
  padding-top: 6px;
`;
const Date = styled.div``;
const Title = styled.div``;
const Bottom = styled.div`
  display: flex;
  gap: 5px;
  font-size: 14px;
  color: gray;
  margin-top: 5px;
  margin-bottom: 6px;
`;

export default ChatHistory;
