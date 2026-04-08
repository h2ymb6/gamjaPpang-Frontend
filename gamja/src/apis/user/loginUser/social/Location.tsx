export const naverHandleLogin = () => {
  const rootUrl = `https://nid.naver.com/oauth2.0/authorize`;
  const options = {
    client_id: import.meta.env.VITE_NAVER_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
    response_type: "code",
    scope: "email profile",
    state: "naver",
  };

  const queryString = new URLSearchParams(options).toString();

  window.location.href = `${rootUrl}?${queryString}`;
};

export const googleHandleLogin = () => {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
    response_type: "code",
    scope: "openid email profile",
    state: "google",
  };

  const queryString = new URLSearchParams(options).toString();

  window.location.href = `${rootUrl}?${queryString}`;
};

export const kakaoHandleLogin = () => {
  const rootUrl = "https://kauth.kakao.com/oauth/authorize";
  const options = {
    client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
    response_type: "code",
    scope: "profile_nickname",
    state: "kakao",
  };
  const queryString = new URLSearchParams(options).toString();

  window.location.href = `${rootUrl}?${queryString}`;
};
