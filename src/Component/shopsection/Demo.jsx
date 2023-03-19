import React from "react";
import { articals } from "../../data";
import "./demo.css";

const displayedArticles = articals.slice(0, 4);

const Demo = () => {
  return (
    <div className="demo">
      <div className="header">
        <h1>Best sellers</h1>
      </div>
      <div className="container">
        {displayedArticles.map((i, key) => (
          <div className="card" key={i.id}>
            <div className="imgBx">
              <img className="imgBx" src={i.img} alt="" />
            </div>
            <div className="contentBx">
              <div className="contentBx2">
                <h1 color="#fff">{i.name}</h1>
                <a href="#">Buy Now</a>
              </div>
              <img
                className="imgicone"
                src="https://cdn-icons-png.flaticon.com/512/8974/8974438.png"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className="loadmore">
        <button className="btnload">Load more Product</button>
      </div>
    </div>
  );
};

export default Demo;
