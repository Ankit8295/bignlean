import { CoinSmIcon, Info2Icon, InfoIcon } from "@/Icons";
import Link from "next/link";

export default function ProductDelivery() {
  return (
    <div className="w-[70%]">
      <h2 className="text-black text-lg not-italic font-semibold mb-4">
        Delivery & Services
      </h2>
      <PinCodeCard />
      <DeliveryPoints />
      <BigLeanCashCard />
      <OriginCard />
      <MembershipCard />
    </div>
  );
}
const MembershipCard = () => {
  return (
    <div className="flex items-center linear-gradient-1 rounded-lg overflow-hidden p-4 mt-5">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-white text-xs not-italic font-semibold leading-4">
            Premium Membership
          </p>
          <Info2Icon />
        </div>
        <p className="text-white text-xs not-italic font-normal leading-4">
          Save more with attractive deals using Premium Membership. Buy now at
          Rs. 499 for a year
        </p>
      </div>
      <button className="whitespace-nowrap bg-white p-2 rounded-lg text-black text-xs not-italic font-medium leading-4">
        + Add
      </button>
    </div>
  );
};

const OriginCard = () => {
  return (
    <div className="flex items-center justify-around sm-3 rounded-lg p-4 mt-5">
      <div className="flex flex-col gap-2 items-center">
        <img src="/assets/product/fssai.png" alt="fssai" className="w-[48px]" />
        <p className="text-black text-xs not-italic font-normal">
          Lic. No. 10015064000576
        </p>
      </div>
      <div className="w-[1px] h-[60px] bg-gray-200"></div>
      <div className="flex flex-col gap-2 items-center">
        <img src="/assets/product/india.png" alt="india" className="w-[38px]" />
        <p className="text-black text-xs not-italic font-normal">
          Country of Origin
        </p>
      </div>
    </div>
  );
};

const BigLeanCashCard = () => {
  return (
    <div className="flex items-center gap-2 bg-white p-4 rounded-lg mt-6 sm-3">
      <p className="text-sm not-italic font-medium text-gradient">
        You will earn
      </p>
      <CoinSmIcon />
      <p className="text-sm not-italic font-medium text-gradient">
        3 BignLean Cash on this order
      </p>
    </div>
  );
};

const PinCodeCard = () => {
  return (
    <div className="sm-2 p-4 flex items-center justify-between bg-white rounded-lg">
      <p>404015</p>
      <div className="flex items-center gap-3">
        <img
          src="/assets/track/completed.png"
          alt="complete"
          className="w-[24px] h-[24px]"
        />
        <p className="text-black text-xs not-italic font-medium">Available</p>
      </div>
    </div>
  );
};

const DeliveryPoints = () => {
  return (
    <div className="mt-4 flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <img src="/assets/product/truck.png" alt="truck" className="w-[22px]" />
        <p className="text-black text-sm not-italic font-normal">
          Delivered by{" "}
          <span className="text-black text-sm not-italic font-semibold">
            Thursday, 23 Mar, Free Shipping
          </span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <img src="/assets/product/cod.png" alt="truck" className="w-[22px]" />
        <p className="text-black text-sm not-italic font-normal">
          Cash on Delivery available
        </p>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="/assets/product/return.png"
          alt="truck"
          className="w-[22px]"
        />
        <p className="text-black text-sm not-italic font-normal flex items-center gap-2">
          14 Days return policy
          <Link
            href={"/return-policy"}
            className="text-black text-sm not-italic font-semibold text-gradient"
          >
            Learn more
          </Link>
        </p>
      </div>
    </div>
  );
};
