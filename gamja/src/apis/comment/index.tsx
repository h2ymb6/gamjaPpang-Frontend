import { api } from "..";
import type { Type } from "../comment/type";

const commentWrite = async ({ postId, content }: Type) => {
  try {
    const response = await api.post(`/api/v1/comment`, {
      postId,
      content,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
