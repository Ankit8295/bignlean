"use client";
import {
  useAppContext,
  useDispatchContext,
} from "@/provider/ContextProvider/ContextProvider";
import NotificationCard from "./NotificationCard";
import { NotificationIcon } from "@/Icons";

type NotificationItem = {
  src: string;
  label: string;
  subLabel: string;
  time: string;
};

const notificationList: NotificationItem[] = [
  {
    label: "Deals too hot to pass",
    subLabel: `Upto 56% Off + 4% BL Cash  on Best sellers
+ Cashbacks Via Simpl Pay, ICICI Net Bank...`,
    src: "/assets/notification.png",
    time: "Today",
  },
  {
    label: "Deals too hot to pass",
    subLabel: `Upto 56% Off + 4% BL Cash  on Best sellers
+ Cashbacks Via Simpl Pay, ICICI Net Bank...`,
    src: "/assets/notification.png",
    time: "Today",
  },
  {
    label: "Deals too hot to pass",
    subLabel: `Upto 56% Off + 4% BL Cash  on Best sellers
+ Cashbacks Via Simpl Pay, ICICI Net Bank...`,
    src: "/assets/notification.png",
    time: "Today",
  },
  {
    label: "Deals too hot to pass",
    subLabel: `Upto 56% Off + 4% BL Cash  on Best sellers
+ Cashbacks Via Simpl Pay, ICICI Net Bank...`,
    src: "/assets/notification.png",
    time: "Today",
  },
  {
    label: "Deals too hot to pass",
    subLabel: `Upto 56% Off + 4% BL Cash  on Best sellers
+ Cashbacks Via Simpl Pay, ICICI Net Bank...`,
    src: "/assets/notification.png",
    time: "Today",
  },
];
export default function Notification() {
  const { notificationToggle } = useAppContext();
  const dispatch = useDispatchContext();
  return (
    <div className="relative">
      <button
        className="flex"
        onClick={() =>
          dispatch({
            type: !notificationToggle
              ? "NOTIFICATION_TOGGLE_ON"
              : "NOTIFICATION_TOGGLE_OFF",
          })
        }
      >
        <NotificationIcon />
      </button>
      {notificationToggle && (
        <div
          onMouseLeave={() => dispatch({ type: "NOTIFICATION_TOGGLE_OFF" })}
          className="absolute w-[450px] top-full right-0 bg-white sm-1 rounded-xl p-6 flex flex-col gap-3 max-h-[400px] overflow-auto z-30"
        >
          {notificationList.map((item, index) => (
            <NotificationCard
              key={index}
              label={item.label}
              src={item.src}
              subLabel={item.subLabel}
              time={item.time}
            />
          ))}
        </div>
      )}
    </div>
  );
}
