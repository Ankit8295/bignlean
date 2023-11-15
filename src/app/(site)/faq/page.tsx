import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import Accordian from "../app-certificates/Accordian";
import { SideArrowIcon } from "@/Icons";

const accountRelatedData: { heading: string; para: string }[] = [
  {
    heading: `What is 'My Account'? How do I update my information?`,
    para: "It is easy to update your HealthKart account and view your orders any time through 'My Account'. My Account' allows you complete control over your transactions on HealthKart. Manage/edit your personal data like address, phone numbers, email ids, change your password, track the status of your orders, place re-orders, find details about your HK cash and your wishlist.",
  },
  {
    heading: `What is 'My Account'? How do I update my information?`,
    para: "It is easy to update your HealthKart account and view your orders any time through 'My Account'. My Account' allows you complete control over your transactions on HealthKart. Manage/edit your personal data like address, phone numbers, email ids, change your password, track the status of your orders, place re-orders, find details about your HK cash and your wishlist.",
  },
  {
    heading: `What is 'My Account'? How do I update my information?`,
    para: "It is easy to update your HealthKart account and view your orders any time through 'My Account'. My Account' allows you complete control over your transactions on HealthKart. Manage/edit your personal data like address, phone numbers, email ids, change your password, track the status of your orders, place re-orders, find details about your HK cash and your wishlist.",
  },
];

const sidebarData = [
  "Accounts",
  "Order",
  "Payment",
  "Deliveries",
  "Cancellation & Modifications",
  "Returns & Refunds",
  "Coupons &HK Cash",
];

export default function page() {
  return (
    <CustomPageWrapper heading="FAQ" showContentFooter={false}>
      <div className="flex gap-10 max-[1000px]:flex-col">
        <div className="flex-[0.3] max-[1000px]:hidden">
          <div className="flex flex-col gap-5 bg-white sm-3 rounded-xl p-4">
            {sidebarData?.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between cursor-pointer"
              >
                <p>{item}</p>
                <SideArrowIcon />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-[0.7]">
          <h2 className="text-black text-lg not-italic font-bold mb-5">
            Account Related
          </h2>
          <div className="flex  flex-col gap-4">
            {accountRelatedData?.map((item, index) => (
              <Accordian
                heading={item?.heading}
                para={item?.para}
                key={index}
              />
            ))}
          </div>
          <h2 className="text-black text-lg not-italic font-bold mb-5 mt-[60px]">
            Orders
          </h2>
          <div className="flex  flex-col gap-4">
            {accountRelatedData?.map((item, index) => (
              <Accordian
                heading={item?.heading}
                para={item?.para}
                key={index}
              />
            ))}
          </div>
          <h2 className="text-black text-lg not-italic font-bold mb-5 mt-[60px]">
            Payment
          </h2>
          <div className="flex  flex-col gap-4">
            {accountRelatedData?.map((item, index) => (
              <Accordian
                heading={item?.heading}
                para={item?.para}
                key={index}
              />
            ))}
          </div>
          <h2 className="text-black text-lg not-italic font-bold mb-5 mt-[60px]">
            Deliveries
          </h2>
          <div className="flex  flex-col gap-4">
            {accountRelatedData?.map((item, index) => (
              <Accordian
                heading={item?.heading}
                para={item?.para}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </CustomPageWrapper>
  );
}
