"use client";
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
import SearchForProducts from "@/components/Navbar/SearchForProducts/SearchForProducts";

export default function Home() {
  return (
    <div>
      <SearchLocation />
      <div className="hidden  justify-center max-[750px]:flex mb-4 max-[500px]:px-5">
        <SearchForProducts />
      </div>
      <HomeCarosoul />
      <PriceSaleAlert />
      <div className="max-[800px]:hidden">
        <ShopByBrands />
      </div>
      <div className="max-[600px]:hidden">
        <ShopByCategory />
      </div>
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
      <div className="max-[1100px]:hidden">
        <DownloadBanner />
      </div>
    </div>
  );
}
