import { CrossIcon, RecentIcon } from "@/Icons";

export default function SearchLocationItem() {
  return (
    <div className="flex items-center p-5 gap-4">
      <RecentIcon />
      <p>Pune, Maharashtra</p>
      <button className="ml-auto">
        <CrossIcon />
      </button>
    </div>
  );
}
