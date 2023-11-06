import { CoinSmIcon, EditIcon, Info2Icon } from "@/Icons";
import { CartProducts, SuggestedProduct } from "@/components";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";

export default function page() {
  return (
    <CustomPageWrapper heading="Cart">
      <SavingBanner />
      <div className="flex gap-[22px] mt-6">
        <div className="flex-[0.6] flex flex-col gap-[150px]">
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
      <EditIcon />
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
