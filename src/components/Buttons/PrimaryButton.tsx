type Props = {
  label: string;
  className?: string;
};

export default function PrimaryButton({ label, className }: Props) {
  return (
    <div
      className={`flex justify-center cursor-pointer items-start py-[15px] px-[43px] text-center text-base not-italic font-medium text-white rounded-[15px] linear-gradient-1 ${
        className || ""
      }`}
    >
      {label}
    </div>
  );
}
