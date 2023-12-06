"use client";
import { BestsellerIcon, ThunderIcon, TrashIcon, WhishlistIcon } from "@/Icons";
import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { useAddToWishList, useRemoveFormWishList } from "@/queries/Product";
import { useAddToCartList } from "@/queries/Cart";

type Props = {
  product: {
    id: number;
    name: string;
    price: number;
    sellingPrice: number;
    premiumPrice: number;
    images: string[];
  };
  pathname?: string;
};

export default function ProductCard({ product, pathname }: Props) {
  const router = useRouter();
  const { mutate: addToWishList } = useAddToWishList();
  const { mutate: removeFromWishList } = useRemoveFormWishList();
  const { mutate: addToCart } = useAddToCartList();
  const payload = { productId: product?.id };
  return (
    <div className="rounded-[15px] sm-3 relative  p-3 my-2 overflow-hidden">
      <div className="w-full flex  justify-center pt-7 pb-4 ">
        <Image
          src={product?.images[0]}
          alt="product"
          width={97}
          height={130}
          className="cursor-pointer"
          onClick={() => router.push(`/product/${product?.id}`)}
        />
      </div>
      <p
        onClick={() => router.push(`/product/${product?.id}`)}
        className="text-black text-xs not-italic font-medium mb-3 cursor-pointer"
      >
        {product?.name}
      </p>
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-black text-xs not-italic font-medium line-through opacity-40">
            $ {product?.premiumPrice}
          </p>
          <p className="text-black text-base not-italic font-bold">
            $ {product?.sellingPrice}
          </p>
        </div>
        <div className="flex gap-1 items-center rounded-md bg-gray-100 px-2 py-1">
          <BestsellerIcon />
          <p className="text-gradient text-xs not-italic font-normal">
            Bestseller
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-black opacity-5 mb-3" />
      <PrimaryButton
        className="w-full"
        onClick={() => addToCart({ product: product?.id, qty: 1 })}
        label="Add to cart"
      />
      <p className="absolute top-0 left-0 text-green-500 text-xs not-italic font-bold bg-[#DFF3E2] p-2 rounded-br-[15px]">
        32% off
      </p>
      <button
        onClick={() =>
          pathname === "wishlist"
            ? removeFromWishList(payload)
            : addToWishList(payload)
        }
        className="absolute top-3 right-3"
      >
        {pathname === "wishlist" ? <TrashIcon /> : <WhishlistIcon />}
      </button>
      <div className="absolute top-12 right-4">
        <ThunderIcon />
      </div>
    </div>
  );
}
