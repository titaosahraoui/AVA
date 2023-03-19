import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="cards">
      <div className="section-one">
        <h1 className="title text-[#fdde67]">NEW COLLECTION 2023</h1>
        <div className="details">
          <p className="detail w-[100%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <button className="btninp">NEW COLLECTION</button>
        </div>
      </div>
      <div className="section-two"></div>
      <div className="section-three"></div>
    </div>
  );
};

export default Card;
