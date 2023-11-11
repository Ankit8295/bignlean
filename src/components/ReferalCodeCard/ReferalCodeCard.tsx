import { CopyIcon } from "@/Icons";

export default function ReferalCodeCard() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-center text-xs not-italic font-bold text-gradient">
        YOUR REFERRAL CODE
      </p>
      <div className="flex px-[30px] py-4 rounded-lg border border-dashed border-red-500 gap-4 bg-[#FFEEEC] cursor-pointer">
        <p className="text-center text-xl not-italic font-semibold text-gradient">
          6sg8gh
        </p>
        <CopyIcon />
      </div>
      <p className="text-blue-900 text-center text-base not-italic font-medium">
        Tap to copy
      </p>
    </div>
  );
}
