import React from "react";
import video from "../../imges/video/Welcome.mp4";

const LogOut = () => {
  return (
    <div>
      <video autoPlay muted loop className="w-full">
        <source src={video} />
      </video>
    </div>
  );
};

export default LogOut;
