"use client";
import {
  AuthencityIcon,
  CertificateIcon,
  CouponIcon,
  FaqIcon,
  FlashSaleIcon,
  MyOrderIcon,
  ReferIcon,
  ReviewsIcon,
  WalletIcon,
} from "@/Icons";
import {
  useAppContext,
  useDispatchContext,
} from "@/provider/ContextProvider/ContextProvider";
import { logout } from "@/queries/Auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type ProfileOption = {
  link: string;
  label: string;
  icon: ReactNode;
};
const profileOptions: ProfileOption[] = [
  { icon: <MyOrderIcon />, label: "My Orders", link: "/track-order" },
  { icon: <CouponIcon />, label: "Coupons", link: "/" },
  { icon: <WalletIcon />, label: "Wallet", link: "/wallet" },
  { icon: <ReferIcon />, label: "Refer a Friend", link: "/refer-friend" },
  { icon: <FlashSaleIcon />, label: "Flash Sale", link: "/" },
  { icon: <ReviewsIcon />, label: "My Reviews", link: "/reviews" },
  { icon: <AuthencityIcon />, label: "Authenticity", link: "/authenticity" },
  { icon: <FaqIcon />, label: "FAQs", link: "/faq" },
  {
    icon: <CertificateIcon />,
    label: "Certificates",
    link: "/app-certificates",
  },
];

export default function Profile() {
  const [auth, setAuth] = useState<any>(null);
  const { profileToggle } = useAppContext();
  const dispatch = useDispatchContext();
  const router = useRouter();

  useEffect(() => {
    setAuth(JSON.parse(localStorage?.AUTH || "null"));
  }, []);

  return (
    <div className="relative">
      <div
        onClick={() =>
          dispatch({
            type: profileToggle ? "PROFILE_TOGGLE_OFF" : "PROFILE_TOGGLE_ON",
          })
        }
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-[38px] h-[38px] rounded-full ">
          <Image
            src={auth?.user?.image || "/assets/profile.jpg"}
            alt="avatar"
            width={38}
            height={38}
          />
        </div>
        <p className="text-sm not-italic font-semibold whitespace-nowrap">
          {auth?.user?.name || "User Name"}
        </p>
      </div>
      {profileToggle && (
        <div
          onMouseLeave={() => dispatch({ type: "PROFILE_TOGGLE_OFF" })}
          className="absolute w-[320px] sm-1 top-full right-0 bg-white rounded-xl p-4 translate-y-2 z-[10000000]"
        >
          <div
            onClick={() => router.push("/profile")}
            className="flex gap-4 items-center mb-5 cursor-pointer"
          >
            <Image
              src={auth?.user?.image || "/assets/profile.jpg"}
              alt="avatar"
              width={60}
              height={60}
              className=" rounded-full"
            />
            <div>
              <p className="text-gray-900 text-base not-italic font-semibold">
                {auth?.user?.name || "User Name"}
              </p>
              <p className="text-sm text-gray-900 opacity-70 not-italic font-normal">
                {auth?.user?.email || "User Email"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {profileOptions.map((option, index) => (
              <Link
                key={index}
                className="flex items-center gap-3"
                href={option.link}
              >
                <span>{option.icon}</span>
                {option.label}
              </Link>
            ))}
          </div>
          {auth && (
            <button
              onClick={logout}
              className="mt-8 ml-5 text-lg not-italic font-semibold text-gradient"
            >
              Logout
            </button>
          )}
          {!auth && (
            <button
              onClick={() => router.push("/login")}
              className="mt-8 ml-5 text-lg not-italic font-semibold text-gradient"
            >
              SignIn
            </button>
          )}
        </div>
      )}
    </div>
  );
}
