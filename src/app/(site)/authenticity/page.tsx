import { QualityIcon } from "@/Icons";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import Image from "next/image";

const brandsSrcs = [
  "/assets/brands/img1.png",
  "/assets/brands/img2.png",
  "/assets/brands/img3.png",
  "/assets/brands/img4.png",
  "/assets/brands/img5.png",
];

const featureList = [
  {
    heading: `Quality Control During Distribution`,
    subHeading: `MuscleBlaze is one of the best selling brands in India. When it comes to healthy, top quality and reasonable supplements. From whey protein, mass gainers, BCAA's to raw whey protein, MuscleBlaze has everything to complement your fitness`,
  },
  {
    heading: `We Ensure That Damaged Products are not Shipped`,
    subHeading: `MuscleBlaze is one of the best selling brands in India. When it comes to healthy, top quality and reasonable supplements. From whey protein, mass gainers, BCAA's to raw whey protein, MuscleBlaze has everything to complement your fitness`,
  },
  {
    heading: `Premium logistic Partners`,
    subHeading: `MuscleBlaze is one of the best selling brands in India. When it comes to healthy, top quality and reasonable supplements. From whey protein, mass gainers, BCAA's to raw whey protein, MuscleBlaze has everything to complement your fitness.`,
  },
];

export default function page() {
  return (
    <CustomPageWrapper heading="Authenticity">
      <h2 className="text-black text-2xl not-italic font-semibold leading-9 mb-4">
        AUTHENTICITY DELIVERED
      </h2>
      <p className="text-black text-base not-italic font-normal leading-6 mb-[53px]">
        MuscleBlaze is one of the best selling brands in India. When it comes to
        healthy, top quality and reasonable supplements. From whey protein, mass
        gainers, BCAA's to raw whey protein, MuscleBlaze has everything to
        complement your fitness
      </p>
      <h2 className="text-black text-2xl not-italic font-medium mb-8">
        We Collaborate with all the Popular Global Brands
      </h2>
      <div className="flex gap-8 mb-[73px]">
        {brandsSrcs.map((src, index) => (
          <BrandsCard key={index} src={src} />
        ))}
      </div>
      <div className="flex flex-col gap-10 mb-[50px]">
        {featureList.map((item, index) => (
          <FeatureCard
            key={index}
            heading={item?.heading}
            subHeading={item.subHeading}
          />
        ))}
      </div>
      <h2 className="text-black text-2xl not-italic font-medium leading-9 mb-4">
        14 Days Hassle - free return policy
      </h2>
      <p className="text-black text-base not-italic font-normal leading-6 mb-[101px]">
        MuscleBlaze is one of the best selling brands in India. When it comes to
        healthy, top quality and reasonable supplements. From whey protein, mass
        gainers, BCAA's to raw whey protein, MuscleBlaze has everything to
        complement your fitness.
      </p>
      <div className="w-auto mb-6">
        <h2 className="text-black text-2xl not-italic font-semibold leading-9">
          AUTHENTICITY ON OUR TOP IMPORTED BRANDS
        </h2>
        <div className="h-[2px] bg-gray-300 w-[49%]"></div>
      </div>
      <p className="text-black text-base not-italic font-normal leading-6 mb-9">
        MuscleBlaze is one of the best selling brands in India. When it comes to
        healthy, top quality and reasonable supplements. From whey protein, mass
        gainers, BCAA's to raw whey protein, MuscleBlaze has everything to
        complement your fitness.
      </p>
      <div className="flex gap-[18px] mb-11">
        <CertificateCard
          src="/assets/product.png"
          heading="BignLean is the Official Supplier of MuscleTech"
          subHeading="We source from Optimum Nutrition authorised importers."
        />
        <CertificateCard
          src="/assets/product.png"
          heading="BignLean is the Official Supplier of MuscleTech"
          subHeading="We source from Optimum Nutrition authorised importers."
        />
        <CertificateCard
          src="/assets/product.png"
          heading="BignLean is the Official Supplier of MuscleTech"
          subHeading="We source from Optimum Nutrition authorised importers."
        />
      </div>
      <h2 className="text-black text-xl not-italic font-semibold leading-9 mb-5">
        BEWARE OF FAKE BODYBUILDING SUPPLEMENTS
      </h2>
      <p className="text-black text-base not-italic font-normal leading-7">
        Spurious ingredients mixed with steroids' make for cheap supplements.
        Such supplements are made to look like their real counterparts in color
        and texture. but the pump in muscle and the mass gain are directly
        because of the steroids in the Fake supplements. As for the permanent
        damage, you can get Cancer and severe impotence without smoking, skin
        diseases and rashes without being infected. kidney and liver damage
        without consuming alcohol. hormonal imbalance without having Stress,
        mood swings, hair loss and permanent organ damage. That's what anabolic
        steroids' do in a nutshell. Duplicate Supplements Or Fake Supplements
        Can Lead Many Health Problems.
      </p>
    </CustomPageWrapper>
  );
}

const BrandsCard = ({ src }: { src: string }) => {
  return (
    <div className="flex items-center justify-center bg-white sm-3 rounded-xl min-w-[148px] py-5">
      <Image
        src={src}
        alt="brand logo"
        width={80}
        height={100}
        className="h-auto"
      />
    </div>
  );
};

const FeatureCard = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="flex items-start gap-2">
      <div className="flex-[0.1] pt-1">
        <QualityIcon />
      </div>
      <div>
        <p className="text-black text-lg not-italic font-medium mb-1">
          {heading}
        </p>
        <p className="text-black text-base not-italic font-normal leading-6">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

const CertificateCard = ({
  heading,
  src,
  subHeading,
}: {
  src: string;
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="flex flex-col gap-4 p-3 rounded-lg sm-3 bg-white">
      <div className="flex items-start gap-2">
        <Image src={src} width={44} height={58} alt="product" />
        <div>
          <p className="text-black text-xs mb-1 not-italic font-semibold leading-4">
            {heading}
          </p>
          <p className="text-black text-xs not-italic font-normal">
            {subHeading}
          </p>
        </div>
      </div>
      <Image
        src={"/assets/certi/img1.png"}
        alt="product certi"
        width={100}
        height={100}
        className="w-full"
      />
    </div>
  );
};
