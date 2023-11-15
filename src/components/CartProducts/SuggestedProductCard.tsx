import { TrashIcon } from "@/Icons";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function SuggestedProductCard({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      <img src="/assets/product.png" alt="product" className="w-[40px]" />
      <div>
        <p className="text-black text-sm not-italic font-medium">
          Muscletech NitroTech 100% Whey Gold Performance Series
        </p>
        <p className="text-black text-[10px] not-italic font-normal opacity-40">
          3 kg - Unflavoured
        </p>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <p className="text-black text-[10px] not-italic font-normal line-through opacity-40">
            ₹3,999.00
          </p>
          <p className="text-black text-xs not-italic font-bold">₹3,449.00</p>
          <p className="text-green-500 text-xs not-italic font-medium">
            Save ₹299
          </p>
        </div>
        <button className="linear-gradient-1 text-white px-3 py-1 rounded-lg">
          + Add
        </button>
      </div>
      <button className="ml-auto">
        <TrashIcon />
      </button>
    </div>
  );
}
