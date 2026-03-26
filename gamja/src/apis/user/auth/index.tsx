import { api } from "../..";
import type { Auth } from "./type";

export const sendEmail = async ({ email }: Auth) => {
  try {
    const response = await api.post(`/api/v1/auth/code/send`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const verifyEmail = async ({ email, signupCode }: Auth) => {
  try {
    const response = await api.post(`/api/v1/auth/code/verify`, {
      email,
      signupCode,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
