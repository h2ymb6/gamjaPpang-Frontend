import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CreateUser } from "../apis/user/createUser";
import { sendEmail } from "../apis/user/auth/index";
import { IconWrap } from "../components/auth/iconWrap";
import { WelcomeTitle } from "../components/auth/welcomeTitle";
import { Img } from "../components/auth/leftImg";
import { InputCode } from "../components/auth/inputCode";

function Signup() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [certification, setCertification] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <Img />
        <RightWrap>
          <WelcomeTitle />
          <InputCon>
            <Input
              placeholder="닉네임 입력"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />

            <EmailWrapper>
              <Input
                placeholder="이메일 입력"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Check
                onClick={async () => {
                  await sendEmail({ email });
                  setCertification(true);
                }}
              >
                인증 요청
              </Check>
            </EmailWrapper>

            {certification && <InputCode email={email} />}

            <Input
              placeholder="비밀번호 입력"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputCon>

          <SignupButton
            onClick={async () => {
              if (!certification) {
                alert("이메일 인증을 해주세요");
                return;
              }
              try {
                await CreateUser({ username, email, password });
                alert("회원가입 성공!");
                navigate("/login");
              } catch (error) {
                alert(`회원가입 실패 ${error}`);
              }
            }}
          >
            회원가입
          </SignupButton>

          <LoginCon>
            만약 계정이 있다면?
            <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
          </LoginCon>

          <Other>또는</Other>

          <IconWrap />
        </RightWrap>
      </Wrapper>
    </>
  );
}

export default Signup;

const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Other = styled.div`
  margin: 20px;
`;

const LoginCon = styled.div`
  display: flex;
  margin-top: 20px;
  color: gray;
  width: 190px;
  justify-content: space-around;
  font-size: 17px;
`;

const Check = styled.div`
  font-size: 14px;
  color: white;
  background-color: rgba(141, 119, 119);
  width: 67px;
  border-radius: 5px;
  display: flex;
  font-weight: 300;
  cursor: pointer;
  justify-content: center;
  height: 25px;
  margin: 2px;
  align-items: center;
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
  cursor: pointer;
`;
