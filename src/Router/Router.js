import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/Home",
        element: <Header></Header>,
      },
    ],
  },
]);
