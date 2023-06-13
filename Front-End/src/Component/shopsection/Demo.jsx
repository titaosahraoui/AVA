import React, { useEffect } from "react";
import { articals } from "../../data";
import "./demo.css";
import { getProducts } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader";

const Demo = () => {
  const dispatch = useDispatch();
  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="demo">
      <div className="header ">
        <h1>Best sellers</h1>
      </div>
      <div className="container">
        {products &&
          products.slice(0, 4).map((product) => (
            <div className="card" key={product._id}>
              <div className="imgBx">
                <img className="imgBx" src={product.images[0].url} alt="" />
              </div>
              <div className="contentBx">
                <div className="contentBx2">
                  <h1 color="#fff">{product.name}</h1>
                  <h1 color="#fff">{product.price}$</h1>
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
