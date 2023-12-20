"use client";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";
import {
  useAddAddress,
  useGetAllAddresses,
  useUpdateAddress,
} from "@/queries/Address";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AddAddressForm({ addressId }: { addressId?: string }) {
  const router = useRouter();
  const [userId, setUserId] = useState<any>(null);
  const { mutate: addAddress } = useAddAddress();
  const { mutate: updateAddress } = useUpdateAddress();
  const [formData, setFormData] = useState<any>({
    name: "",
    phone: "",
    pincode: "",
    landmark: "",
    city: "",
    flat: "",
    state: "",
    type: "",
  });
  const { data } = useGetAllAddresses(userId?.user?.id);

  useEffect(() => {
    setUserId(JSON.parse(localStorage?.AUTH || "null"));
  }, []);

  useEffect(() => {
    if (addressId) {
      const address = data?.data.addresses?.find(
        (address: any) => address?.id === Number(addressId)
      );
      setFormData({
        name: address?.name,
        phone: address?.phone,
        pincode: address?.pincode,
        landmark: address?.landmark,
        city: address?.city,
        flat: address?.flat,
        state: address?.state,
        type: address?.type,
      });
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      !formData?.name &&
      !formData?.phone &&
      !formData?.pincode &&
      !formData?.landmark &&
      !formData?.city &&
      !formData?.flat &&
      !formData?.state &&
      !formData?.type
    ) {
      return;
    }
    if (addressId) {
      updateAddress(
        { addressId, formData },
        {
          onSuccess: () => {
            router.push("/cart");
          },
        }
      );
    } else {
      addAddress(
        { formData, userId },
        {
          onSuccess: () => {
            router.push("/cart");
          },
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
      <InputField
        type="text"
        placeholder="Pincode"
        shadow={false}
        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
        value={formData?.pincode}
      />
      <InputField
        type="text"
        placeholder="Flat No / Building / Street Name"
        shadow={false}
        onChange={(e) => setFormData({ ...formData, flat: e.target.value })}
        value={formData?.flat}
      />
      <InputField
        type="text"
        placeholder="Landmark"
        shadow={false}
        onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
        value={formData?.landmark}
      />
      <InputField
        type="text"
        placeholder="City"
        shadow={false}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        value={formData?.city}
      />
      <InputField
        type="mobile"
        placeholder="Mobile Number"
        shadow={false}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        value={formData?.phone}
      />
      <InputField
        type="text"
        placeholder="Type"
        shadow={false}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        value={formData?.type}
      />
      <InputField
        type="text"
        placeholder="Full Name"
        shadow={false}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        value={formData?.name}
      />
      <PrimaryButton label="Save & Proceed" />
    </form>
  );
}
