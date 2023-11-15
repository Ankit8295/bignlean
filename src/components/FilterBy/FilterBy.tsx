import CustomFilter from "./CustomFilter";
import RelatedProduct from "./RelatedProduct";

export default function FilterBy() {
  return (
    <div className="max-[1000px]:hidden">
      <h2 className="mb-5">Filter By</h2>
      <div className="flex flex-col gap-3 max-[1400px]:flex-row max-[1400px]:flex-wrap">
        <CustomFilter filterOptions={["Bestseller"]} />
        <CustomFilter
          search={true}
          heading="By Brand"
          filterOptions={[
            "Muscletech",
            "My Protein",
            "PhD",
            "Muscleblaze",
            "Alpino",
          ]}
        />
        <CustomFilter
          heading="Discount"
          filterOptions={["20% and above", "40% and above", "40% and above"]}
        />
        <CustomFilter
          heading="Ratings"
          filterOptions={[
            "4 Ratings & above",
            "3 Ratings & above",
            "2 Ratings & above",
            "1 Ratings & above",
          ]}
        />
        <CustomFilter
          heading="Price"
          filterOptions={[
            "200 & above",
            "201 - 600",
            "601 - 1,000",
            "1,001 - 1,500",
          ]}
        />
        <CustomFilter filterOptions={["Exclude out of stoock"]} />
        <RelatedProduct />
      </div>
    </div>
  );
}
