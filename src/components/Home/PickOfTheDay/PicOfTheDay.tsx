"use client";
import { ProductCard, SectionHeader, SliderWrapper } from "@/components";
import { SwiperSlide } from "swiper/react";

export default function PicOfTheDay() {
  return (
    <div className="w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full flex flex-col gap-[40px]">
      <SectionHeader label="Pick of the Day" />
      <SliderWrapper slidePerView={4.2}>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </SliderWrapper>
    </div>
  );
}
