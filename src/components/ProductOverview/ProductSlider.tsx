"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";
import { DownArrow } from "@/Icons";

export default function ProductSlider() {
  return (
    <div>
      <div className="w-[64px]  h-[400px] rounded-lg bg-white">
        <Swiper
          direction={"vertical"}
          slidesPerView={4.5}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper h-full"
        >
          <SwiperSlide className="rounded-lg bg-gray-300 p-2 cursor-pointer">
            <img src="/assets/product.png" alt="product" className="w-full" />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg bg-gray-300 p-2 cursor-pointer">
            <img src="/assets/product.png" alt="product" className="w-full" />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg bg-gray-300 p-2 cursor-pointer">
            <img src="/assets/product.png" alt="product" className="w-full" />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg bg-gray-300 p-2 cursor-pointer">
            <img src="/assets/product.png" alt="product" className="w-full" />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg bg-gray-300 p-2 cursor-pointer">
            <img src="/assets/product.png" alt="product" className="w-full" />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg bg-gray-300 p-2 cursor-pointer">
            <img src="/assets/product.png" alt="product" className="w-full" />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg bg-gray-300 p-2 cursor-pointer">
            <img src="/assets/product.png" alt="product" className="w-full" />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg bg-gray-300 p-2 cursor-pointer">
            <img src="/assets/product.png" alt="product" className="w-full" />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg bg-gray-300 p-2 cursor-pointer">
            <img src="/assets/product.png" alt="product" className="w-full" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex items-center justify-center w-[64px] p-2">
        <button>
          <DownArrow />
        </button>
      </div>
    </div>
  );
}