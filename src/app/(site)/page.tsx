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
  ProductSection,
  Quotes,
  RecentlyViewed,
  SearchLocation,
  ShopByBrands,
  ShopByCategory,
  TopSellingCombos,
} from "@/components";
import SearchForProducts from "@/components/Navbar/SearchForProducts/SearchForProducts";
import { ApiPaths } from "@/constants";
const base_url = process.env.BASE_URL;

async function getAllBrands() {
  const res = await fetch(base_url + ApiPaths.BRANDS);
  const data = await res.json();
  return data?.brands;
}

async function getAllBanners() {
  const res = await fetch(base_url + ApiPaths.BANNERS);
  const data = await res.json();
  return data?.banner;
}

async function getAllCategories() {
  const res = await fetch(base_url + ApiPaths.CATEGORIES);
  const data = await res.json();
  return data?.categories;
}

async function getAllHomeProducts() {
  const res = await fetch(base_url + ApiPaths.HOME);
  const data = await res.json();
  return data?.data;
}

export default async function Home() {
  const brandsData = await getAllBrands();
  const bannersData = await getAllBanners();
  const categoriesData = await getAllCategories();
  const homeProducts = await getAllHomeProducts();

  return (
    <div>
      <SearchLocation />
      <div className="hidden  justify-center max-[750px]:flex mb-4 max-[500px]:px-5">
        <SearchForProducts />
      </div>
      <HomeCarosoul bannersData={bannersData} />
      <div className="max-[800px]:hidden">
        <ShopByBrands brandsData={brandsData} />
      </div>
      <div className="max-[800px]:hidden">
        <ShopByCategory categoriesData={categoriesData} />
      </div>
      {homeProducts.map((item: any, index: number) => (
        <ProductSection
          key={index}
          products={item?.products}
          sectionName={item?.name}
        />
      ))}

      <TopSellingCombos />
      <Quotes
        authorName="Michael John Bobak"
        quote="“All progress takes place outside the comfort zone.”"
      />
      <OfferCard />
      <Quotes
        authorName="Arnold Schwarzenegger"
        quote="“There are no shortcuts. Everything is reps, reps, reps.”"
      />
      <BudgetComboZone />
      <OfferCard />
      <div className="max-[1100px]:hidden">
        <DownloadBanner />
      </div>
    </div>
  );
}
