"use client";
import { ProductCard, SectionHeader, SliderWrapper } from "@/components";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";
import { SwiperSlide } from "swiper/react";

export default function FitFoodRange() {
  const { slidePerView } = useAppContext();
  return (
    <div className="w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full flex flex-col gap-[40px] px-5">
      <SectionHeader label="Fit Food Range" />
      <SliderWrapper showBtns slidePerView={slidePerView}>
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
