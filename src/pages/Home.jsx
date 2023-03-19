import React from "react";
import Card from "../Component/card/Card";
import Fifth from "../Component/Fifth/Fifth";
import Fourthemce from "../Component/Fourthem/Fourthem";
import Logomark from "../Component/Logomark/Logomark";
import Navbar from "../Component/navbar/Navbar";
import Second from "../Component/Second/Second";
import Demo from "../Component/shopsection/Demo";
import Footer from "../Component/Footer/Footer";
import Discover from "../Component/Discover/Discover";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Card />
      <Logomark />
      <Discover />
      <Second />
      <Demo />
      <Fourthemce />
      <Fifth />
      <Footer />
    </div>
  );
};

export default Home;
