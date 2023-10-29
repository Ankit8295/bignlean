import {
  BestSeller,
  BudgetComboZone,
  BuyOfferCategory,
  DownloadBanner,
  ExtraOffFreebies,
  FitFoodRange,
  HomeCarosoul,
  OfferCard,
  PicOfTheDay,
  PopularProducts,
  PriceSaleAlert,
  Quotes,
  RecentlyViewed,
  SearchLocation,
  ShopByBrands,
  ShopByCategory,
  TopSellingCombos,
} from "@/components";

export default function Home() {
  return (
    <div>
      <SearchLocation />
      <HomeCarosoul />
      <PriceSaleAlert />
      <ShopByBrands />
      <ShopByCategory />
      <PopularProducts />
      <BuyOfferCategory />
      <OfferCard />
      <TopSellingCombos />
      <PicOfTheDay />
      <Quotes
        authorName="Michael John Bobak"
        quote="“All progress takes place outside the comfort zone.”"
      />
      <OfferCard />
      <RecentlyViewed />
      <BestSeller />
      <ExtraOffFreebies />
      <Quotes
        authorName="Arnold Schwarzenegger"
        quote="“There are no shortcuts. Everything is reps, reps, reps.”"
      />
      <FitFoodRange />
      <BudgetComboZone />
      <OfferCard />
      <DownloadBanner />
    </div>
  );
}
