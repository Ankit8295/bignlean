import Image from "next/image";

type Props = {
  src: string;
};

export default function BrandCard({ src }: Props) {
  return (
    <div className="h-[140px] flex items-center justify-center px-4 rounded-xl bg-gray-200 cursor-pointer">
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
