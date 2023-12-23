import ProductBottomSheet from "./ProductBottomSheet";
import ProductCouponOffers from "./ProductCouponOffers";
import ProductDelivery from "./ProductDelivery";
import ProductInfo from "./ProductInfo";
import ProductVarient from "./ProductVarient";

export default function ProductDetail({ product }: { product: any }) {
  return (
    <div className="flex flex-col gap-[32px]">
      <ProductInfo product={product} />
      <ProductVarient product={product} />
      <ProductDelivery />
      <ProductCouponOffers />
      <ProductBottomSheet />
    </div>
  );
}
