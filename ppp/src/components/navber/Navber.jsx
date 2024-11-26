import React from "react";

const Navber = () => {
  const menuItems = [
    { name: "Home", link: "#" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#" },
    { name: "Pricing", link: "#" },
    { name: "Contact", link: "#" },
  ];
  return (
    <div className="sticky top-0 z-10">
      <nav className="bg-[#2B2D33] shadow-3xl ">
        <div className="container mx-auto">
          <div className="sm:flex justify-between items-center text-center py-5">
            <div className="text-center mb-3">
              <a className="text-white text-3xl sm:text-3xl font-bold" href="#">
                <span className="text-[#F65023]">S</span>mart Cod
                <span className="text-[#F65023]">ers</span>
              </a>
            </div>
            <ul className="sm:flex text-xs text-white text-center border-t sm:border-none">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="pr-16 text-xl hover:text-[#F65023] font-bold"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
