import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { articals } from "../../data";

const Shop = ({ match }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const p = articals.find((a) => {
      return a.id == match.params.id;
    });
    JSON.stringify(data);
    setData(p);
  }, []);
  return (
    <div>
      <img src={data.images} alt="" />
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default Shop;
