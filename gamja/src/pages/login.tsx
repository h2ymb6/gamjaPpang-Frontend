import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginUser } from "../apis/user/loginUser/local";
import { IconWrap } from "../components/auth/iconWrap";
import { Input } from "../components/auth/input";
import { WelcomeTitle } from "../components/auth/welcomeTitle";
import { Img } from "../components/auth/leftImg";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Wrapper>
        <Img />
        <RightWrap>
          <WelcomeTitle />
          <InputCon>
            <Input
              placeholder="이메일 입력"
              type="password"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="비밀번호 입력"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputCon>

          <LoginBtn
            onClick={async () => {
              await LoginUser({ email, password });
            }}
          >
            로그인
          </LoginBtn>
          <SignupCon>
            <Noaccount>만약 계정이 없다면?</Noaccount>
            <Signup
              style={{
                marginLeft: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원가입
            </Signup>
          </SignupCon>
          <Or>또는</Or>
          <IconWrap />
        </RightWrap>
      </Wrapper>
    </>
  );
}

export default Login;

const Noaccount = styled.div`
  color: gray;
  font-size: 17px;
`;

const Or = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
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

const InputCon = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
`;

const LoginBtn = styled.button`
  border: 1px solid rgb(213, 189, 175);
  width: 268px;
  height: 49px;
  font-size: 20px;
  background-color: rgb(222, 184, 162);
  border-radius: 15px;
  cursor: pointer;
`;

const Signup = styled.p``;

const SignupCon = styled.div`
  display: flex;
  align-items: center;
`;
