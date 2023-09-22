import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/layout/layout";
import MainPage from "../page/mainPage";
import SearchPage from "../page/searchPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
