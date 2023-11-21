import { CoinSmIcon, SideArrowIcon } from "@/Icons";
import { OutlinedButton } from "..";
import PrimaryButton from "../Buttons/PrimaryButton";
import VarityButton from "../Buttons/VarityButton";

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
        <VarityButton label="Chocolate Fudge" />
        <VarityButton label="Cafe Mocha" active />
        <VarityButton label="Vanilla Cream" />
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
      <div className="flex items-center">
        <p className=" cursor-pointer text-sm not-italic border linear-gradient-1 text-white border-red-400 w-[30px] flex justify-center p-1 font-semibold">
          kg
        </p>
        <p className="text-black cursor-pointer text-sm not-italic border text-gradient border-red-400 p-1 font-semibold w-[30px] flex justify-center">
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
        <VarityButton label="1Kg" />
        <VarityButton active label="123g" />
        <VarityButton label="1Kg" />
      </div>
    </div>
  );
};
