"use client";
import { ShareIcon, StarIcon, WhishlistIcon } from "@/Icons";
import { OutlinedButton } from "..";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { useAddToCartList } from "@/queries/Cart";
import { useEffect, useState } from "react";

export default function ProductInfo({ product }: { product: any }) {
  const router = useRouter();
  const { mutate: addToCart } = useAddToCartList();
  const [userId, setUserId] = useState<any>(null);
  useEffect(() => {
    setUserId(JSON.parse(localStorage?.AUTH || "null"));
  }, []);
  console.log(product);
  return (
    <div>
      <p className="text-green-700 text-xl not-italic font-normal">
        {product?.brand?.heading}
      </p>
      <h2 className="text-black text-2xl not-italic font-semibold mb-4">
        {product?.brand?.body}
      </h2>
      <ProductRating rating={product?.totalRating} />
      <div className="flex items-center justify-between">
        <PriceCard product={product} className="my-5" />
        <OutlinedButton
          label="+ Compare"
          className="hidden max-[890px]:block"
          onClick={() => router.push("/comparison")}
        />
      </div>
      <div className="max-[450px]:hidden">
        <QuantityCard />
      </div>
      <div className="flex gap-3 mt-6 w-[70%] max-[1220px]:w-full max-[450px]:hidden">
        <OutlinedButton
          onClick={() =>
            addToCart({
              userId: userId?.user?.id,
              product: product?.id,
              qty: 1,
            })
          }
          label="ADD TO CART"
          className="flex-1"
        />
        <PrimaryButton
          onClick={() =>
            addToCart({
              userId: userId?.user?.id,
              product: product?.id,
              qty: 1,
            })
          }
          label="BUY NOW"
          className="flex-1"
        />
      </div>
    </div>
  );
}

const ProductRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <StarIcon />
        <p className="text-black text-xl not-italic font-bold">4.4</p>
        <span className="text-black text-base not-italic font-medium opacity-30">
          ({rating} Reviews)
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button>
          <ShareIcon />
        </button>
        <button>
          <WhishlistIcon />
        </button>
      </div>
    </div>
  );
};

const PriceCard = ({
  className,
  product,
}: {
  className?: string;
  product: any;
}) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <p className="text-black text-base not-italic font-normal line-through opacity-30">
          {product?.premiumPrice}
        </p>
        <p className="text-green-500 text-xs not-italic font-semibold">
          21% off
        </p>
      </div>
      <p className="text-gradient text-2xl not-italic font-bold">
        {product?.sellingPrice}
      </p>
      <p className="text-black text-xs not-italic font-normal">
        Inclusive of all taxes
      </p>
    </div>
  );
};

export const QuantityCard = () => {
  return (
    <div>
      <p className="text-black text-lg not-italic font-semibold mb-3 max-[450px]:hidden">
        Quantity:
      </p>
      <div className="flex items-center gap-5">
        <button className="w-[24px] sm-3 bg-white text-gradient flex items-center justify-center rounded-sm scale-150">
          -
        </button>
        <p className="text-black text-sm not-italic font-semibold">01</p>
        <button className="w-[24px]  sm-3 bg-white text-gradient flex items-center justify-center rounded-sm scale-150">
          +
        </button>
      </div>
    </div>
  );
};
