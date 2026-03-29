import styled from "styled-components";

export const WelcomeTitle = () => {
  return (
    <Wrapper>
      <Title>Welcome!</Title>
      <Subtitle>토이프젝</Subtitle>
    </Wrapper>
  );
};

const Title = styled.h1`
  color: rgb(181, 149, 130);
  border-bottom: 2px solid rgb(181, 149, 130);
  width: 119px;
  font-size: 40px;
  border: none;
  font-weight: 800;
  margin-right: 250px;
`;

const Subtitle = styled.h2`
  color: rgb(181, 149, 130);
  font-size: 20px;
  margin-top: -20px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  height: 60px;
  justify-content: space-between;
`;
