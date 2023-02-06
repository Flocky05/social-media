import React from "react";
import video from "../../imges/video/Welcome.mp4";

const LogOut = () => {
  return (
    <div>
      <center>
        <video autoPlay muted loop className="w-full object-cover">
          <source src={video} />
        </video>
      </center>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://img.freepik.com/free-vector/horror-cat-halloween-background_1142-1169.jpg?w=740&t=st=1675708393~exp=1675708993~hmac=badbe7fb32bbb61f6a2c5362dca9853bc20a0f55d491542ba164d5a13d79758b"
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
