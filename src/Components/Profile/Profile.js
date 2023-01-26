import React from "react";
import img from "../../imges/profile/profile.jpeg";
import img2 from "../../imges/profile/bg.jpg";

const Profile = () => {
  return (
    <section
      className="bg-no-repeat bg-cover relative bg-center "
      style={{
        backgroundImage: `url(${img2})`,
        height: `720px`,
      }}
    >
      <div className="absolute bottom-5 left-5">
        <img
          src={img}
          alt=""
          className="w-80 h-80 rounded-full border-4 border-slate-300-500 "
        />
      </div>
    </section>
  );
};

export default Profile;
