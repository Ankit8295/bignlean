import { TrashIcon } from "@/Icons";
import {
  useGetProductDetail,
  useRemoveFromCart,
  useUpdateQuantityFromCart,
} from "@/queries/Cart";

export default function CartProductCard({
  className,
  productDetail,
}: {
  className?: string;
  productDetail: any;
}) {
  const { mutate: removeFromCart } = useRemoveFromCart();
  const { data } = useGetProductDetail(productDetail?.product?.id);
  const { mutate: updateQuantityFromCart } = useUpdateQuantityFromCart();
  return (
    <div className={`flex items-start gap-8 max-[500px]:gap-4 ${className}`}>
      <img
        src={data?.data?.result?.images[0]}
        alt="product"
        className="w-[56px] max-[500px]:w-[36px]"
      />
      <div>
        <p className="text-black text-base not-italic font-medium max-[500px]:text-sm">
          {data?.data?.result?.name}
        </p>
        <p className="text-black text-xs not-italic font-normal opacity-40">
          {data?.data?.result?.weight} - Unflavoured
        </p>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <p className="text-black text-xs not-italic font-normal line-through opacity-40">
            ${data?.data?.result?.premiumPrice}
          </p>
          <p className="text-black text-sm not-italic font-bold">
            ${data?.data?.result?.sellingPrice}
          </p>
          <p className="text-green-500 text-sm not-italic font-medium">
            Save $
            {data?.data?.result?.premiumPrice -
              data?.data?.result?.sellingPrice}
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <button
            onClick={() =>
              updateQuantityFromCart({
                productId: productDetail?.id,
                qty: productDetail?.qty - 1,
              })
            }
            className="w-[24px] sm-3 bg-white text-gradient flex items-center justify-center rounded-sm"
          >
            -
          </button>
          <p className="text-black text-sm not-italic font-semibold">
            {productDetail?.qty}
          </p>
          <button
            onClick={() =>
              updateQuantityFromCart({
                productId: productDetail?.id,
                qty: productDetail?.qty + 1,
              })
            }
            className="w-[24px]  sm-3 bg-white text-gradient flex items-center justify-center rounded-sm"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(productDetail?.id)}
        className="ml-auto"
      >
        <TrashIcon />
      </button>
    </div>
  );
}
