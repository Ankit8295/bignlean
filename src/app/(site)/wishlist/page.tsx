import { ProductCard } from "@/components";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";

export default function page() {
  return (
    <CustomPageWrapper heading="Wishlist" showContentFooter={false}>
      <div className="flex gap-[30px] mb-[70px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </CustomPageWrapper>
  );
}
