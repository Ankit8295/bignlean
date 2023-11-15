"use client";
import { useState } from "react";
import { DownArrow } from "@/Icons";

export default function RelatedProduct() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between max-[1400px]:gap-5">
        <h2>Related Product</h2>
        <button onClick={() => setToggle(!toggle)}>
          <DownArrow />
        </button>
      </div>
      {toggle && (
        <div className="flex flex-col gap-3">
          <ProductCard />
          <ProductCard />
        </div>
      )}
    </div>
  );
}

const ProductCard = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/assets/product.png" alt="product" className="w-[48px]" />
      <div>
        <p className="text-black text-xs not-italic font-medium mb-2">
          Muscletech NitroTech 100% Whey Gold Performance Series
        </p>
        <div className="flex gap-2 items-center">
          <p className="text-black text-xs not-italic font-normal line-through opacity-40">
            ₹3,999.00
          </p>
          <p className="text-black text-sm not-italic font-bold">₹3,449.00</p>
        </div>
      </div>
    </div>
  );
};
