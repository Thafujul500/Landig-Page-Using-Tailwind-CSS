import React from "react";
import photo from "../../assets/images/Research paper-pana.png";

const Hero = () => {
  return (
    <div className="container mx-auto pb-5">
      <div className="border border-indigo-600 py-24">
        <div className="text-white sm:flex justify-around items-center text-center mt-10 mb-10">
          <div className="">
            <h1 className="text-9xl sm:text-5xl mb-5 sm:mb-15">
              Smart Coders: Learn <br /> Programming
            </h1>
            <button className="bg-indigo-700 transition px-7 py-3 rounded-full text-3xl shadow-xl">
              Join with us{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 inline-block text-red-600 animate-ping ms-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div>
            <img
              className="w-80 animate-pulse hover:bg-indigo-950"
              src={photo}
              alt="sorry"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
