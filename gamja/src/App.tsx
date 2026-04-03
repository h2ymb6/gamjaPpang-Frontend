import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Detail from "./pages/detail";
import Mypage from "./pages/mypage";
import Main from "./pages/main";
import Signup from "./pages/signup";
import Write from "./pages/write";
import { Reset } from "styled-reset";
import { Loading } from "./pages/loading";

function App() {
  return (
    <>
      <Reset />

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/auth/:provider" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
