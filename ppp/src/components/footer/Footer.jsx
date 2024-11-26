import React from "react";

const Footer = () => {
  const footerInfo = [
    {
      title: "My Account",
      links: ["Create Dashboard", "Wallet", "Create Item", "My Account"],
    },
    {
      title: "Web Links",
      links: ["Collection", "Item Details", "Ranking", "User Profile"],
    },
    {
      title: "Community",
      links: ["Blog Category", "Blog Author", "Blog", "Blog Details"],
    },
    {
      title: "Contact",
      links: [
        "Dhaka P.O. 1234 Read, Bangladesh",
        "BD Author",
        "support.smartcoders@gmail.com",
        "phone: 017777777",
      ],
    },
  ];
  return (
    <div className="container mx-auto mt-10">
      <div className="text-white p-5">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerInfo.map((item, index) => (
            <div key={index} className="space-y-4">
              <h1 className="text-2xl pb-2">{item.title}</h1>
              <ul className="space-y-2">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      ;
    </div>
  );
};

export default Footer;
