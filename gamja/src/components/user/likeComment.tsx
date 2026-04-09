import type { Type } from "../../apis/get/main/likePost/type";
import styled from "styled-components";
import { CiHeart } from "react-icons/ci";

export const LikeComment = ({ data }: { data: Type }) => {
  return (
    <>
      <Wrap>
        <ProfileWrap>
          <Profile></Profile>
          <Name>{data.author.name}</Name>
        </ProfileWrap>

        <DetailWrap>
          <Title>{data.title}</Title>
        </DetailWrap>

        <Bottom>
          <Heart>
            <CiHeart /> {data.likeCount}
          </Heart>
          <Date>{data.createdAt}</Date>
        </Bottom>
      </Wrap>
    </>
  );
};

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
