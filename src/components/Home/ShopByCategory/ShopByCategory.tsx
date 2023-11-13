"use client";
import {
  BccaIcon,
  CretienIcon,
  ExtraIcon,
  ProteinIcon,
  ViteminsIcon,
  WellnessIcon,
} from "@/Icons/category";
import { SectionHeader, SliderWrapper } from "@/components";
import { ReactNode } from "react";
import { SwiperSlide } from "swiper/react";
import ShopCategoryCard from "./ShopCategoryCard";

type CategoryListType = {
  image: ReactNode;
  label: string;
  subLabel?: string;
}[];

const categoryList: CategoryListType = [
  {
    label: "PROTEIN",
    subLabel: "POWDERS",
    image: <ProteinIcon />,
  },
  {
    label: "BCAA",
    image: <BccaIcon />,
  },
  {
    label: "CREATINE",
    subLabel: "POWDERS",
    image: <CretienIcon />,
  },
  {
    label: "VITAMINS & MINERALS",
    image: <ViteminsIcon />,
  },
  {
    label: "EXTRAS",
    image: <ExtraIcon />,
  },
  {
    label: "WELLNESS",
    image: <WellnessIcon />,
  },
];

export default function ShopByCategory() {
  return (
    <div className="w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full flex flex-col gap-[40px]">
      <SectionHeader label="Shop by category" showBtn={false} />
      <div className="custom-grid">
        {categoryList.map((item, index) => (
          <ShopCategoryCard
            key={index}
            image={item.image}
            label={item.label}
            subLabel={item.subLabel}
          />
        ))}
      </div>
    </div>
  );
}
