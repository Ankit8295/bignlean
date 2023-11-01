import { EditIcon } from "@/Icons";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import Image from "next/image";

export default function page() {
  return (
    <CustomPageWrapper heading="Profile" className="relative">
      <button className="absolute top-[6%] right-0 text-sm not-italic font-medium text-gradient">
        Delete Profile
      </button>
      <div className="flex justify-center  mb-6">
        <label className="rounded-full border-[4px] border-red-500 relative">
          <Image
            src={"/assets/profile.png"}
            width={160}
            height={160}
            className="rounded-full"
            alt="profile"
          />
          <input type="file" className="hidden" />
          <div className="absolute bottom-1 right-1 cursor-pointer">
            <EditIcon />
          </div>
        </label>
      </div>
      <div className="text-center mb-[59px]">
        <h2 className="text-black text-center text-2xl not-italic font-semibold mb-2">
          Parvin Desai
        </h2>
        <p className="text-black text-center text-base not-italic font-normal">
          pravin.desai@gmail.com
        </p>
      </div>
      <form>
        <div className="flex gap-6 mb-6">
          <InputField
            className="flex-1"
            type="text"
            placeholder="Name"
            shadow={false}
          />
          <InputField
            className="flex-1"
            type="mobile"
            placeholder="Mobile no"
            shadow={false}
          />
        </div>
        <div className="flex gap-6 mb-6">
          <InputField
            className="flex-1"
            type="email"
            placeholder="Email"
            shadow={false}
          />
          <InputField
            className="flex-1"
            type="text"
            placeholder="Gender"
            shadow={false}
          />
        </div>
        <div className="flex gap-6">
          <InputField
            className="flex-1"
            type="date"
            placeholder="D.O.B"
            shadow={false}
          />
          <div className="flex-1"></div>
        </div>
        <div className="w-[300px] mx-auto mt-12">
          <PrimaryButton label="Edit Profile" />
        </div>
      </form>
    </CustomPageWrapper>
  );
}
