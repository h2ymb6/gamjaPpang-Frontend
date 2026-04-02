import { api } from "../..";
import type { type } from "./type";

export const Logout = async ({ refreshToken }: type) => {
  try {
    const response: any = await api.post(`/api/v1/auth/logout`, {
      refreshToken,
    });

    return response;
  } catch (error: any) {
    const errorData = error.response?.data?.description || "로그아웃 실패";
    alert(errorData);
    throw error;
  } finally {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
};
