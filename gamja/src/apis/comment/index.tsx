import { api } from "..";
import type { Type } from "../comment/type";

export const comments = async (): Promise<Type[]> => {
  try {
    const response = await api.get(`/api/v1/me/posts`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
