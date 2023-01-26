import React from "react";
import img from "../../imges/profile/profile.jpeg";
import img2 from "../../imges/profile/bg.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
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
      <div className="my-4">
        <Link
          to="/Uploade"
          className="bg-green-700 hover:bg-green-900 px-2 py-1 rounded-lg text-white"
        >
          Uploaded picture
        </Link>
      </div>
    </div>
  );
};

export default Profile;
