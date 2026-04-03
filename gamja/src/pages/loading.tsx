import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../apis/index";

export const Loading = () => {
  const navigate = useNavigate();
  const { provider } = useParams<{ provider: string }>();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("code");

    if (code && provider) {
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
  }, [provider, navigate]);
  return <>Loading....</>;
};
