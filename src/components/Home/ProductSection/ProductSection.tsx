"use client";
import { ProductCard, SectionHeader, SliderWrapper } from "@/components";
import { SwiperSlide } from "swiper/react";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";
import { useRouter } from "next/navigation";

type Props = {
  products: any[];
  sectionName: string;
};

export default function ProductSection({ products, sectionName }: Props) {
  const { slidePerView } = useAppContext();
  const router = useRouter();
  return (
    <>
      {products?.length > 0 && (
        <div className="w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full flex flex-col gap-[40px] px-5">
          <SectionHeader
            onClick={() => router.push("/shop-by-brands")}
            label={sectionName}
            showBtn
            btnLabel="View all"
          />
          <SliderWrapper showBtns slidePerView={slidePerView}>
            {products.map((item, index) => (
              <SwiperSlide key={index}>
                <ProductCard />
              </SwiperSlide>
            ))}
          </SliderWrapper>
        </div>
      )}
    </>
  );
}
