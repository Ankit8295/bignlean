import {
  FilterBy,
  HomeCarosoul,
  OutlinedButton,
  ProductCard,
} from "@/components";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";

export default function page() {
  return (
    <CustomPageWrapper heading="" className="w-[1400px]">
      <div className="flex gap-[27px]">
        <div className="flex-[0.25]">
          <FilterBy />
        </div>
        <div className="flex-[0.75] flex flex-col items-center gap-4">
          <HomeCarosoul className="!w-[1000px] " />
          <BrandInfo />
          <div className="h-[2px] bg-gray-300 w-full"></div>
          <div className="w-full flex items-center justify-between">
            <p className="text-black text-center text-2xl not-italic font-semibold">
              MuscleTech{" "}
              <span className="text-black text-lg not-italic font-normal">
                (35 Items)
              </span>
            </p>
            <div className="flex items-center gap-2 border rounded-lg p-2 border-gray-300">
              <p>Sort by :</p>
              <p>Popularity</p>
            </div>
          </div>
          <div className="w-full flex gap-2 items-center">
            <OutlinedButton label="All" className="!py-1 !p-2 " />
            <OutlinedButton label="Protein Powder" className="!py-1 !p-2" />
            <OutlinedButton label="Multivitamins" className="!py-1 !p-2" />
            <OutlinedButton
              label="Specialty Supplements "
              className="!py-1 !p-2"
            />
            <OutlinedButton label="Vitamins" className="!py-1 !p-2" />
            <OutlinedButton label="Minerals" className="!py-1 !p-2" />
            <OutlinedButton label="Antioxidants " className="!py-1 !p-2" />
          </div>
          <Products />
          <Pagination />
          <EndFooter />
        </div>
      </div>
    </CustomPageWrapper>
  );
}

const Pagination = () => {
  return (
    <div className="flex items-center gap-3 my-10">
      <PaginationButton label="<" />
      <PaginationButton label="1" />
      <PaginationButton label="2" />
      <PaginationButton label="3" active />
      <PaginationButton label=".." />
      <PaginationButton label="8" />
      <PaginationButton label="9" />
      <PaginationButton label="10" />
      <PaginationButton label=">" />
    </div>
  );
};
const PaginationButton = ({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) => {
  return (
    <div
      className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-xs not-italic font-semibold cursor-pointer border-[1px] ${
        active
          ? "border-red-500 text-white linear-gradient-1"
          : "border-red-500 text-gradient"
      }`}
    >
      {label}
    </div>
  );
};

const Products = () => {
  return (
    <div
      className="my-5"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "10px",
      }}
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

const EndFooter = () => {
  return (
    <div className="border-[2px] border-gray-300 p-4 rounded-lg flex flex-col gap-5">
      <p className="text-black text-base not-italic font-medium">
        As a leading brand in the science nutrition space, MuscleTech® has a
        rich history of partnering with top-ranked researchers to sponsor
        scientific research and novel discovery. We have always been interested
        in developing scientifically-backed products and working with top
        scientists to further our understanding of key ingredients that benefit
        countless athletes, fitness enthusiasts, and bodybuilders.
      </p>
      <p className="text-black text-base not-italic font-medium">
        Study: Burke DG, MacLean PG, Walker RA, Dewar PJ, Smith-Palmer T.
        Analysis of creatine and creatinine in urine by capillary
        electrophoresis. J Chromatogr B Biomed Sci Appl. 1999;732(2):479-85.
      </p>
      <p className="text-black text-base not-italic font-medium">
        Key Finding: Creatine is found in the urine of subjects ingesting
        creatine monohydrate as an ergogenic aid. Significant amount of creatine
        is excreted after ingestion. It can also be seen that with a higher
        dose, a larger absolute amount of creatine is retained, even though the
        fraction of the dose excreted is larger.
      </p>
    </div>
  );
};

const BrandInfo = () => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-black text-2xl not-italic font-bold leading-9 mb-2">
        MuscleTech
      </h2>
      <p className="text-black text-sm not-italic font-medium leading-5 mb-3">
        MuscleBlaze is one of the best selling brands in India. When it comes to
        healthy, top quality and reasonable supplements. From whey protein, mass
        gainers, BCAA's to raw whey protein, MuscleBlaze has everything to
        complement your fitness
      </p>
      <OutlinedButton label="Read More" />
    </div>
  );
};
