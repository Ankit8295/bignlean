"use client";
export default function ProductPhoto({ image }: { image: string }) {
  return (
    <div className="w-full flex items-center justify-center h-[400px] bg-white rounded-lg relative sm-3">
      <img
        src={localStorage.getItem("product_image")! || image}
        alt="product"
        className="w-[50%]"
      />
      <img
        src="/assets/veg.png"
        alt="veg symbol"
        className="w-[34px] h-[34px] absolute top-3 right-3"
      />
    </div>
  );
}
