const overviewData = [
  {
    substance: "Protien",
    amount: "24g",
  },
  {
    substance: "BCAA",
    amount: "24g",
  },
  {
    substance: "EAA",
    amount: "24g",
  },
  {
    substance: "Glutamic acid",
    amount: "24g",
  },
  {
    substance: "Kcal",
    amount: "24g",
  },
  {
    substance: "Gluten free ",
    amount: "Added gluten",
  },
  {
    substance: "Carbs",
    amount: "24g",
  },
];
export default function OverviewCard() {
  return (
    <div className="w-[650px] max-[650px]:w-full">
      <h2 className="text-black text-base not-italic font-bold mb-3">
        Overview
      </h2>
      <div className="border-[1px] p-4 rounded-lg border-gray-300">
        <div className="flex justify-end items-center mb-3">
          <p className="text-black text-xs not-italic font-semibold">
            Per 30.4 g of 74 servings contains*
          </p>
        </div>
        <div className="w-full h-[2px] bg-gray-300 mb-6"></div>
        <div className="flex flex-col gap-3">
          {overviewData?.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <p className="text-black text-base not-italic font-semibold">
                {item?.substance}
              </p>
              <p className="text-black text-sm not-italic font-normal">
                {item?.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
