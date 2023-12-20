"use client";
import { ProductCard } from "@/components";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { useGEtWishList } from "@/queries/Product";
import { useEffect, useState } from "react";

export default function Page() {
  const [userId, setUserId] = useState<any>(null);
  const { data } = useGEtWishList(userId?.user?.id);

  useEffect(() => {
    setUserId(JSON.parse(localStorage?.AUTH || ""));
  }, []);

  return (
    <CustomPageWrapper heading="Wishlist" showContentFooter={false}>
      {data?.data?.filteredList?.length === 0 && (
        <h3 className="text-center text-gray-400">Wishlist is Empty</h3>
      )}
      <div className="custom-grid2 mb-[70px]">
        {data?.data?.filteredList?.length > 0 &&
          data?.data?.filteredList?.map((wishItem: any, index: number) => (
            <ProductCard pathname="wishlist" product={wishItem} key={index} />
          ))}
      </div>
    </CustomPageWrapper>
  );
}
