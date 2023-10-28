import { SearchBarIcon } from "@/Icons";

type Props = {
  label: string;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
};

export default function Searchbar({
  label,
  className,
  onBlur,
  onFocus,
}: Props) {
  return (
    <div
      className={`w-full flex items-center gap-4 bg-white p-[10px] border-2 border-gray-400 rounded-[10px] ${className}`}
    >
      <SearchBarIcon />
      <input
        type="text"
        placeholder={`Search for ${label}`}
        className="outline-none text-black text-sm not-italic font-medium w-full"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}
