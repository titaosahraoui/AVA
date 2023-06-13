import React from "react";
import Categorismen from "../Component/Categoris/Categorismen";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/navbar/Navbar";

const Men = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img
          src="https://media.gucci.com/content/HeroRegularStandard_3200x1350/1676590363/HeroRegularStandard_gucci-run-2023-feb-01_001_Default.jpg"
          alt=""
        />
      </div>
      <Categorismen />
      <Footer />
    </div>
  );
};

export default Men;
