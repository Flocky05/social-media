import React from "react";
import img from "../../imges/LogOut/LogOut.webp";
import img1 from "../../imges/LogOut/background.jpg";
import { Link } from "react-router-dom";

const LogOut = () => {
  return (
    <section
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="relative">
        <center className="my-4">
          <img src={img} className="w-1/2 py-10" alt="" />
        </center>
        <Link
          to="/Login"
          className="text-white bg-green-700 rounded-md px-3 py-1 absolute bottom-5 right-10"
        >
          LogOut
        </Link>
      </div>
    </section>
  );
};

export default LogOut;
