"use client";
import { ReactNode } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";
import SliderBtn from "../SliderButtons/SliderBtn";

type Props = {
  children: ReactNode;
  slidePerView?: number;
  showBtns?: boolean;
};
export default function SliderWrapper({
  children,
  slidePerView,
  showBtns = false,
}: Props) {
  return (
    <div className="w-[1200px] mx-auto max-[1200px]:w-full">
      <Swiper
        slidesPerView={slidePerView || 3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper w-full relative"
      >
        {showBtns && (
          <>
            <SliderBtn next={true} />
            <SliderBtn next={false} />
          </>
        )}
        {children}
      </Swiper>
    </div>
  );
}
