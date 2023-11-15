"use client";
import { BestsellerIcon, ThunderIcon, WhishlistIcon } from "@/Icons";
import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/navigation";

export default function ProductCard() {
  const router = useRouter();
  return (
    <div className="rounded-[15px] sm-3 relative  p-3 overflow-hidden">
      <div className="w-full flex  justify-center pt-7 pb-4">
        <Image
          src={"/assets/product.png"}
          alt="product"
          width={97}
          height={130}
        />
      </div>
      <p className="text-black text-xs not-italic font-medium mb-3">
        Muscletech NitroTech 100% Whey Gold Performance Series
      </p>
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-black text-xs not-italic font-medium line-through opacity-40">
            ₹3,999.00
          </p>
          <p className="text-black text-base not-italic font-bold">₹3,449.00</p>
        </div>
        <div className="flex gap-1 items-center rounded-md bg-gray-100 px-2 py-1">
          <BestsellerIcon />
          <p className="text-gradient text-xs not-italic font-normal">
            Bestseller
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-black opacity-5 mb-3" />
      <PrimaryButton onClick={() => router.push("/cart")} label="Add to cart" />
      <p className="absolute top-0 left-0 text-green-500 text-xs not-italic font-bold bg-[#DFF3E2] p-2 rounded-br-[15px]">
        32% off
      </p>
      <button className="absolute top-3 right-3">
        <WhishlistIcon />
      </button>
      <div className="absolute top-12 right-4">
        <ThunderIcon />
      </div>
    </div>
  );
}
