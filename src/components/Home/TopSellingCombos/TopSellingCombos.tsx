import { SectionHeader } from "@/components";
import Image from "next/image";

export default function TopSellingCombos() {
  return (
    <div className="w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full flex flex-col gap-[40px]">
      <SectionHeader label="Top Selling Combos" />
      <div className="flex items-center gap-6">
        <Image
          src={"/assets/budget/img1.png"}
          width={238}
          height={238}
          alt="offer"
        />
        <Image
          src={"/assets/budget/img2.png"}
          width={238}
          height={238}
          alt="offer"
        />
        <Image
          src={"/assets/budget/img3.png"}
          width={238}
          height={238}
          alt="offer"
        />
        <Image
          src={"/assets/budget/img2.png"}
          width={238}
          height={238}
          alt="offer"
        />
      </div>
    </div>
  );
}
