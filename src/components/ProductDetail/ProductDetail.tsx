import ProductCouponOffers from "./ProductCouponOffers";
import ProductDelivery from "./ProductDelivery";
import ProductInfo from "./ProductInfo";
import ProductVarient from "./ProductVarient";

export default function ProductDetail() {
  return (
    <div className="flex flex-col gap-[32px]">
      <ProductInfo />
      <ProductVarient />
      <ProductDelivery />
      <ProductCouponOffers />
    </div>
  );
}
