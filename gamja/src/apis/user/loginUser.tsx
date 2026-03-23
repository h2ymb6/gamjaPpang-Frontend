import api from "..";

const LoginUser = async (userData: any) => {
  const { email, password } = userData;
  try {
    const response = await api.post(`/api/v1/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default LoginUser;
