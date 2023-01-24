import React from "react";
import img from "../../imges/profile/profile2.png";
import img2 from "../../imges/profile/bg.jpg";

const Profile = () => {
  return (
    <section
      className="mt-16"
      style={{
        background: `url(${img2})`,
      }}
    >
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row pb-0">
          <img
            src={img}
            alt=""
            className=" hidden lg:w-1/2 md:block w-1/2 rounded-lg -mt-36  "
          />
          <div>
            <h2 className="text-primary text-xl font-semibold ">Appointment</h2>
            <h1 className="text-4xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
