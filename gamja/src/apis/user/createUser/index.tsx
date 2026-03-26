import { api } from "../..";
import type { UserCreate } from "./type";

export const CreateUser = async ({ username, email, password }: UserCreate) => {
  try {
    const response = await api.post(`/api/v1/auth/join`, {
      username,
      email,
      password,
    });
    return response;
  } catch (error: any) {
    const errorData = error.response?.data?.description;
    alert(errorData);

    throw error;
  }
};
