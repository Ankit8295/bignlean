import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function LogoWrapper({ children }: Props) {
  return (
    <div className="max-w-[550px] mx-auto flex flex-col items-center pt-[50px] mb-[60px]">
      <Image src={"/assets/logo.png"} alt="logo" width={356} height={95} />
      {children}
    </div>
  );
}
