import { OutlinedButton } from "..";

export default function ProductCouponOffers() {
  return (
    <div className="w-[70%] flex flex-col gap-4 max-[450px]:w-full">
      <h2 className="text-black text-lg not-italic font-semibold mb-4">
        Coupons & offers
      </h2>
      <CouponCard
        src="/assets/product/offer1.png"
        label="Enjoy an additional 5% off
On your 1st order from app!"
        buttonLabel="Copy Code"
      />
      <CouponCard
        src="/assets/product/offer1.png"
        label="Get MuscleBlaze Fish oil 30 Tabs @ Rs.299"
      />
      <CouponCard
        src="/assets/product/offer2.png"
        label="Get MuscleBlaze Fish oil 30 Tabs @ Rs.299"
      />
    </div>
  );
}

const CouponCard = ({
  label,
  src,
  buttonLabel,
}: {
  src: string;
  label: string;
  buttonLabel?: string;
}) => {
  return (
    <div className="flex items-center gap-3 p-4 border-red-400 border-dashed border-[2px] rounded-xl">
      <img src={src} alt="coupon" className="w-[28px]" />
      <p className="text-black text-sm not-italic font-normal leading-4">
        {label}
      </p>
      {buttonLabel && (
        <OutlinedButton
          label={buttonLabel}
          className="!px-2 !py-1 whitespace-nowrap text-xs not-italic font-normal leading-4 !text-black"
        />
      )}
    </div>
  );
};
