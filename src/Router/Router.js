import Header from "../Components/Header/Header";
import LogOut from "../Components/LogOut/LogOut";
import Main from "../Components/Main/Main";
import NewsFeed from "../Components/NewsFeed/NewsFeed";
import Profile from "../Components/Profile/Profile";
import Login from "../Components/Shared/Login/Login";

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
      {
        path: "/Profile",
        element: <Profile></Profile>,
      },
      {
        path: "/Logout",
        element: <LogOut></LogOut>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
    ],
  },
]);
