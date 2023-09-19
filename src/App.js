import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Main from "./pages/Main";
import Navbar from "./component/Navigation/NavBar";
import DiaryList from "./pages/DiaryList";
import { DefaultLayout } from "./component/Layout/DefaultLayout";

function App() {
  const [diaryItems, setDiaryItems] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<DiaryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
