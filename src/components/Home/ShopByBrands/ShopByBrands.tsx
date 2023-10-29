"use client";
import { SectionHeader, SliderWrapper } from "@/components";
import { SwiperSlide } from "swiper/react";
import BrandCard from "./BrandCard";

export default function ShopByBrands() {
  return (
    <div className="w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full flex flex-col gap-[40px]">
      <SectionHeader label="Shop by brands" showBtn btnLabel="Show all" />
      <SliderWrapper slidePerView={6}>
        <SwiperSlide>
          <BrandCard src="/assets/brands/img1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard src="/assets/brands/img2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard src="/assets/brands/img3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard src="/assets/brands/img4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard src="/assets/brands/img5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard src="/assets/brands/img1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard src="/assets/brands/img2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard src="/assets/brands/img3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCard src="/assets/brands/img4.png" />
        </SwiperSlide>
      </SliderWrapper>
    </div>
  );
}
