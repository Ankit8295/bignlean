import { ReviewCard } from "@/components";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";

const fakeData: {
  name: string;
  postedDate: string;
  rating: string;
  review: string;
  imgs?: string[];
}[] = [
  {
    name: "Varun Kubal",
    postedDate: "Dec 10, 2024",
    rating: "3",
    review: `Very nice and comfortable hotel, thank you for
accompanying my vacation`,
  },
  {
    name: "Varun Kubal",
    postedDate: "Dec 10, 2024",
    rating: "3",
    review: `Very nice and comfortable hotel, thank you for
accompanying my vacation`,
  },
  {
    name: "Varun Kubal",
    postedDate: "Dec 10, 2024",
    rating: "4",
    review: `Very nice and comfortable hotel, thank you for
accompanying my vacation`,
    imgs: ["/assets/product.png", "/assets/product.png"],
  },
  {
    name: "Varun Kubal",
    postedDate: "Dec 10, 2024",
    rating: "2",
    review: `Very nice and comfortable hotel, thank you for
accompanying my vacation`,
    imgs: ["/assets/product.png"],
  },
];

export default function page() {
  return (
    <CustomPageWrapper heading="Reviews">
      <div className="flex">
        <div className="flex-1">
          <div className="bg-white rounded-lg sm-3 p-3 flex flex-col gap-4 w-[455px] max-[500px]:w-full mb-[50px]">
            {fakeData.map((data, index) => (
              <div key={index} className="flex flex-col gap-4">
                <ReviewCard
                  name={data?.name}
                  postedDate={data?.postedDate}
                  rating={data?.rating}
                  review={data?.review}
                  imgs={data?.imgs}
                />
                {index < fakeData.length - 1 && (
                  <div className="w-full h-[1px] bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
          <RecentProducts />
        </div>
        <div className="flex-1 max-[850px]:hidden">
          <img src="/assets/reviews/right.png" alt="img" className="w-full" />
        </div>
      </div>
    </CustomPageWrapper>
  );
}

const RecentProducts = () => {
  return (
    <div>
      <h3 className="text-black text-xl not-italic font-semibold mb-9">
        Recent Orders
      </h3>
      <div className="flex">
        <div className="w-[150px] flex flex-col gap-2 items-center">
          <img src="/assets/product.png" alt="product" className="w-[50px]" />
          <p className="text-black text-xs not-italic font-medium text-center">
            Muscletech NitroTech 100% Whey Gold Performance Series
          </p>
        </div>
        <div className="w-[150px] flex flex-col gap-2 items-center">
          <img src="/assets/product.png" alt="product" className="w-[50px]" />
          <p className="text-black text-xs not-italic font-medium text-center">
            Muscletech NitroTech 100% Whey Gold Performance Series
          </p>
        </div>
      </div>
    </div>
  );
};
