"use client";
import { SectionHeader, SliderWrapper } from "@/components";
import { SwiperSlide } from "swiper/react";
import BrandCard from "./BrandCard";
import { Brands } from "@/utils/Schemas";

type Props = {
  brandsData: Brands[];
};

export default function ShopByBrands({ brandsData }: Props) {
  return (
    <div className="w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full flex flex-col gap-[40px]">
      <SectionHeader label="Shop by brands" showBtn btnLabel="Show all" />
      <SliderWrapper slidePerView={6}>
        {brandsData &&
          brandsData.length > 0 &&
          brandsData.map((brand) => (
            <SwiperSlide key={brand?.id}>
              <BrandCard src={brand?.image} />
            </SwiperSlide>
          ))}
      </SliderWrapper>
    </div>
  );
}
