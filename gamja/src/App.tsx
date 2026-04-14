import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Detail from "./pages/detail";
import Mypage from "./pages/mypage";
import MainLikePost from "./pages/mainLikePost";
import MainMyPost from "./pages/mainMyPost";
import Signup from "./pages/signup";
import Write from "./pages/write";
import { Reset } from "styled-reset";
import { Loading } from "./pages/loading";
import { Edit } from "./pages/edit";

function App() {
  return (
    <>
      <Reset />

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/mypost" element={<MainMyPost />}></Route>
          <Route path="/mylike" element={<MainLikePost />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/login/callback" element={<Loading />} />
          <Route path="/edit/:postId" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
