"use client";
import { useRouter } from "next/navigation";
type Props = {
  image: string;
  label: string;
};
export default function ShopCategoryCard({ image, label }: Props) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/shop-by-brands")}
      className="flex flex-col items-center rounded-xl bg-gray-200 pt-5 cursor-pointer"
    >
      <p className="text-black text-center text-lg not-italic font-bold">
        {label?.split(" ")[0]}
      </p>
      <p className="text-black not-italic font-normal mb-2 text-[10px] tracking-[6px]">
        {label?.split(" ").slice(1).join(" ")}
      </p>
      <div className="mt-auto">
        <img src={image} alt="category" className="w-[120px]" />
      </div>
    </div>
  );
}
