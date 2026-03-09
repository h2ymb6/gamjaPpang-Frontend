import styled from "styled-components";
import { CiHeart } from "react-icons/ci";

function Post() {
  return (
    <>
      <Wrap>
        <ProfileWrap>
          <Profile></Profile>
          <Name>개발자1</Name>
        </ProfileWrap>

        <DetailWrap>
          <Title>스프링 부트 개발자 온보딩 가이드</Title>
          <Detail>
            "한빛미디어 서평단 활동을 위해서 책을 협찬 받아 작성된 서평입니다."
            스프링 부트의 책이 최근에 출간되었습니다. 이 책은 스프링 부...
          </Detail>
        </DetailWrap>

        <Bottom>
          <Heart>
            <CiHeart /> 0
          </Heart>
          <Date>2026.01.02</Date>
        </Bottom>
      </Wrap>
    </>
  );
}

export default Post;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 43px;
`;

const Heart = styled.div`
  display: flex;
  align-items: center;
`;

const Date = styled.div``;

const Wrap = styled.div`
  width: 440px;
  height: 180px;
  border: 1px solid rgba(215, 215, 215);
  box-sizing: border-box;
  border-radius: 12px;
  padding: 20px;
`;

const DetailWrap = styled.div`
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin: 10px 0px;
`;

const Detail = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.div`
  width: 24px;
  height: 24px;
  background-color: gray;
  border-radius: 100%;
`;

const Name = styled.div`
  font-size: 14px;
  margin-left: 8px;
`;
