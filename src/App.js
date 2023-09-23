import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Navbar from "./component/Navigation/NavBar";
import DiaryList from "./pages/DiaryList";
import { DefaultLayout } from "./component/Layout/DefaultLayout";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/diary" element={<DiaryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
