import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function LogoWrapper({ children }: Props) {
  return (
    <div className="max-w-[550px] mx-auto flex flex-col gap-5 items-center pt-[50px] mb-[60px] px-5">
      <Link href={"/"}>
        <Image
          src={"/assets/logo.png"}
          alt="logo"
          width={356}
          height={95}
          className="max-[550px]:w-[250px] max-[550px]:h-[60px] invert-[1]"
        />
      </Link>
      {children}
    </div>
  );
}
