import api from "../..";
import type { UserCreate } from "./type";

const CreateUser = async ({ username, email, password }: UserCreate) => {
  try {
    const response = await api.post(`/api/v1/auth/join`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    const errorData = error.response?.data?.code;

    if (errorData == "USR_409") alert("이미 가입된 메일입니다.");
    if (errorData == "GLB_500") alert("서버 오류가 발생했습니다.");
    if (errorData == "GLB_400") alert("잘못된 요청입니다.");
    throw error;
  }
};

export default CreateUser;
