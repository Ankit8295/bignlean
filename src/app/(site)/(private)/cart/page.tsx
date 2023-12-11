"use client";
import { CoinSmIcon, Info2Icon } from "@/Icons";
import { CartProducts, SuggestedProduct } from "@/components";
import ApplyCouponCard from "@/components/ApplyCouponCard/ApplyCouponCard";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import ShippingCard from "@/components/ShippingCard/ShippingCard";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { useGetCartList } from "@/queries/Cart";
import { usePlaceOrder } from "@/queries/Order";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const { data: cartList } = useGetCartList();
  const { mutate: placeAnOrder, isSuccess } = usePlaceOrder();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push("/track-order");
    }
  }, [isSuccess]);

  return (
    <CustomPageWrapper heading="Cart">
      {cartList?.data?.cartItems?.length > 0 ? (
        <>
          <SavingBanner />
          <div className="flex gap-[22px] mt-6 max-[800px]:flex-col">
            <div className="flex-[0.6] flex flex-col gap-[150px] max-[800px]:gap-[40px]">
              <CartProducts />
              <SuggestedProduct />
            </div>
            <div className="flex-[0.4] flex flex-col gap-4">
              <SpareCashCard />
              <ApplyCouponCard />
              <OrderCard />
              <UseCashCard />
              <PrimaryButton
                onClick={() => placeAnOrder()}
                label="Place a Order"
                className="text-white text-sm not-italic font-medium leading-4 rounded-2xl py-[20px]"
              />
              <div className="mt-[66px]">
                <ShippingCard />
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center font-medium text-lg">Add items in the cart</p>
      )}
    </CustomPageWrapper>
  );
}

const SavingBanner = () => {
  return (
    <p className="bg-green-500 w-full text-center text-white text-xs py-3 not-italic font-medium">
      You are saving{" "}
      <span className="text-white text-xs not-italic font-semibold ">₹449</span>{" "}
      on this purchase
    </p>
  );
};

const SpareCashCard = () => {
  return (
    <div className="flex gap-3 sm-1 items-center rounded-lg bg-white p-3 px-4">
      <input type="checkbox" className="w-[18px] h-[18px]" />
      <p>Use 22 Bignlean cash for this order</p>
    </div>
  );
};

const UseCashCard = () => {
  return (
    <div className="sm-1 p-3 flex items-center justify-between rounded-lg bg-white">
      <div className="flex items-center gap-2">
        <p className="text-black text-sm not-italic font-normal">You earn</p>
        <CoinSmIcon />
        <p className="text-black text-sm not-italic font-normal">
          22 Bignlean cash on this order
        </p>
      </div>
      <button>
        <Info2Icon />
      </button>
    </div>
  );
};

const OrderCard = () => {
  return (
    <div className="bg-white rounded-lg p-6 w-full sm-1">
      <h2 className="text-black text-base not-italic font-semibold leading-4 mb-[22px]">
        Order Detail{" "}
        <span className="text-black text-base not-italic font-normal leading-4">
          (3 items)
        </span>
      </h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-black text-sm not-italic font-normal leading-4">
            Cart Total
          </p>
          <p className="text-black text-right text-sm not-italic font-medium">
            ₹8,597
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black text-sm not-italic font-normal leading-4">
            Coupon Savings
          </p>
          <p className="text-black text-right text-sm not-italic font-medium">
            ₹00.00
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black text-sm not-italic font-normal leading-4">
            Shipping Charges
          </p>
          <p className="text-black text-right text-sm not-italic font-medium">
            Free
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black text-sm not-italic font-normal leading-4">
            Loyalty Savings
          </p>
          <p className="text-right text-sm not-italic font-medium text-green-500">
            -₹57
          </p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-black text-sm not-italic font-normal leading-4">
            Total Discount
          </p>
          <button>
            <Info2Icon />
          </button>
          <p className="ml-auto  text-right text-sm not-italic font-medium text-green-500">
            -₹57
          </p>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="flex items-center justify-between">
          <p className="text-black text-base not-italic font-semibold leading-4">
            Amount Payable
          </p>
          <p className="text-black text-right text-base not-italic font-semibold">
            ₹7,347
          </p>
        </div>
      </div>
    </div>
  );
};
