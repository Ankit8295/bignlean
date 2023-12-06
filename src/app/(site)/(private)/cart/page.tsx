"use client";
import { CoinSmIcon, Info2Icon } from "@/Icons";
import { CartProducts, SuggestedProduct } from "@/components";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { useGetCartList } from "@/queries/Cart";

export default function page() {
  const { data: cartList } = useGetCartList();
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
                label="Proceed to Checkout"
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

const ApplyCouponCard = () => {
  return (
    <div className="flex flex-col gap-4 sm-1 rounded-lg p-4 bg-white">
      <p className="text-black text-sm not-italic font-normal leading-4">
        Apply coupon code{" "}
      </p>
      <InputField type="text" placeholder="Enter Code" shadow={false} />
    </div>
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

const ShippingCard = () => {
  return (
    <div className="bg-white rounded-lg sm-1 p-4 flex flex-col gap-3">
      <p className="text-black text-base not-italic font-semibold leading-4 mb-5">
        Shipping to
      </p>
      <div className="flex flex-col gap-3">
        <AddressCard />
        <AddressCard />
      </div>
      <PrimaryButton label="+ Add Address" />
    </div>
  );
};

const AddressCard = () => {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white sm-3 p-2 px-3">
      <input type="radio" className="scale-150" />
      <div>
        <p className="text-black text-sm not-italic font-semibold leading-4 mb-2">
          Home
        </p>
        <p className="text-black text-xs not-italic font-normal leading-4 opacity-75">
          2nd Floor Room no 8, Sai niwas C.H.S Near T.M.C Office, Majiwada,
          Thane W
        </p>
      </div>
      <button className="ml-auto">
        <svg
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5643 2.75781C12.2414 2.08073 13.3391 2.08073 14.0162 2.75781L15.2422 3.98378C15.9193 4.66087 15.9193 5.75864 15.2422 6.43572L14.1552 7.52271C14.0699 7.48045 13.9801 7.43476 13.887 7.38575C13.2604 7.05589 12.5169 6.59293 11.962 6.03802C11.4071 5.48312 10.9441 4.73959 10.6143 4.11302C10.5653 4.01992 10.5196 3.93013 10.4773 3.84479L11.5643 2.75781ZM11.1665 6.83352C11.8232 7.49015 12.6582 8.00696 13.3196 8.35831L9.04503 12.6329C8.77977 12.8981 8.43562 13.0702 8.06425 13.1233L5.48972 13.4911C4.9176 13.5728 4.42721 13.0824 4.50894 12.5103L4.87673 9.93575C4.92979 9.56438 5.10186 9.22023 5.36712 8.95497L9.6417 4.68039C9.99305 5.34176 10.5099 6.17686 11.1665 6.83352ZM2.8125 14.625C2.50184 14.625 2.25 14.8768 2.25 15.1875C2.25 15.4982 2.50184 15.75 2.8125 15.75H15.1875C15.4982 15.75 15.75 15.4982 15.75 15.1875C15.75 14.8768 15.4982 14.625 15.1875 14.625H2.8125Z"
            fill="#28303F"
          />
        </svg>
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
