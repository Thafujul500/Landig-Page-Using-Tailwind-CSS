import React from "react";

const Contact = () => {
  return (
    <div className="container m-auto bg-lime-950 mt-20 ">
      <div className="sm:flex justify-center items-center text-white gap-10 sm:gap-16 md:gap-20 p-20">
        <div className="sm:border-r sm:pr-28">
          <h2 className="text-3xl">Newsletter Subscription</h2>
          <p>Get subscribed to our newsletter & receive latest updates</p>
        </div>
        <div className="flex gap-1 justify-center items-center">
          {" "}
          <input
            className="h-10 border-none px-3 rounded-md "
            type="email"
            placeholder="Enter your email"
          />
          <button className="bg-red-950 px-5 py-2 rounded-md hover:bg-red-600 transition ml-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
