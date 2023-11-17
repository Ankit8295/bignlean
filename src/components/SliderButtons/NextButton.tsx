"use client";
import { useSwiper } from "swiper/react";

export default function NextButton() {
  const swiper = useSwiper();
  return (
    <button
      className="next-btn w-[50px] h-[50px] absolute top-[50%] right-0 translate-y-[-50%] z-10 "
      onClick={() => swiper.slideNext()}
    ></button>
  );
}
