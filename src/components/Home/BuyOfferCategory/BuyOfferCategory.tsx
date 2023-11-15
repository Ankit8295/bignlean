"use client";
import { ProductCard, SectionHeader, SliderWrapper } from "@/components";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";
import { useRouter } from "next/navigation";
import { SwiperSlide } from "swiper/react";

export default function BuyOfferCategory() {
  const { slidePerView } = useAppContext();
  const router = useRouter();
  return (
    <div className="w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full flex flex-col gap-[40px]">
      <SectionHeader
        onClick={() => router.push("/shop-by-brands")}
        label="Buy 2 @ 15% Off"
        showBtn
        btnLabel="Show all"
      />
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
