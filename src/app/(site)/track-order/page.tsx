"use client";
import { CompleteIcon, ProccessingIcon } from "@/Icons";
import { OutlinedButton } from "@/components";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";

export default function page() {
  return (
    <CustomPageWrapper heading="Track Order" className="relative">
      <p className="absolute top-[10%] right-0 text-black text-sm not-italic font-medium">
        AWB Tracking no: 318464688
      </p>
      <div className="flex flex-col gap-[22px]">
        <OrderCard />
        <OrderCard />
      </div>
    </CustomPageWrapper>
  );
}

const OrderCard = () => {
  return (
    <div className="sm-1 bg-white rounded-lg p-[30px]">
      <div className="flex gap-2 mb-7">
        <ProccessingIcon />
        <div className="flex flex-col gap-1">
          <span className="text-blue-900 text-center text-base not-italic font-semibold">
            Processing
          </span>
          <span className="text-gray-500 text-center text-xs not-italic font-medium">
            On Fri, 16 Dec
          </span>
        </div>
      </div>
      <div className="flex gap-8">
        <ProductDetailCard />
        <ProcessingCard />
      </div>
    </div>
  );
};

const ProductDetailCard = () => {
  return (
    <div className="flex gap-6 ">
      <img src="/assets/product.png" alt="product" className="w-[100px]" />
      <div className="flex flex-col w-[195px]">
        <p className="text-black text-base not-italic font-medium">
          Muscletech NitroTech 100% Whey Gold Performance Series
        </p>
        <p className="text-black text-sm not-italic font-normal opacity-40">
          3 kg - Unflavoured
        </p>
        <OutlinedButton
          label="Cancel"
          className="mt-auto py-[8px] px-[10px] self-start"
        />
      </div>
    </div>
  );
};

const ProcessingCard = () => {
  return (
    <div className="flex flex-1 justify-between relative">
      <div className="w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] h-[5px] bg-[#2AD957]"></div>
      <ProcessingCompleteCard />
      <ProcessingCompleteCard />
      <ProcessingCompleteCard completed={false} />
      <ProcessingCompleteCard completed={false} />
    </div>
  );
};

const ProcessingCompleteCard = ({
  completed = true,
}: {
  completed?: boolean;
}) => {
  return (
    <div className="flex flex-col items-center z-50">
      <p className="text-black text-sm not-italic font-normal mb-1">
        Wed, 07 Aug
      </p>
      <p className="mb-4 text-gray-500 not-italic font-normal text-[10px]">
        2:35 AM
      </p>
      <div className="w-[55px] bg-white flex items-center justify-center">
        <img
          src={
            completed
              ? `/assets/track/completed.png`
              : `/assets/track/process.png`
          }
          alt="completed"
          className="w-[44px]"
        />
      </div>
      <p className="mt-6 text-black text-base not-italic font-medium">
        Order Confirmed
      </p>
    </div>
  );
};
