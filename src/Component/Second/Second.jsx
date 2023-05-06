import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./second.css";
import { articals } from "../../data";
import { Link } from "react-router-dom";

const Second = () => {
  return (
    <div className="second w-[100%] h-[100%]">
      <div className="swiperone">
        <Swiper
          className="w-[100%] h-[60vh] "
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {articals.map((product) => (
            <SwiperSlide
              className=" w-[100%] h-[100%] flex gap-10"
              key={product.id}
            >
              <div className="card w-[280px] cursor-pointer">
                <div className="imgBx">
                  <img className="imgBx" src={product.img} alt="" />
                </div>
                <div className="contentBx">
                  <div className="contentBx2">
                    <h1 color="#fff">{product.name}</h1>
                    <Link to={`/products/${product.id}`}>Buy Now</Link>
                  </div>
                  <img
                    className="imgicone"
                    src="https://cdn-icons-png.flaticon.com/512/8974/8974438.png"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>
      <div className="swipertwo">
        <Swiper
          className="w-[100%] h-[60vh] "
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {articals.map((i, key) => (
            <SwiperSlide className=" w-[100%] h-[100%] flex gap-10" key={i.id}>
              <div className="card w-[280px]" key={i.id}>
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
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default Second;
