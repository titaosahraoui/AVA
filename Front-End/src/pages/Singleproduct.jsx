import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Component/navbar/Navbar";
import { articals } from "../data";

const Singleproduct = () => {
  const productId = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const p = articals.find((a) => {
      return a.id === productId;
    });
    JSON.stringify(product);
    setProduct(p);
  }, []);
  // const product = articals.find((product) => product.id === productId);
  // const [img, name] = product;
  return (
    <div className="product">
      <Navbar />
      <div className="RightSecrion">
        <div className="CardProducts">
          <img src={p.img} alt="" />
          <h1>{p.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
