import styled from "styled-components";

function ImgSlide() {
  return (
    <>
      <Wrap>
        <Img></Img>
        <Dots>
          <Dot></Dot>
          <Dot></Dot>
          <Dot></Dot>
        </Dots>
      </Wrap>
    </>
  );
}

export default ImgSlide;

const Wrap = styled.div`
  width: 100wv;
  background-color: rgba(217, 217, 217);
  height: 260px;
  margin-top: 30px;
`;

const Img = styled.div``;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  gap: 8px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 100%;
  margin-bottom: 10px;
`;
