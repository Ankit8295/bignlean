import { EditIcon } from "@/Icons";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";

export default function page() {
  return (
    <CustomPageWrapper heading="Profile" className="relative">
      <button className="absolute top-[6%] right-0 text-sm not-italic font-medium text-gradient">
        Delete Profile
      </button>
      <div className="flex justify-center  mb-6">
        <label className="rounded-full border-[4px] border-red-500 relative">
          <img
            src={"/assets/profile.png"}
            className="rounded-full w-[160px] h-[160px]"
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
        <div className="flex gap-6 mb-6 max-[600px]:flex-col">
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
        <div className="flex gap-6 mb-6 max-[600px]:flex-col">
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
        <div className="flex gap-6 max-[600px]:flex-col">
          <InputField
            className="flex-1"
            type="date"
            placeholder="D.O.B"
            shadow={false}
          />
          <div className="flex-1"></div>
        </div>
        <div className="w-[300px] mx-auto mt-12 max-[600px]:w-full max-[600px]:mt-5">
          <PrimaryButton label="Edit Profile" />
        </div>
      </form>
    </CustomPageWrapper>
  );
}
