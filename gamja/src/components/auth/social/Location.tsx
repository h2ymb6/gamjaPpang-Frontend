export const naverHandleLogin = () => {
  const stateValue = "naver";
  localStorage.setItem("state", stateValue);
  const rootUrl = `https://nid.naver.com/oauth2.0/authorize`;
  const options = {
    client_id: import.meta.env.VITE_NAVER_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
    response_type: "code",
    scope: "email profile",
    state: "naver",
  };

  const params = `client_id=${options.client_id}&redirect_uri=${options.redirect_uri}&response_type=code&scope=profile_nickname&state=${stateValue}`;
  window.location.href = `${rootUrl}?${params}`;
};

export const googleHandleLogin = () => {
  const stateValue = "google";
  localStorage.setItem("state", stateValue);
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
    response_type: "code",
    scope: "email profile",
    state: "google",
  };

  const params = `client_id=${options.client_id}&redirect_uri=${options.redirect_uri}&response_type=code&scope=profile_nickname&state=${stateValue}`;
  window.location.href = `${rootUrl}?${params}`;
};

export const kakaoHandleLogin = () => {
  const stateValue = "kakao";
  localStorage.setItem("state", stateValue);

  const rootUrl = "https://kauth.kakao.com/oauth/authorize";
  const options = {
    client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
    response_type: "code",
    scope: "profile_nickname",
    state: "kakao",
  };

  const params = `client_id=${options.client_id}&redirect_uri=${options.redirect_uri}&response_type=code&scope=profile_nickname&state=${stateValue}`;
  window.location.href = `${rootUrl}?${params}`;
};
