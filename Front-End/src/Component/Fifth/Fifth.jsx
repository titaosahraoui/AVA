import React from "react";

const Fifth = () => {
  return (
    <div className="main w-[100%] -mt-1 bg-[#E9E9E9] h-[100%]">
      <div className="upersection flex items-center justify-start text-[2.3rem] p-5 ml-[5%] mt-[5%]">
        <h1>Latest news</h1>
      </div>
      <div className="gridsection  grid grid-cols-3 gap-5 p-5 ">
        {/* ------------------------ first card-------------------------- */}
        <div className="card gap-5">
          <div className=" relative w-[100%]">
            <img
              className=" rounded-lg w-[100%]"
              src="https://media.gucci.com/style/HEXF1E9FB_Center_0_0_1200x1200/1674606629/722679_Z596D_4270_002_100_0000_Light-Mohair-wool-suit.jpg"
              alt=""
            />
            <button>
              <img
                className=" w-9 absolute top-5 right-5 bg-white p-2 rounded-3xl"
                src="https://cdn-icons-png.flaticon.com/512/271/271226.png"
                alt=""
              />
            </button>
            <p className=" absolute bottom-7 left-2 text-black bg-[#fdde67] px-4 rounded-2xl">
              22.12.23
            </p>
          </div>
          <h1 className=" text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            ut dolores sint sed sapiente magni, iure quis voluptas labore.
          </p>
        </div>
        {/* ------------------------ second card --------------------------*/}

        <div className="card gap-5">
          <div className=" relative w-[100%]">
            <img
              className=" rounded-lg w-[100%]"
              src="https://media.gucci.com/style/HEXD6D7D2_Center_0_0_1200x1200/1678128355/747402_ZANB9_9169_002_100_0000_Light-Retro-tweed-jacket-with-embroidery.jpg"
              alt=""
            />
            <button>
              <img
                className=" w-9 absolute top-5 right-5 bg-white p-2 rounded-3xl"
                src="https://cdn-icons-png.flaticon.com/512/271/271226.png"
                alt=""
              />
            </button>
            <p className=" absolute bottom-7 left-2 text-black bg-[#fdde67] px-4 rounded-2xl">
              22.12.23
            </p>
          </div>
          <h1 className=" text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            ut dolores sint sed sapiente magni, iure quis voluptas labore.
          </p>
        </div>

        {/* ----------------------- Third card ------------------------ */}

        <div className="card gap-5">
          <div className=" relative w-[100%]">
            <img
              className=" rounded-lg w-[100%]"
              src="https://media.gucci.com/style/HEXF1E9FB_Center_0_0_1200x1200/1671491752/685519_FAA6M_8460_003_100_0000_Light-GG-rhombus-print-backpack.jpg"
              alt=""
            />
            <button>
              <img
                className=" w-9 absolute top-5 right-5 bg-white p-2 rounded-3xl"
                src="https://cdn-icons-png.flaticon.com/512/271/271226.png"
                alt=""
              />
            </button>
            <p className=" absolute bottom-7 left-2 text-black bg-[#fdde67] px-4 rounded-2xl">
              22.12.23
            </p>
          </div>
          <h1 className=" text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            ut dolores sint sed sapiente magni, iure quis voluptas labore.
          </p>
        </div>
      </div>
      <div className="lowersection flex flex-col justify-center items-center mt-11 gap-5">
        <h1>Subscribe and get 20% OFF from you first purchase</h1>
        <div className=" relative  w-[40%] mb-11 ">
          <input
            className=" w-[100%] p-2 rounded-3xl"
            type="text"
            placeholder="              exemple@gmail.com"
          />
          <button className=" absolute top-1 right-2 px-4 py-1 bg-[#fdde67] rounded-3xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
