import React from "react";

const Qna = () => {
  return (
    <div className="container mx-auto mt-10  text-center bg-[#1F2937] pb-10 pt-10">
      <h3 className="text-white  text-5xl sm:3xl font-bold">Ask A Question</h3>
      <form className="mt-10">
        <input
          type="email"
          placeholder="Enter your email"
          className="pl-2 w-3/4 h-10 sm:w-1/2 rounded-md border-2 border-orange-800 placeholder:italic"
        />
        <textarea
          className="block mx-auto mt-10 p-3 w-5/6 border-2 rounded-md placeholder:italic border-orange-800 h-52"
          placeholder="Your Question..."
        ></textarea>
        <button
          className="bg-green-900 p-2 mt-8 font-bold rounded-md text-white transition hover:bg-green-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Qna;
