"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  src: string;
  onClick?: () => void;
};

export default function BrandCard({ src, onClick }: Props) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/shop-by-brands")}
      className="h-[140px] flex items-center justify-center px-4 rounded-xl bg-gray-200 cursor-pointer"
    >
      <Image
        src={src}
        width={77}
        height={"100"}
        className=" h-auto"
        alt="product"
      />
    </div>
  );
}
