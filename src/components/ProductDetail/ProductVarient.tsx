"use client";
import { CoinSmIcon, SideArrowIcon } from "@/Icons";
import VarityButton from "../Buttons/VarityButton";
import { useState } from "react";

export default function ProductVarient({ product }: { product: any }) {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <WeightCard weight={product?.weight} />
      <FlavourCard flavor={product?.flavor} />
      <PermiumCard premiumPrice={product?.premiumPrice} />
      <Expirycard expiry={product?.expireDate || new Date().getUTCDate()} />
    </div>
  );
}

const Expirycard = ({ expiry }: { expiry: any }) => {
  return (
    <div className="flex items-center justify-between w-[70%] bg-white p-4 rounded-lg max-[450px]:w-full">
      <p className="text-sm not-italic font-medium text-gradient">
        Expiry: {expiry}
      </p>
    </div>
  );
};

const PermiumCard = ({ premiumPrice }: { premiumPrice: any }) => {
  return (
    <div className="flex items-center justify-between w-[70%] bg-white p-4 rounded-lg max-[450px]:w-full">
      <div className="flex items-center gap-2">
        <CoinSmIcon />
        <p
          className="text-black text-sm not-italic font-medium
"
        >
          ${premiumPrice} for Premium Members
        </p>
      </div>
      <SideArrowIcon />
    </div>
  );
};

const FlavourCard = ({ flavor }: { flavor: any }) => {
  return (
    <div>
      <p className="text-black text-sm not-italic font-medium mb-2">Flavour</p>
      <div className="flex gap-3 flex-wrap">
        <VarityButton label={flavor} active />
      </div>
    </div>
  );
};

const Header = () => {
  const [active, setActive] = useState("kg");
  const design = `text-white linear-gradient-1`;
  return (
    <div className="flex items-center justify-between w-[70%] max-[450px]:w-full">
      <h2 className="text-black text-lg not-italic font-semibold">
        Select Variant:
      </h2>
      <div className="flex items-center">
        <p
          onClick={() => setActive("kg")}
          className={`cursor-pointer text-sm not-italic border   border-red-400 w-[30px] flex justify-center p-1 font-semibold ${
            active === "kg" ? design : "text-gradient"
          }`}
        >
          kg
        </p>
        <p
          onClick={() => setActive("lb")}
          className={`cursor-pointer text-sm not-italic border   border-red-400 w-[30px] flex justify-center p-1 font-semibold ${
            active === "lb" ? design : "text-gradient"
          }`}
        >
          lb
        </p>
      </div>
    </div>
  );
};

const WeightCard = ({ weight }: { weight: any }) => {
  return (
    <div>
      <p className="text-black text-sm not-italic font-medium mb-2">Weight</p>
      <div className="flex gap-3">
        <VarityButton active label={weight} />
      </div>
    </div>
  );
};
