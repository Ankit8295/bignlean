"use client";
import { CrossIcon } from "@/Icons";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";

export default function page() {
  return (
    <CustomPageWrapper heading="Comparison">
      <div className="flex flex-col gap-10">
        <ProductsHeader />
        <ComparisonTable />
      </div>
    </CustomPageWrapper>
  );
}

const ProductsHeader = () => {
  return (
    <div className="flex max-[500px]:gap-2">
      <div className="flex-1 max-[660px]:hidden"></div>
      <div className="flex-1 flex justify-center items-center">
        <ProductCard />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <ProductCard />
      </div>
    </div>
  );
};

const ProductCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative sm-1 rounded-lg bg-white p-[53px] w-[200px] max-[500px]:w-full mb-3 max-[500px]:p-[35px]">
        <img
          src="/assets/product.png"
          alt="product"
          className="w-[100px] max-[500px]:w-[80px] mx-auto"
        />
        <button className="absolute top-1 right-1">
          <CrossIcon />
        </button>
      </div>
      <h3 className="text-black text-center text-lg not-italic font-semibold mb-1 max-[500px]:text-sm">
        Muscletech NitroTech 100% Whey Gold Performance Series
      </h3>
      <p className="text-black text-base not-italic font-normal">
        2kg Cafe Mocha
      </p>
    </div>
  );
};

const ProductDetails = [
  "Protein",
  "BCAA",
  "Glutamic Acid",
  "Kcal",
  "Protein % per serving ",
  "Brand",
  "Size",
  "Ratings",
  "Veg/Non Veg",
  "Price",
];

const ProductOne = [
  "24g",
  "5.5g",
  "5g",
  "117",
  "79.0",
  "Muscletech",
  "2kg",
  "4.4",
  "veg",
  "₹3,449.00",
];
const ProductTwo = [
  "24g",
  "5.5g",
  "5g",
  "117",
  "79.0",
  "Muscletech",
  "2kg",
  "4.4",
  "veg",
  "₹3,449.00",
];

const ComparisonTable = () => {
  return (
    <div className="flex border-t-[2px] border-gray-300">
      <div className="flex-1 flex flex-col gap-[60px] py-[46px] border-r-[2px] border-b-[2px] border-gray-300 max-[660px]:hidden">
        {ProductDetails?.map((item, index) => (
          <p
            className="text-black text-xl not-italic font-semibold"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-[60px] items-center py-[46px] border-r-[2px] border-b-[2px] border-gray-300">
        {ProductOne?.map((item, index) => (
          <div
            className={` flex flex-col items-center ${
              index !== ProductOne.length - 1
                ? "text-black text-xl not-italic font-normal"
                : "text-center text-xl not-italic font-bold text-gradient"
            }`}
            key={index}
          >
            <p
              className="text-black text-xl not-italic font-semibold hidden max-[660px]:block max-[500px]:text-sm"
              key={index}
            >
              {ProductDetails[index]}
            </p>
            {item}
          </div>
        ))}
        <PrimaryButton label="Add to cart" />
      </div>
      <div className="flex-1 flex flex-col gap-[60px] items-center border-b-[2px] py-[46px] border-gray-300">
        {ProductTwo?.map((item, index) => (
          <div
            className={`flex flex-col items-center ${
              index !== ProductTwo.length - 1
                ? "text-black text-xl not-italic font-normal"
                : "text-center text-xl not-italic font-bold text-gradient"
            }`}
            key={index}
          >
            <p
              className="text-black text-xl not-italic font-semibold hidden max-[660px]:block max-[500px]:text-sm"
              key={index}
            >
              {ProductDetails[index]}
            </p>
            {item}
          </div>
        ))}
        <PrimaryButton label="Add to cart" />
      </div>
    </div>
  );
};
