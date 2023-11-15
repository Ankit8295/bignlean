import Link from "next/link";
import ProfileImages from "../Navbar/Profile/ProfileImages";
import DownloadApp from "./DownloadApp";
import FollowUs from "./FollowUs";
import Subscribe from "./Subscribe";

type SiteLinks = {
  heading: string;
  links: {
    label: string;
    link: string;
  }[];
}[];

const siteLinks: SiteLinks = [
  {
    heading: "BignLean",
    links: [
      { label: "About us", link: "/aboutus" },
      { label: "Contact us", link: "/contact-us" },
      { label: "Refer & Earn", link: "/refer-friend" },
      { label: "Authenticity Guaranteed", link: "/authenticity" },
    ],
  },
  {
    heading: "Brand",
    links: [
      { label: "Muscleblaze", link: "/shop-by-brands" },
      { label: "Fit Foods", link: "/shop-by-brands" },
      { label: "BL Vitals", link: "/shop-by-brands" },
      { label: "Gritzo", link: "/shop-by-brands" },
      { label: "bGreen", link: "/shop-by-brands" },
    ],
  },
  {
    heading: "Health & Fitness",
    links: [
      { label: "Sports Nutrition", link: "/shop-by-brands" },
      { label: "VItamins & Supplements", link: "/shop-by-brands" },
      { label: "Ayurveda & Herbs", link: "/shop-by-brands" },
      { label: "Health Food & Drinks", link: "/shop-by-brands" },
      { label: "Fitness", link: "/shop-by-brands" },
    ],
  },
  {
    heading: "Useful Links",
    links: [
      { label: "Returns and Refunds", link: "/privacy-policy" },
      { label: "Terms and Conditions", link: "/terms-and-conditions" },
      { label: "Privacy Policy", link: "/privacy-policy" },
      { label: "Track your Shipment", link: "/track-order" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="bg-black mt-auto py-[68px] px-5 max-[1060px]:hidden">
      <div className="flex max-w-[1300px] gap-10 mx-auto mb-12">
        <div className="flex-[0.75]">
          <div className="flex gap-10 mb-10">
            {siteLinks.map((link) => (
              <div key={link.heading} className="flex-1 flex flex-col gap-2">
                <h3 className="text-lg not-italic font-semibold leading-6 text-gradient">
                  {link.heading}
                </h3>
                {link.links.map((item) => (
                  <Link
                    key={item.label}
                    className="text-white text-base not-italic font-normal leading-6"
                    href={item.link}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="flex gap-10">
            <div className="flex-[0.5]">
              <h3 className="text-lg not-italic font-semibold leading-6 text-gradient">
                Store Address
              </h3>
              <p className="text-white text-sm not-italic font-normal leading-5">
                Bignlean Store, Ground Floor, E-Wing, Shop no.16 & 17, Lodha
                Freshia Building, Kalyan Shil Road, Lodha Heaven, Nilje,
                Dombivali East, Thane, Mumbai 421204
              </p>
            </div>
            <div className="flex-[0.25]">
              <h3 className="text-lg not-italic font-semibold leading-6 text-gradient">
                Email
              </h3>
              <Link
                href={"mailto:support@bignlean.com"}
                className="text-white text-sm not-italic font-normal leading-5"
              >
                support@bignlean.com
              </Link>
            </div>
            <div className="flex-[0.25]">
              <h3 className="text-lg not-italic font-semibold leading-6 text-gradient">
                Toll Free
              </h3>
              <Link
                href={"tel:18002661313"}
                className="text-white text-sm not-italic font-normal leading-5"
              >
                1800 266 1313
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-[0.25] flex flex-col gap-4">
          <Subscribe />
          <FollowUs />
          <DownloadApp />
        </div>
      </div>
      <ProfileImages />
      <div className="h-[2px] mt-[30px] bg-gray-400 max-w-[1300px] mx-auto"></div>
      <div className="max-w-[1300px] mx-auto pt-[30px]">
        <p className="text-gray-600  text-xs not-italic font-normal leading-4">
          Copyright Protected 2017-{new Date().getFullYear()} © Bignlean.com.
          All Rights Reserved. Powered by DIgilligence
        </p>
      </div>
    </div>
  );
}
