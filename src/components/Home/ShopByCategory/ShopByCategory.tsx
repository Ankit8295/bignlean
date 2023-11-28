"use client";
import { SectionHeader, SliderWrapper } from "@/components";
import { SwiperSlide } from "swiper/react";
import ShopCategoryCard from "./ShopCategoryCard";
import { Categories } from "@/utils/Schemas";

export default function ShopByCategory({
  categoriesData,
}: {
  categoriesData: Categories[];
}) {
  return (
    <div className="w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full flex flex-col gap-[40px]">
      <SectionHeader label="Shop by category" showBtn={false} />
      <SliderWrapper slidePerView={6}>
        {categoriesData &&
          categoriesData.length > 0 &&
          categoriesData.map((category) => (
            <SwiperSlide key={category?.id}>
              <ShopCategoryCard
                key={category.id}
                image={category.image}
                label={category.name}
              />
            </SwiperSlide>
          ))}
      </SliderWrapper>
    </div>
  );
}
