import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";

export default function AddAddressForm() {
  return (
    <form className="flex flex-col gap-[24px]">
      <InputField
        type="text"
        placeholder="Search for Area/Locality"
        shadow={false}
      />
      <InputField
        type="text"
        placeholder="Flat No / Building / Street Name"
        shadow={false}
      />
      <InputField type="text" placeholder="Landmark" shadow={false} />
      <InputField type="text" placeholder="City" shadow={false} />
      <InputField type="mobile" placeholder="Mobile Number" shadow={false} />
      <InputField type="email" placeholder="Enter Email" shadow={false} />
      <InputField type="text" placeholder="Full Name" shadow={false} />
      <PrimaryButton label="Save & Proceed" />
    </form>
  );
}
