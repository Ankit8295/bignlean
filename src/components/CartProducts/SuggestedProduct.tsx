import SuggestedProductCard from "./SuggestedProductCard";

export default function SuggestedProduct() {
  return (
    <div className=" flex flex-col  rounded-2xl gap-6">
      <h2 className="text-black text-xl not-italic font-semibold">
        Suggested Products
      </h2>
      <div className="custom-grid4">
        <SuggestedProductCard className="rounded-lg bg-white sm-1 p-4" />
        <SuggestedProductCard className="rounded-lg bg-white sm-1 p-4" />
        <SuggestedProductCard className="rounded-lg bg-white sm-1 p-4" />
      </div>
    </div>
  );
}
