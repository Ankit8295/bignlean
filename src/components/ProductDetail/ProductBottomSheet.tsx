import { ShoppingBagIcon } from "@/Icons";
import { QuantityCard } from "./ProductInfo";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function ProductBottomSheet() {
  return (
    <div className="hidden max-[450px]:flex fixed bottom-0 left-0 z-[9999] flex-col w-full p-2 pt-5 gap-3 bg-white">
      <p className="text-black text-base not-italic font-normal">
        <span className="text-black text-base not-italic font-bold">
          Variant:
        </span>{" "}
        2 Kg Cafe Mocha
      </p>
      <div className="flex items-center justify-between">
        <QuantityCard />
        <p className="text-black text-base not-italic font-bold">
          <span className="text-black text-sm not-italic font-medium">
            Total:
          </span>{" "}
          ₹3,449.00
        </p>
      </div>
      <div className="flex items-center mt-4 gap-2">
        <div className="border border-red-500 p-3 rounded-xl">
          <ShoppingBagIcon />
        </div>
        <div className="flex-1">
          <PrimaryButton label="BUY NOW" />
        </div>
      </div>
    </div>
  );
}
