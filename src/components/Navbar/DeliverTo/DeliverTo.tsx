import { DeliverToIcon } from "@/Icons";

export default function DeliverTo() {
  return (
    <div className="flex items-center gap-2">
      <DeliverToIcon />
      <p className="text-black text-xs not-italic font-medium whitespace-nowrap">
        Deliver to -{" "}
        <span className="font-semibold uppercase">Thane 400601</span>
      </p>
    </div>
  );
}
