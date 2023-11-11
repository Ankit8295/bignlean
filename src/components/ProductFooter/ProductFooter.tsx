"use client";

import {
  useAppContext,
  useDispatchContext,
} from "@/provider/ContextProvider/ContextProvider";
import OverviewCard from "./OverviewCard";
import DetailCard from "./DetailCard";
import ProductCertificate from "./ProductCertificate";
import ReviewCard from "./ReviewCard";

export default function ProductFooter() {
  const { activeProductTab } = useAppContext();
  return (
    <div className="flex flex-col gap-10">
      <ProductTab />
      {activeProductTab === "Overview" && <OverviewCard />}
      {activeProductTab === "Details" && <DetailCard />}
      {activeProductTab === "Certificate" && <ProductCertificate />}
      {activeProductTab === "Reviews" && <ReviewCard />}
    </div>
  );
}

const tabs = ["Overview", "Details", "Certificate", "Reviews"];

const ProductTab = () => {
  const { activeProductTab } = useAppContext();
  const dispatch = useDispatchContext();
  return (
    <div className="flex  rounded-lg p-2 items-center w-[700px] justify-between bg-gray-200">
      {tabs?.map((tab) => (
        <button
          key={tab}
          onClick={() => dispatch({ type: "ACTIVE_PRODUCT_TAB", payload: tab })}
          className={`${
            activeProductTab === tab ? " bg-white rounded-lg " : ""
          } p-2 flex-1`}
        >
          <p className={activeProductTab === tab ? "text-gradient" : ""}>
            {tab}
          </p>
        </button>
      ))}
    </div>
  );
};
