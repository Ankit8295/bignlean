import Link from "next/link";

export default function SecondaryNavbar() {
  return (
    <div className="flex items-center justify-center max-[850px]:hidden mb-5">
      <div className="flex items-center gap-6">
        <Link
          href={"/shop-by-brands"}
          className="flex items-center gap-2 border border-gray-200 p-2 rounded-lg"
        >
          <CategoryIcon />
          <p className="text-gray-600 not-italic font-medium">
            Shop By Category
          </p>
        </Link>
        <Link href={"/shop-by-brands"} className="flex items-center gap-2">
          <BrandIcon />
          <p className="text-gray-600 not-italic font-medium">Brands</p>
        </Link>
        <Link href={"/"} className="flex items-center gap-2">
          <OfferIcon />
          <p className="text-gray-600 not-italic font-medium">Offer Zone</p>
        </Link>
        <Link href={"/blogs"} className="flex items-center gap-2">
          <BlogsIcon />
          <p className="text-gray-600 not-italic font-medium">Blogs</p>
        </Link>
        <Link href={"/contact-us"} className="flex items-center gap-2">
          <DocumentIcon />
          <p className="text-gray-600 not-italic font-medium">
            Customer Support
          </p>
        </Link>
      </div>
    </div>
  );
}

const DocumentIcon = () => {
  return (
    <svg
      width={17}
      height={18}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.6 0C1.61178 0 0 1.61177 0 3.6V14.4C0 16.3882 1.61178 18 3.6 18H12.6C14.5882 18 16.2 16.3882 16.2 14.4V5.09117C16.2 4.13639 15.8207 3.22072 15.1456 2.54559L13.6544 1.05442C12.9793 0.379285 12.0636 0 11.1088 0H3.6ZM4.5 3.825C4.12721 3.825 3.825 4.12721 3.825 4.5C3.825 4.87279 4.12721 5.175 4.5 5.175H11.7C12.0728 5.175 12.375 4.87279 12.375 4.5C12.375 4.12721 12.0728 3.825 11.7 3.825H4.5ZM3.825 9C3.825 8.62721 4.12721 8.325 4.5 8.325H11.7C12.0728 8.325 12.375 8.62721 12.375 9C12.375 9.37279 12.0728 9.675 11.7 9.675H4.5C4.12721 9.675 3.825 9.37279 3.825 9ZM4.5 12.825C4.12721 12.825 3.825 13.1272 3.825 13.5C3.825 13.8728 4.12721 14.175 4.5 14.175H8.1C8.47279 14.175 8.775 13.8728 8.775 13.5C8.775 13.1272 8.47279 12.825 8.1 12.825H4.5Z"
        fill="#77777E"
      />
    </svg>
  );
};

const BlogsIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 8.05263V17.5263C18 17.7158 17.8863 17.8958 17.7063 17.9621C17.6495 17.9905 17.5832 18 17.5263 18C17.4032 18 17.28 17.9527 17.1853 17.858L15.4705 16.1053H7.10526C5.27684 16.1053 3.78947 14.6179 3.78947 12.7895H10.8947C13.5095 12.7895 15.6316 10.6674 15.6316 8.05263V4.87885C16.9958 5.28622 18 6.55579 18 8.05263ZM14.2105 8.05263V3.31579C14.2105 1.48737 12.7232 0 10.8947 0H3.31579C1.48737 0 0 1.48737 0 3.31579V12.7895C0 12.9789 0.113682 13.1589 0.293682 13.2252C0.350524 13.2536 0.416842 13.2632 0.473684 13.2632C0.596842 13.2632 0.719986 13.2159 0.814723 13.1211L2.52949 11.3684H10.8947C12.7232 11.3684 14.2105 9.88105 14.2105 8.05263Z"
        fill="#77777E"
      />
    </svg>
  );
};

const OfferIcon = () => {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.12426 2.0576L7.60314 0.578567C7.9735 0.208214 8.47608 0 8.99984 0C9.52374 0 10.0262 0.208197 10.3965 0.578567L11.8756 2.0576H13.9671C14.491 2.0576 14.9933 2.26566 15.3638 2.63616C15.7342 3.00652 15.9424 3.50896 15.9424 4.03286V6.12429L17.4214 7.60332C17.7917 7.97367 18 8.47612 18 9.00002C18 9.52392 17.7918 10.0264 17.4214 10.3967L15.9425 11.8756V13.9673C15.9425 14.4911 15.7343 14.9935 15.3639 15.364C14.9934 15.7343 14.491 15.9425 13.9672 15.9425H11.8756L10.3965 17.4214C10.0262 17.7918 9.52374 18 8.99984 18C8.47605 18 7.9735 17.7918 7.60314 17.4214L6.12426 15.9425H4.03272C3.50882 15.9425 3.00638 15.7345 2.63602 15.364C2.26553 14.9936 2.05746 14.491 2.05746 13.9673V11.8756L0.578567 10.3967C0.208214 10.0264 0 9.52392 0 9.00002C0 8.47612 0.208197 7.97367 0.578567 7.60332L2.0576 6.12429V4.03275C2.0576 3.50896 2.26566 3.00655 2.63602 2.63606C3.00652 2.2657 3.50896 2.05763 4.03272 2.05763L6.12426 2.0576ZM12.033 7.12409C12.3524 6.80454 12.3524 6.2865 12.033 5.96696C11.7135 5.6474 11.1954 5.6474 10.8759 5.96696L5.96682 10.876C5.64726 11.1956 5.64726 11.7136 5.96682 12.033C6.28637 12.3526 6.80441 12.3526 7.12395 12.0331L12.033 7.12409ZM7.77265 6.54552C7.77265 7.22325 7.22311 7.77279 6.54538 7.77279C5.86765 7.77279 5.31812 7.22325 5.31812 6.54552C5.31812 5.86779 5.86765 5.31826 6.54538 5.31826C7.22311 5.31826 7.77265 5.86779 7.77265 6.54552ZM11.4544 12.6818C12.1322 12.6818 12.6817 12.1323 12.6817 11.4546C12.6817 10.7768 12.1322 10.2273 11.4544 10.2273C10.7767 10.2273 10.2272 10.7768 10.2272 11.4546C10.2272 12.1323 10.7767 12.6818 11.4544 12.6818Z"
        fill="#77777E"
      />
    </svg>
  );
};

const BrandIcon = () => {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0C5.58771 0 2.8125 2.77534 2.8125 6.1875C2.8125 9.59966 5.58784 12.375 9 12.375C12.411 12.375 15.1875 9.59966 15.1875 6.1875C15.1875 2.77534 12.411 0 9 0ZM12.2522 5.31225L11.1835 6.65094L11.3005 8.40034C11.314 8.59496 11.2251 8.78278 11.0642 8.89644C10.9664 8.96512 10.8527 9.00002 10.738 9.00002C10.6638 9.00002 10.5885 8.98546 10.5186 8.95507L8.9999 8.31045L7.48227 8.95507C7.30222 9.03154 7.0953 9.01019 6.93658 8.89657C6.77687 8.78293 6.68798 8.59497 6.70041 8.40034L6.81743 6.65106L5.74868 5.31238C5.6294 5.16384 5.59449 4.96472 5.65413 4.78366C5.71377 4.60248 5.86118 4.46525 6.04563 4.41691L7.64085 3.99957L8.5161 2.52575C8.71863 2.18372 9.28113 2.18372 9.48251 2.52575L10.3578 3.99957L11.9541 4.41691C12.1374 4.46525 12.2848 4.60362 12.3456 4.78366C12.4064 4.96359 12.3704 5.16259 12.2522 5.31225Z"
        fill="#77777E"
      />
      <path
        d="M2.67151 9.83566L0.0749741 14.3437C-0.0386573 14.5417 -0.0218304 14.788 0.11666 14.9681C0.255026 15.1482 0.487942 15.2291 0.70841 15.1684L4.01141 14.2808L4.89007 17.5838C4.94858 17.8032 5.13415 17.9662 5.35916 17.9967C5.3839 17.9988 5.40976 17.9999 5.43337 17.9999C5.6325 17.9999 5.81921 17.8942 5.92052 17.7187L8.37643 13.4684C5.93621 13.2614 3.83914 11.8519 2.67139 9.83563L2.67151 9.83566Z"
        fill="#77777E"
      />
      <path
        d="M17.9254 14.3437L15.3278 9.83563C14.1611 11.8516 12.063 13.2611 9.62305 13.4684L12.079 17.7187C12.1802 17.8942 12.367 17.9999 12.5661 17.9999C12.5897 17.9999 12.6156 17.9988 12.6392 17.9954C12.8653 17.965 13.0497 17.8019 13.1094 17.5826L13.9881 14.2796L17.2911 15.1671C17.5115 15.2279 17.7433 15.1469 17.8828 14.9668C18.0222 14.7881 18.038 14.5417 17.9255 14.3437L17.9254 14.3437Z"
        fill="#77777E"
      />
    </svg>
  );
};

const CategoryIcon = () => {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7693 0.5H14.5385C16.1709 0.5 17.5001 1.82921 17.5001 3.46154V6.23077C17.5001 7.09986 16.7922 7.80769 15.9232 7.80769H11.7693C10.9002 7.80769 10.1924 7.09986 10.1924 6.23077V2.07692C10.1924 1.20783 10.9002 0.5 11.7693 0.5Z"
        stroke="url(#paint0_linear_1142_4453)"
      />
      <path
        d="M3.46154 0.5H6.23077C7.09986 0.5 7.80769 1.20783 7.80769 2.07692V6.23077C7.80769 7.09986 7.09986 7.80769 6.23077 7.80769H2.07692C1.20783 7.80769 0.5 7.09986 0.5 6.23077V3.46154C0.5 1.82921 1.82921 0.5 3.46154 0.5Z"
        stroke="url(#paint1_linear_1142_4453)"
      />
      <path
        d="M11.7693 10.1926H15.9232C16.7922 10.1926 17.5001 10.9004 17.5001 11.7695V14.5387C17.5001 16.1711 16.1709 17.5003 14.5385 17.5003H11.7693C10.9002 17.5003 10.1924 16.7924 10.1924 15.9233V11.7695C10.1924 10.9004 10.9002 10.1926 11.7693 10.1926Z"
        stroke="url(#paint2_linear_1142_4453)"
      />
      <path
        d="M2.07692 10.1926H6.23077C7.09986 10.1926 7.80769 10.9004 7.80769 11.7695V15.9233C7.80769 16.7924 7.09986 17.5003 6.23077 17.5003H3.46154C1.82921 17.5003 0.5 16.1711 0.5 14.5387V11.7695C0.5 10.9004 1.20783 10.1926 2.07692 10.1926Z"
        stroke="url(#paint3_linear_1142_4453)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1142_4453"
          x1="9.69238"
          y1="4.15385"
          x2="18.0001"
          y2="4.15385"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E70F0F" />
          <stop offset={1} stopColor="#FF5F5F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1142_4453"
          x1={0}
          y1="4.15385"
          x2="8.30769"
          y2="4.15385"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E70F0F" />
          <stop offset={1} stopColor="#FF5F5F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1142_4453"
          x1="9.69238"
          y1="13.8464"
          x2="18.0001"
          y2="13.8464"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E70F0F" />
          <stop offset={1} stopColor="#FF5F5F" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1142_4453"
          x1={0}
          y1="13.8464"
          x2="8.30769"
          y2="13.8464"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E70F0F" />
          <stop offset={1} stopColor="#FF5F5F" />
        </linearGradient>
      </defs>
    </svg>
  );
};
