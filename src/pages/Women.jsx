import React from "react";
import Categoriswomen from "../Component/Categoris/Categoriswomen";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/navbar/Navbar";

const Women = () => {
  return (
    <div>
      <Navbar />
      <div className="bgimg w-[100%] h-[100%] relative ">
        <div className=" absolute text-white top-[43%] left-[39%] flex flex-col items-center">
          <p className="text-lg font-extralight">
            Avalanche Spring Summer 2023
          </p>
          <h1 className="text-[5rem] font-extralight">Women</h1>
        </div>
        <img
          src="//media.gucci.com/content/HeroRegularStandard_3200x1350/1676039503/HeroRegularStandard_Gucci-Spring-Summer-23-001_001_Default.jpg"
          alt=""
        />
      </div>
      <Categoriswomen />
      <Footer />
    </div>
  );
};

export default Women;
