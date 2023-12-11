"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";
import { DownArrow } from "@/Icons";

export default function ProductSlider({ images }: { images: string[] }) {
  return (
    <div className="max-[650px]:hidden">
      <div className="w-[64px]  h-[400px] rounded-lg bg-white">
        <Swiper
          direction={"vertical"}
          slidesPerView={4.5}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper h-full"
        >
          {images?.length > 0 &&
            images?.map((image, index) => (
              <SwiperSlide
                key={index}
                className="rounded-lg !w-[64px] !h-[64px] bg-gray-300 p-2 cursor-pointer"
                onClick={() => localStorage.setItem("product_image", image)}
              >
                <img
                  src={image}
                  alt="product"
                  className="w-auto h-full mx-auto"
                />
              </SwiperSlide>
            ))}
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
