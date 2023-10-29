import { ReactNode } from "react";
type Props = {
  image: ReactNode;
  label: string;
  subLabel?: string;
};
export default function ShopCategoryCard({ image, label, subLabel }: Props) {
  return (
    <div className="flex flex-col items-center h-[170px] rounded-xl bg-gray-200 pt-5">
      <p className="text-black text-center text-lg not-italic font-bold">
        {label}
      </p>
      {subLabel && (
        <p className="text-black not-italic font-normal text-[10px] tracking-[6px]">
          {subLabel}
        </p>
      )}
      <div className="mt-auto">{image}</div>
    </div>
  );
}
