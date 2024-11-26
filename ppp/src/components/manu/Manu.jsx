import React from "react";

const Manu = () => {
  return (
    <div className="container mx-auto">
      <div className="md:flex justify-around items-center text-white mt-40">
        {/* Text Section */}
        <div className="text-lg sm:text-xl md:text-4xl mt-10 md:mt-0 md:mr-10">
          <h1 className="text-yellow-500 mb-10 animate-bounce">My Clients</h1>
          <h1 className="text-5xl">
            Take care of more{" "}
            <span className="underline decoration-orange-500 underline-offset-4">
              than 500k
            </span>{" "}
            <br />
            customers
          </h1>
        </div>

        {/* Form Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Registration Now
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Enter Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Enter Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Enter Your Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Registration{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Manu;
