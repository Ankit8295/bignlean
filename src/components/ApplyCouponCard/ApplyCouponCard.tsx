"use client";
import InputField from "../FormComponents/InputField";

export default function ApplyCouponCard() {
  return (
    <div className="flex flex-col gap-4 sm-1 rounded-lg p-4 bg-white">
      <p className="text-black text-sm not-italic font-normal leading-4">
        Apply coupon code{" "}
      </p>
      <InputField
        onChange={(e) => (localStorage.couponCode = e.target.value)}
        type="text"
        placeholder="Enter Code"
        shadow={false}
      />
    </div>
  );
}
