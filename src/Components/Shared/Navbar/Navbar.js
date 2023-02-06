import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../imges/profile/profile.jpeg";
import img2 from "../../../imges/icon/social-media (1).png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-gray-200">
        <div className="flex-1">
          <Link
            to="/Home"
            className="btn btn-ghost normal-case text-xl text-white"
          >
            <img src={img2} className="w-7 h-7 m-3" alt="" /> social-Media
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end flex items-center">
            <Link
              to="/Profile"
              className="p-2 hover:scale-125 block duration-500 transition-front ease-out text-black "
            >
              Profile
            </Link>
            <Link
              to="/Newsfeed"
              className="p-2 hover:scale-125 block duration-500 transition-front ease-out text-black "
            >
              News feed
            </Link>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            ></div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={img1} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/Profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="Settings">Settings</Link>
              </li>
              <li>
                <Link to="/Logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
