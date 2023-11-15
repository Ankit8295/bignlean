import { ReactNode } from "react";

type Props = {
  label: string;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
};

export default function PrimaryButton({
  label,
  className,
  icon,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center gap-2 cursor-pointer items-start py-[15px] px-[43px] text-center text-base not-italic font-medium text-white rounded-[15px] linear-gradient-1 ${
        className || ""
      }`}
    >
      {icon}
      {label}
    </div>
  );
}
