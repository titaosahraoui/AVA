import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-no-background.png";
import "./navbar.css";

const Navbar = () => {
  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };
    const myFunction = () => {
      const nav = document.querySelector(".navbar");
      const logoo = document.querySelector(".img");

      if (nav && logoo && window.pageYOffset) {
        logoo.classList.add("hide");
        nav.classList.add("lol");
      } else {
        logoo.classList.remove("hide");
        nav.classList.remove("lol");
      }
    };
  }, []);
  return (
    <div
      id="navbar"
      className="navbar fixed z-[10000000000] w-[100%]  text-white p-2 hover:bg-stone-900/90 transition-all duration-300  ease-in  "
    >
      <span className=" w-40"> United State . California . LA</span>
      <div className="flex items-center justify-center">
        <img
          className="img w-[15%] transition-all duration-500   ease-in  "
          src={logo}
          alt=" Avalanche"
        />
      </div>
      <div className="nav-log flex items-center justify-end gap-5 absolute top-4 right-3">
        <button
          className=" border-2 border-solid border-white p-[5px] rounded-full

        "
        >
          <img
            className=" w-5
          "
            src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png"
            alt=""
          />
        </button>
        <a href="/login">
          <button className="login">Login</button>{" "}
        </a>
        <button className="register">Register</button>
      </div>
      <div className="flex justify-center items-center w-[100%]">
        <div className="nav-links flex gap-10 mt-4  text-sm  ">
          <a className="link " href="/" data-replace="Home">
            <span>Home</span>
          </a>
          <a className="link" href="/women" data-replace="Women">
            <span>Women</span>
          </a>
          <a className="link" href="/man" data-replace="Man">
            <span>Man</span>
          </a>
          <Link className="link" data-replace="Handbag">
            <span>Handbag</span>
          </Link>
          <Link className="link" data-replace="Jewlery&Watches">
            <span>jewlery&watches</span>
          </Link>
          <Link className="link" data-replace="Children">
            <span>Children</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
