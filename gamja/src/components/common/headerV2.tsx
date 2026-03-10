import styled from "styled-components";

function HeaderV2() {
  return (
    <>
      <Wrap>
        <Title>토이프젝</Title>
        <Profile></Profile>
      </Wrap>
    </>
  );
}

export default HeaderV2;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: rgba(253, 236, 226);
  margin-left: 50px;
`;

const Profile = styled.div`
  width: 35px;
  height: 35px;
  background-color: gray;
  border-radius: 100%;
  cursor: pointer;
  margin-right: 50px;
`;

const Wrap = styled.div`
  background-color: rgba(181, 149, 130);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
