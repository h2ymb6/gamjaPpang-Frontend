import styled from "styled-components";

export const Logout = () => {
  return (
    <>
      <Wrapper>로그아웃</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 80px;
  height: 30px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  color: white;
  cursor: pointer;

  &:hover {
    color: #c2c2c2;
    background-color: #b90000;
  }
`;
