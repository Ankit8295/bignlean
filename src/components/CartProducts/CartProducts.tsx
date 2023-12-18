"use client";
import { useGetCartList } from "@/queries/Cart";
import CartProductCard from "./CartProductCard";

export default function CartProducts() {
  const { data: cartList } = useGetCartList();

  return (
    <div className="sm-1 flex flex-col p-8 rounded-2xl bg-white gap-6">
      {cartList?.data?.cartItems?.length > 0 &&
        cartList?.data?.cartItems?.map((cart: any) => (
          <CartProductCard productDetail={cart} key={cart?.id} />
        ))}
    </div>
  );
}
