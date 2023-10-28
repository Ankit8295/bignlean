import Image from "next/image";

type Props = {
  src: string;
  label: string;
  subLabel: string;
  time: string;
};
export default function NotificationCard({
  src,
  label,
  subLabel,
  time,
}: Props) {
  return (
    <div className="flex gap-2 items-stretch">
      <div>
        <Image src={src} alt="notification image" width={100} height={100} />
      </div>
      <div className="flex-1 flex flex-col p-3 pb-0">
        <p className="text-lg not-italic font-medium">{label}</p>
        <p className="text-xs not-italic font-normal">{subLabel}</p>
        <p className="text-xs not-italic font-normal mt-auto">{time}</p>
      </div>
    </div>
  );
}
