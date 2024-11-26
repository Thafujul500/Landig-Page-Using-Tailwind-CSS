import React from "react";

const CopyRight = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#1F2937] flex justify-center">
      <p className="text-white p-2">
        &copy; Copyright - {year} - Designed by smartCoders.com
      </p>
    </div>
  );
};

export default CopyRight;
