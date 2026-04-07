import type { type } from "./type";
import { api } from "../index";

const WriteSubmit = async ({ title, content, tag }: type) => {
  try {
    const response = await api.post(`/api/v1/post`, {
      title,
      content,
      tag,
    });

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default WriteSubmit;
