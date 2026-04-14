import type { Type } from "./type";
import { api } from "../..";

export const patchPost = async ({ postId, ...rest }: Type) => {
  try {
    const response = await api.patch(`/api/v1/post/${postId}`, rest);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
