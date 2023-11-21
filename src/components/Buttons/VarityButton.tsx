type Props = {
  label: string;
  active?: boolean;
};
export default function VarityButton({ label, active }: Props) {
  return (
    <div
      className={`border-[2px] text-black text-center text-xs not-italic font-medium cursor-pointer rounded-[12px] p-2 ${
        active ? "text-white linear-gradient-1 border-red-500" : ""
      }`}
    >
      {label}
    </div>
  );
}
