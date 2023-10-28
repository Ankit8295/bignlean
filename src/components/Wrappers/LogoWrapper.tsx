import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function LogoWrapper({ children }: Props) {
  return (
    <div className="max-w-[550px] mx-auto flex flex-col items-center pt-[50px] mb-[60px] px-5">
      <Image
        src={"/assets/logo.png"}
        alt="logo"
        width={356}
        height={95}
        className="max-[550px]:w-[250px] max-[550px]:h-[60px]"
      />
      {children}
    </div>
  );
}
