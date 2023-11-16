import { CoinSmIcon, SideArrowIcon } from "@/Icons";
import { OutlinedButton } from "..";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function ProductVarient() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <WeightCard />
      <FlavourCard />
      <PermiumCard />
      <Expirycard />
    </div>
  );
}

const Expirycard = () => {
  return (
    <div className="flex items-center justify-between w-[70%] bg-white p-4 rounded-lg max-[450px]:w-full">
      <p className="text-sm not-italic font-medium text-gradient">
        Expiry: 12/10/2026
      </p>
    </div>
  );
};

const PermiumCard = () => {
  return (
    <div className="flex items-center justify-between w-[70%] bg-white p-4 rounded-lg max-[450px]:w-full">
      <div className="flex items-center gap-2">
        <CoinSmIcon />
        <p
          className="text-black text-sm not-italic font-medium
"
        >
          ₹ 3,449 for Premium Members
        </p>
      </div>
      <SideArrowIcon />
    </div>
  );
};

const FlavourCard = () => {
  return (
    <div>
      <p className="text-black text-sm not-italic font-medium mb-2">Flavour</p>
      <div className="flex gap-3 flex-wrap">
        <OutlinedButton className="!px-2 !py-1" label="Chocolate Fudge" />
        <PrimaryButton className="!px-2 !py-1" label="Cafe Mocha" />
        <OutlinedButton label="Vanilla Cream" className="!px-2 !py-1" />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex items-center justify-between w-[70%] max-[450px]:w-full">
      <h2 className="text-black text-lg not-italic font-semibold">
        Select Variant:
      </h2>
      <div className="flex items-center gap-2">
        <p className="text-black text-sm not-italic font-semibold">kg</p>
        <p className="text-black text-sm not-italic font-semibold opacity-30">
          lb
        </p>
      </div>
    </div>
  );
};

const WeightCard = () => {
  return (
    <div>
      <p className="text-black text-sm not-italic font-medium mb-2">Weight</p>
      <div className="flex gap-3">
        <OutlinedButton className="!px-2 !py-1" label="1Kg" />
        <PrimaryButton className="!px-2 !py-1" label="123g" />
        <OutlinedButton label="1Kg" className="!px-2 !py-1" />
      </div>
    </div>
  );
};
