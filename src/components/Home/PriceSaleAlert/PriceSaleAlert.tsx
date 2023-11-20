"use client";
import { ProductCard, SectionHeader, SliderWrapper } from "@/components";
import { SwiperSlide } from "swiper/react";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";
import { useRouter } from "next/navigation";
export default function PriceSaleAlert() {
  const { slidePerView } = useAppContext();
  const router = useRouter();
  return (
    <div className="w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full flex flex-col gap-[40px] px-5">
      <SectionHeader
        onClick={() => router.push("/shop-by-brands")}
        label="Price Sale Alert"
        showBtn
        btnLabel="View all"
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
