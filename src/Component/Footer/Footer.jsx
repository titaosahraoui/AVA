import React from "react";
import logo from "../../images/logo-no-background.png";

const gototop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <div className="footer bg-[#181818] w-[100%] h-[100%] relative">
      <div className="upersection w-[100%] flex justify-between items-center text-[#bebbbb] p-20  shadow-sm shadow-[#bebbbb]">
        <div className=" flex flex-col justify-center items-center gap-5 mt-5">
          <img
            className=""
            src="https://img.icons8.com/ios/100/bebbbb/semi-truck-side-view.png"
            alt=" truck"
          />
          <p className="">Free Shipping & returns</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 mt-5">
          <img src="https://img.icons8.com/wired/100/bebbbb/coins.png" alt="" />
          <p className="">100% money back guarantee</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 mt-5">
          <img
            src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/100/bebbbb/external-recycle-bag-ecology-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
            alt=""
          />
          <p>Remplacement in case of a defect</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 mt-5">
          <img
            className=""
            src="https://img.icons8.com/ios/100/bebbbb/security-checked--v1.png"
            alt=""
          />
          <p>Safe transaction</p>
        </div>
      </div>
      <div className="midsection  flex justify-center items-center w-[100%] gap-40 p-20">
        <img className=" w-[20%]" src={logo} alt="" />
        <div className="sec w-[100%] flex ">
          {/*-------------first section----------*/}
          <div className=" w-[100%] flex flex-col gap-5">
            <h1 className=" text-xl text-white">Help & infotmation</h1>
            <ul className="text-[#bebbbb]">
              <li>help</li>
              <li>track order</li>
              <li>Delevery & returns</li>
            </ul>
          </div>
          {/*-------------second section----------*/}
          <div className="w-[100%] flex flex-col gap-5">
            <h1 className=" text-xl text-white">About Avalanche</h1>
            <ul className="text-[#bebbbb]">
              <li>About us</li>
              <li>Careers of Avalanche</li>
              <li>Investor's site</li>
            </ul>
          </div>
          {/*-------------third section----------*/}
          <div className="w-[100%] flex flex-col gap-5">
            <h1 className=" text-xl text-white  ">More from Avalanche</h1>
            <ul className="text-[#bebbbb]">
              <li>mobile and Avalanche app</li>
              <li>Gift voucher</li>
              <li> Black Friday</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lowersection bg-black text-white flex  justify-evenly gap-[25%] py-1 text-sm">
        <h1>Copyright © 2022 Avalanche. All Right Reserved</h1>
        <button onClick={gototop}>
          <img
            className="  bg-[#fdde67] w-7 h-7 rounded-[100%] p-2 absolute left-[50%] bottom-4 animate-bounce "
            src="https://cdn-icons-png.flaticon.com/128/608/608336.png"
            alt=""
          />
        </button>
        <h1>Privacy & Cookies | Ts&Cs | Accessibility</h1>
      </div>
    </div>
  );
};

export default Footer;
