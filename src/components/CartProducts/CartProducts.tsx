"use client";
import CartProductCard from "./CartProductCard";

export default function CartProducts({ data }: { data: any }) {
  return (
    <div className="sm-1 flex flex-col p-8 rounded-2xl bg-white gap-6">
      {data?.length > 0 &&
        data?.map((cart: any) => (
          <CartProductCard productDetail={cart} key={cart?.id} />
        ))}
    </div>
  );
}
