import api from "..";

const CreateUser = async (userData: any) => {
  const { username, email, password } = userData;
  try {
    const response = await api.post(`/api/v1/auth/join`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default CreateUser;
