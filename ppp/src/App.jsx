import React from "react";
import Navber from "./components/navber/Navber";
import Hero from "./components/hero/Hero";
import Service from "./components/service/Service";
import Manu from "./components/manu/Manu";
import Qna from "./components/qna/Qna";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import CopyRight from "./components/copyRight/CopyRight";

const App = () => {
  return (
    <div className="bg-[#2B2D33]">
      <Navber />
      <Hero />
      <Service />
      <Manu />
      <Qna />
      <Pricing />
      <Contact />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default App;
