import React from "react";
import img from "../../imges/LogOut/LogOut.webp";

const LogOut = () => {
  return (
    <div className="relative">
      <center className="my-4">
        <img src={img} className="w-3/4" alt="" />
      </center>
      <button className="text-white bg-green-700 rounded-md px-3 py-1 absolute bottom-5 right-10">
        LogOut
      </button>
    </div>
  );
};

export default LogOut;
