import styled from "styled-components";
import { GoSearch } from "react-icons/go";

function Header() {
  return (
    <>
      <Wrap>
        <div style={{ display: "flex", marginLeft: "50px" }}>
          <Title>토이프젝</Title>
          <SerchWrap>
            <Input placeholder="검색어를 입력하세요"></Input>
            <SerchBarWrap>
              <GoSearch />
            </SerchBarWrap>
          </SerchWrap>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", marginRight: "50px" }}
        >
          <WriteBtn>+ 글 작성하기</WriteBtn>
          <Profile></Profile>
        </div>
      </Wrap>
    </>
  );
}

export default Header;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: rgba(253, 236, 226);
  margin-right: 60px;
  display: flex;
  align-items: center;
`;

const Profile = styled.div`
  width: 35px;
  height: 35px;
  background-color: gray;
  border-radius: 100%;
  margin-left: 10px;
  cursor: pointer;
`;

const WriteBtn = styled.button`
  color: black;
  background-color: rgba(222, 184, 162);
  width: 128px;
  height: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border: none;
  box-shadow: none;
  border-radius: 15px;
`;
const Input = styled.input`
  width: 240px;
  height: 30px;
  border-radius: 6px;
  padding: 0px 5px;
  font-size: 14px;

  &:focus {
    outline: none !important;
  }
`;

const SerchBarWrap = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
`;

const Wrap = styled.div`
  background-color: rgba(181, 149, 130);
  display: flex;
  justify-content: space-between;
  height: 60px;
`;

const SerchWrap = styled.div`
  display: flex;
  align-items: center;
`;
