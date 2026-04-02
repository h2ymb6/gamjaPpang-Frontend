import { api } from "../../..";
import type { LoginRequest } from "./type";

export const LoginUser = async ({ email, password }: LoginRequest) => {
  try {
    const response: any = await api.post(`/api/v1/auth/login`, {
      email,
      password,
    });

    const { accessToken, refreshToken } = response;
    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    } else {
      alert("토큰이 없습니다.");
    }

    return response;
  } catch (error: any) {
    const errorData = error.response?.data?.description;
    alert(errorData);

    throw error;
  }
};
