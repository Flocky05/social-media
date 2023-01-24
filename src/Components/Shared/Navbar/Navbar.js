import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../imges/profile/profile.jpeg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/Home" className="btn btn-ghost normal-case text-xl">
            social-Media
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <Link to="/Newsfeed" className="p-2 hover:text-xl text-white">
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
