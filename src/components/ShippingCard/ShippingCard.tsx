import { useGetAllAddresses } from "@/queries/Address";
import PrimaryButton from "../Buttons/PrimaryButton";
import AddressCard from "./AddressCard";
import { useRouter } from "next/navigation";

export default function ShippingCard() {
  const { data } = useGetAllAddresses();
  const router = useRouter();
  return (
    <div className="bg-white rounded-lg sm-1 p-4 flex flex-col gap-3">
      <p className="text-black text-base not-italic font-semibold leading-4 mb-5">
        Shipping to
      </p>
      <div className="flex flex-col gap-3">
        {data?.data?.addresses?.length > 0 &&
          data?.data?.addresses?.map((address: any) => (
            <AddressCard key={address?.id} address={address} />
          ))}
      </div>
      <PrimaryButton
        onClick={() => router.push("/add-address")}
        label="+ Add Address"
      />
    </div>
  );
}
