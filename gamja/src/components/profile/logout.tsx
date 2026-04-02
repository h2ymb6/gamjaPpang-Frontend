import styled from "styled-components";
import { Logout } from "../../apis/user/logout.tsx";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem("refreshToken") || "";
    await Logout({ refreshToken: token });
    navigate("/login");
  };

  return <Wrapper onClick={handleLogout}>로그아웃</Wrapper>;
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
  font-size: 15px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    color: #c2c2c2;
    background-color: #b90000;
  }
`;
