"use client";
import { ProductDetail, ProductFooter, ProductOverview } from "@/components";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { useGetProductDetail } from "@/queries/Cart";

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useGetProductDetail(params?.id as any);

  return (
    <CustomPageWrapper heading="">
      <div className="flex max-[890px]:flex-col max-[890px]:gap-5">
        <div className="flex-1">
          <ProductOverview images={data?.data?.result?.images} />
        </div>
        <div className="flex-1">
          <ProductDetail product={data?.data?.result} />
        </div>
      </div>
      <div className="h-[2px] w-full bg-gray-200 my-10"></div>
      <ProductFooter product={data?.data?.result} />
      {/* <PriceSaleAlert /> */}
      <div className="border rounded-lg p-4 w-[60%] mt-10 max-[890px]:w-full">
        <p className="text-black text-base not-italic font-bold mb-3">
          Brand Authorized Imported
        </p>
        <p className="text-black text-sm not-italic font-medium mb-3">
          Sold & Marketed By: Gold Standard 100% Whey Blend - 24g blended
          protein consisting of whey protein isolate, whey protein concentrate,
          and whey peptides/hydrolysates to support muscle recovery.
        </p>
        <p className="text-black text-sm not-italic font-normal">
          <span className="text-black text-sm not-italic font-medium">
            Manufactured By:
          </span>{" "}
          Gold Standard 100% Whey Blend - 24g blended
        </p>
      </div>
    </CustomPageWrapper>
  );
}
