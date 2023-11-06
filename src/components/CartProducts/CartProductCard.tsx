import { TrashIcon } from "@/Icons";

export default function CartProductCard({ className }: { className?: string }) {
  return (
    <div className={`flex items-start gap-8 ${className}`}>
      <img src="/assets/product.png" alt="product" className="w-[56px]" />
      <div>
        <p className="text-black text-base not-italic font-medium">
          Muscletech NitroTech 100% Whey Gold Performance Series
        </p>
        <p className="text-black text-xs not-italic font-normal opacity-40">
          3 kg - Unflavoured
        </p>
        <div className="flex items-center gap-2 mb-3">
          <p className="text-black text-xs not-italic font-normal line-through opacity-40">
            ₹3,999.00
          </p>
          <p className="text-black text-sm not-italic font-bold">₹3,449.00</p>
          <p className="text-green-500 text-sm not-italic font-medium">
            Save ₹299
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <button className="w-[24px] sm-3 bg-white text-gradient flex items-center justify-center rounded-sm">
            -
          </button>
          <p className="text-black text-sm not-italic font-semibold">01</p>
          <button className="w-[24px]  sm-3 bg-white text-gradient flex items-center justify-center rounded-sm">
            +
          </button>
        </div>
      </div>
      <button className="ml-auto">
        <TrashIcon />
      </button>
    </div>
  );
}
