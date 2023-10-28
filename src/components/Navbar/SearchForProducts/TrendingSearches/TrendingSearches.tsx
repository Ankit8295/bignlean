import TrendingCard from "./TrendingCard";

type TrendingProduct = {
  label: string;
  src: string;
};

const trendingProducts: TrendingProduct[] = [
  {
    src: "/assets/product.png",
    label: `Muscletech NitroTech
100% Whey Gold
Performance Series`,
  },
  {
    src: "/assets/product.png",
    label: `Muscletech NitroTech
100% Whey Gold
Performance Series`,
  },
  {
    src: "/assets/product.png",
    label: `Muscletech NitroTech
100% Whey Gold
Performance Series`,
  },
];

export default function TrendingSearches() {
  return (
    <div>
      <h3 className="text-black text-lg not-italic font-semibold mb-4">
        Trending Searches
      </h3>
      <div className="flex gap-3">
        {trendingProducts?.map((item, index) => (
          <TrendingCard key={index} label={item.label} src={item.src} />
        ))}
      </div>
    </div>
  );
}
