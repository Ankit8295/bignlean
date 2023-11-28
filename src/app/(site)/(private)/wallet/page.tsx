import { CoinIcon, CoinSmIcon, CreditIcon, DebitIcon } from "@/Icons";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";

const FakeTranctionData: {
  transLabel: string;
  credit: boolean;
  value: string;
  status: boolean;
  time: string;
}[] = [
  {
    transLabel: "Lorem ipsum",
    credit: true,
    value: "30",
    status: true,
    time: "3rd January 2023, 1:53 pm",
  },
  {
    transLabel: "Lorem ipsum",
    credit: false,
    value: "30",
    status: true,
    time: "3rd January 2023, 1:53 pm",
  },
  {
    transLabel: "Lorem ipsum",
    credit: true,
    value: "30",
    status: true,
    time: "1rd January 2023, 1:53 pm",
  },
  {
    transLabel: "Lorem ipsum",
    credit: true,
    value: "30",
    status: false,
    time: "3rd January 2023, 1:53 pm",
  },
  {
    transLabel: "Lorem ipsum",
    credit: false,
    value: "30",
    status: true,
    time: "3rd January 2023, 1:53 pm",
  },
];

export default function page() {
  return (
    <CustomPageWrapper heading="Wallet">
      <div className="flex">
        <div className="flex-1 ">
          <div className="w-[455px] max-[500px]:w-full">
            <BalanceCard />
            <p className="text-gray-600 text-sm not-italic font-medium leading-5 mt-8 mb-2">
              Transaction History
            </p>
            <div className="sm-3 rounded-lg p-3 px-6 flex flex-col gap-4">
              {FakeTranctionData.map((tran, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <TransactionCard
                    credit={tran?.credit}
                    status={tran?.status}
                    time={tran?.time}
                    transLabel={tran?.transLabel}
                    value={tran?.value}
                  />
                  {index < FakeTranctionData?.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 max-[850px]:hidden">
          <img src="/assets/wallet/right.png" alt="wallet" className="w-full" />
        </div>
      </div>
    </CustomPageWrapper>
  );
}

const BalanceCard = () => {
  return (
    <div className="flex justify-between items-center linear-gradient-1 py-6 px-8 rounded-lg">
      <p className="text-white text-xl not-italic font-semibold">
        Your Balance
      </p>
      <div className="flex items-center gap-1">
        <CoinIcon />
        <p className="text-white text-4xl not-italic font-bold">550.00</p>
      </div>
    </div>
  );
};

const TransactionCard = ({
  credit,
  status,
  time,
  transLabel,
  value,
}: {
  transLabel: string;
  credit: boolean;
  value: string;
  status: boolean;
  time: string;
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <p className="text-black text-sm not-italic font-medium leading-5">
          {transLabel}
        </p>
        <div className="flex items-center gap-1">
          {credit ? <CreditIcon /> : <DebitIcon />}
          <CoinSmIcon />
          <p className="text-black text-right text-sm not-italic font-semibold leading-5">
            {value}.00
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-xs not-italic font-normal leading-5">
          {time}
        </p>
        <p
          className={` not-italic font-normal text-[10px] leading-5 ${
            status ? "text-green-800" : "text-red-500"
          }`}
        >
          Transaction {status ? "Successfull" : "Failed"}
        </p>
      </div>
    </div>
  );
};
