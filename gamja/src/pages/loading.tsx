import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../apis/index";

export const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("code");
    const provider = query.get("state") || localStorage.getItem("state");

    console.log("추출된 코드:", code);
    console.log("추출된 소셜(params):", provider);

    if (code && provider) {
      const provider = query.get("state");
      const loginTask = async () => {
        if (!provider || !code) return;
        try {
          const response: any = await api.post(`/api/v1/auth/social`, {
            provider: provider,
            authorizationCode: code,
            redirectUri: import.meta.env.VITE_REDIRECT_URI,
          });

          const { accessToken, refreshToken } = response;

          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);

          navigate("/main");
        } catch (error) {
          console.log(error);
          throw error;
        }
      };
      loginTask();
    }
  }, [navigate]);
  return <>Loading....</>;
};
