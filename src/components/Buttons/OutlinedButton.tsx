import { ReactNode } from "react";

type Props = {
  label: string;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
};
export default function OutlinedButton({
  label,
  className,
  icon,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center border gap-2 border-red-500 cursor-pointer items-start py-[15px] px-[43px] text-center text-base not-italic font-medium text-gradient rounded-[15px] ${
        className || ""
      }`}
    >
      {icon}
      {label}
    </div>
  );
}
