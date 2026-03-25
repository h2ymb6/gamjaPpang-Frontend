import api from "../..";
import type { LoginRequest } from "./type";

const LoginUser = async ({ email, password }: LoginRequest) => {
  try {
    const response = await api.post(`/api/v1/auth/login`, {
      email,
      password,
    });
    const accessToken = response.data?.accessToken || undefined;
    const refreshToken = response.data?.refreshToken || undefined;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default LoginUser;
