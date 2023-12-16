/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

export default function ProductPhoto({ image }: { image: string }) {
  const [product_image, setProduct_image] = useState<any>(null);
  useEffect(() => {
    setProduct_image(
      window.localStorage.getItem("product_image")
        ? window.localStorage.getItem("product_image")
        : null
    );
  }, []);

  return (
    <div className="w-full flex items-center justify-center h-[400px] bg-white rounded-lg relative sm-3">
      <img src={product_image || image} alt="product" className="w-[50%]" />
      <img
        src="/assets/veg.png"
        alt="veg symbol"
        className="w-[34px] h-[34px] absolute top-3 right-3"
      />
    </div>
  );
}
