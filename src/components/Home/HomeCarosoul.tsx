"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function HomeCarosoul({ className }: { className?: string }) {
  return (
    <div
      className={"w-[1000px]  mx-auto max-[1050px]:w-full " + " " + className}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className="w-full h-full bg-text-grey flex items-center justify-center rounded-2xl overflow-hidden">
          <Image
            src={"/assets/home/img1.png"}
            alt="carosoul"
            width={1000}
            height={"400"}
            className="w-full h-auto rounded-2xl overflow-hidden"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full bg-text-grey flex items-center justify-center rounded-2xl overflow-hidden">
          <Image
            src={"/assets/home/img1.png"}
            alt="carosoul"
            width={1000}
            height={400}
            className="w-full h-full rounded-2xl overflow-hidden"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full bg-text-grey flex items-center justify-center rounded-2xl overflow-hidden">
          <Image
            src={"/assets/home/img1.png"}
            alt="carosoul"
            width={1000}
            height={400}
            className="w-full h-full rounded-2xl overflow-hidden"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full bg-text-grey flex items-center justify-center rounded-2xl overflow-hidden">
          <Image
            src={"/assets/home/img1.png"}
            alt="carosoul"
            width={1000}
            height={400}
            className="w-full h-full rounded-2xl overflow-hidden"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full bg-text-grey flex items-center justify-center rounded-2xl overflow-hidden">
          <Image
            src={"/assets/home/img1.png"}
            alt="carosoul"
            width={1000}
            height={400}
            className="w-full h-full rounded-2xl overflow-hidden"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
