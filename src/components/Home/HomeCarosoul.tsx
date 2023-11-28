"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, A11y } from "swiper/modules";
import Image from "next/image";
import NextButton from "../SliderButtons/NextButton";
import PrevButton from "../SliderButtons/PrevButton";
import { Banners } from "@/utils/Schemas";

export default function HomeCarosoul({
  className,
  bannersData,
}: {
  className?: string;
  bannersData: Banners[];
}) {
  const swiper = useSwiper();
  return (
    <div className={"w-full  " + " " + className}>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, A11y]}
        className="mySwiper w-full h-full max-[500px]:h-300px relative"
      >
        <PrevButton />
        <NextButton />
        {bannersData &&
          bannersData?.length > 0 &&
          bannersData.map((banner) => (
            <SwiperSlide
              key={banner?.id}
              className="w-full h-full bg-text-grey flex items-center justify-center  overflow-hidden cursor-pointer"
            >
              <Image
                src={banner?.web}
                alt="carosoul"
                width={1000}
                height={"400"}
                className="w-full h-full  overflow-hidden"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
