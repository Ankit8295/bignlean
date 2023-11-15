import { OutlinedButton } from "..";
import ProductPhoto from "./ProductPhoto";
import ProductSlider from "./ProductSlider";

export default function ProductOverview() {
  return (
    <div className="flex gap-[30px] w-[500px]">
      <ProductSlider />
      <div className="flex-1 flex flex-col gap-[28px]">
        <ProductPhoto />
        <ProductBenefits />
        <OutlinedButton label="+ Compare" />
      </div>
    </div>
  );
}

const ProductBenefits = () => {
  return (
    <div className="border-[2px] border-gray-300 bg-white rounded-lg overflow-hidden">
      <div className="p-3 mb-[14px]">
        <h2 className="text-black text-sm not-italic font-bold mb-3">
          Product Benefits
        </h2>
        <div className="flex gap-2 items-center text-black text-sm not-italic font-normal">
          <div>
            <svg
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5L4.5 8.5L11.5 1"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          Helps in Muscle Building
        </div>
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
        className="bg-[#f7f7f7] p-[20px] gap-5"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-black text-xs not-italic font-normal">Protein</p>
          <p className="text-black text-lg not-italic font-semibold">24g</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-black text-xs not-italic font-normal">Protein</p>
          <p className="text-black text-lg not-italic font-semibold">24g</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-black text-xs not-italic font-normal">Protein</p>
          <p className="text-black text-lg not-italic font-semibold">24g</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-black text-xs not-italic font-normal">Protein</p>
          <p className="text-black text-lg not-italic font-semibold">24g</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-black text-xs not-italic font-normal">Protein</p>
          <p className="text-black text-lg not-italic font-semibold">24g</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-black text-xs not-italic font-normal">Protein</p>
          <p className="text-black text-lg not-italic font-semibold">24g</p>
        </div>
      </div>
    </div>
  );
};
