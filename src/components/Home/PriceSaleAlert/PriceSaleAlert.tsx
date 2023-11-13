"use client";
import { ProductCard, SectionHeader, SliderWrapper } from "@/components";
import { SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";
export default function PriceSaleAlert() {
  const { slidePerView } = useAppContext();
  return (
    <div className="w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full flex flex-col gap-[40px] ">
      <SectionHeader label="Price Sale Alert" showBtn btnLabel="View all" />
      <SliderWrapper slidePerView={slidePerView}>
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
