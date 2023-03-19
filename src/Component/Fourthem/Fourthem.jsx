import React from "react";
import "./fourthem.css";

const Fourthem = () => {
  return (
    <div className="main ">
      <div className="backgroundImg">
        <span></span>
      </div>
      <div className="section">
        <div className="leftsection flex flex-col justify-between items-center">
          <h1 className=" text-black text-[1.7rem] mt-7">-70% OFF</h1>
          <div className="prixandicone flex gap-5 justify-center items-center ml-[20%] mb-[7%] text-lg ">
            <div className=" flex gap-2 border-solid border-[1px] border-black px-2">
              <p className=" line-through">140$</p>
              <p>50$</p>
            </div>
            <img
              className="w-[13%] p-2 bg-white rounded-lg"
              src="https://cdn-icons-png.flaticon.com/512/126/126515.png"
              alt="icone"
            />
          </div>
        </div>
        <div className="rightsection">
          <h1 className=" flex justify-center items-center text-[2.3rem] text-white mt-10">
            Sales for the years
          </h1>
          <div className="numbers flex justify-evenly items-center text-[2rem] text-white ml-10 mt-10">
            <div className="flex flex-col items-center">
              <span className=" bg-greensom p-10 rounded-[20px]">03</span>
              <span className="text-3">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className=" bg-greensom p-10 rounded-[20px]">23</span>
              <span className="text-3">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className=" bg-greensom p-10 rounded-[20px]">15</span>
              <span className="text-3">Minuts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className=" bg-greensom p-10 rounded-[20px]">33</span>
              <span className="text-3">Second</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthem;
