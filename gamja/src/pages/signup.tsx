import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import cat from "../assets/Login/cat.svg";
import kakao from "../assets/Login/kakao.svg";
import naver from "../assets/Login/naver.svg";
import google from "../assets/Login/google.svg";
import { useState } from "react";
import CreateUser from "../apis/user/createUser";

function Signup() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <ImgWrap>
          <img src={cat} alt="" />
        </ImgWrap>
        <RightWrap>
          <TitleCon>
            <Title>Welcome!</Title>
            <Subtitle>토이프젝</Subtitle>
          </TitleCon>
          <InputCon>
            <Input
              placeholder="닉네임 입력"
              onChange={(e) => setName(e.target.value)}
            ></Input>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Input
                placeholder="이메일 입력"
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <Check>이메일 인증</Check>
            </div>

            <Check>중복확인</Check>
            <Input
              placeholder="비밀번호 입력"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </InputCon>
          <SignupButton
            onClick={async () => {
              await CreateUser({ name, email, password });
            }}
          >
            회원가입
          </SignupButton>
          <SignupCon>
            <div
              style={{
                color: "gray",
                fontSize: "17px",
              }}
            >
              만약 계정이 있다면?
            </div>
            <LoginButton>로그인</LoginButton>
          </SignupCon>
          <div
            style={{
              marginBottom: "10px",
            }}
          >
            또는
          </div>
          <OtherLoginCon>
            <Icon>
              <img src={kakao} alt="" />
            </Icon>
            <Icon>
              <img src={naver} alt="" />
            </Icon>
            <Icon>
              <img src={google} alt="" />
            </Icon>
          </OtherLoginCon>
        </RightWrap>
      </Wrapper>
    </>
  );
}

export default Signup;

const Check = styled.div`
  font-size: 14px;
  color: white;
  background-color: rgba(141, 119, 119);
  width: 70px;
  border-radius: 5px;
  display: flex;
  margin-left: 30px;
  font-weight: 300;
  cursor: pointer;
  justify-content: center;
  height: 25px;
  margin: 2px;
  align-items: center;
`;
const OtherLoginCon = styled.div`
  display: flex;
`;
const Icon = styled.div`
  margin: 0px 5px;
`;
const RightWrap = styled.div`
  width: 536px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  background-color: rgba(253, 236, 226);
  width: 1073px;
  height: 652px;
  display: flex;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ImgWrap = styled.div`
  width: 537px;
  height: 653px;
`;
const Title = styled.h1`
  color: rgb(181, 149, 130);
  border-bottom: 2px solid rgb(181, 149, 130);
  width: 119px;
  font-size: 40px;
  margin-right: 250px;
`;

const Subtitle = styled.h2`
  color: rgb(181, 149, 130);
  font-size: 20px;
  margin-top: -20px;
`;

const TitleCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const Input = styled.input`
  width: 370px;
  height: 52px;
  border-radius: 15px;
  font-size: 15px;
  border: 1px solid rgb(213, 189, 175);
  margin: 10px;
  padding: 0px 10px;

  &:focus {
    outline: none;
  }
`;

const InputCon = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const SignupButton = styled.button`
  border: 1px solid rgb(213, 189, 175);
  width: 268px;
  height: 49px;
  font-size: 20px;
  background-color: rgb(222, 184, 162);
  border-radius: 15px;
  cursor: pointer;
`;

const LoginButton = styled.p`
  margin-left: "10px";
  cursor: "pointer";
`;

const SignupCon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
