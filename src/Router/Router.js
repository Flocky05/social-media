import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import NewsFeed from "../Components/NewsFeed/NewsFeed";

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
      {
        path: "/NewsFeed",
        element: <NewsFeed></NewsFeed>,
      },
    ],
  },
]);
