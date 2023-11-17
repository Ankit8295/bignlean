"use client";
import { useSwiper } from "swiper/react";

export default function PrevButton() {
  const swiper = useSwiper();
  return (
    <button
      className="prev-btn w-[50px] h-[50px] absolute top-[50%] left-0 translate-y-[-50%] z-10 rotate-180 cursor-pointer"
      onClick={() => swiper.slidePrev()}
    ></button>
  );
}
