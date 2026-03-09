import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Detail from "./pages/detail";
import Mypage from "./pages/mypage";
import Main from "./pages/main";
import Signup from "./pages/signup";
import Write from "./pages/write";
import Header from "./components/common/header";
import { Reset } from "styled-reset";

function App() {
  return (
    <>
      
        <Reset />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/mypage" element={<Mypage />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/write" element={<Write />}></Route>
            <Route path="/head" element={<Header />}></Route>
          </Routes>
        </BrowserRouter>
    
    </>
  );
}

export default App;
