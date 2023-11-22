import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  heading?: string;
  className?: string;
  showContentFooter?: boolean;
  headingClass?: string;
};
export default function CustomPageWrapper({
  children,
  heading,
  className,
  headingClass,
  showContentFooter = true,
}: Props) {
  return (
    <div
      className={`w-[1200px] max-[1200px]:w-full max-[850px]:pt-0 mx-auto py-[40px] px-[10px] ${className}`}
    >
      {heading && (
        <h2
          className={`text-black text-2xl not-italic font-bold leading-9 mb-[79px] max-[850px]:mb-4 ${headingClass}`}
        >
          {heading}
        </h2>
      )}
      {children}
      {showContentFooter && <ContentFooter />}
    </div>
  );
}

export const ContentFooter = () => {
  return (
    <>
      <div className="h-[1px] bg-gray-300 my-[60px] max-[500px]:hidden"></div>
      <p className="text-black text-sm not-italic font-medium leading-6 mb-2 max-[500px]:hidden">
        Bignlean.com is the only online & offline supplement store in India that
        can truly guarantee authenticity. Bignlean.com has been in the health
        and fitness industry for several years. We have been supplying
        nutritional products such as weight loss supplements, protein weight
        loss supplements, dietary products, and much more. With over a huge
        population of happy customers, we aim to spread the joy of good health
        among others. Our online supplement store is your ultimate destination
        for getting all the desired health and fitness products. From protein
        powder, fat burners, to organic whey protein we supply it all! Top
        quality products, great customer support, competitive rates, attractive
        offers, all under a single roof – Bignlean.com. We work hard to make you
        reach your goals our products along with you following proper diet and
        exercise. We are available to guide you at every step of shopping the
        supplements.
      </p>
      <p className="text-black text-sm not-italic font-medium leading-5 mb-5 max-[500px]:hidden">
        Whether it’s your first step towards the fitness goal or you are an
        existing professional, we can help. We have a vast range of health
        supplements categorized as per their qualities in our online shop. Happy
        Shopping.
      </p>
    </>
  );
};
