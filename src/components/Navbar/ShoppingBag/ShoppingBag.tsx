import { ShoppingBagIcon } from "@/Icons";
import Link from "next/link";

export default function ShoppingBag() {
  return (
    <Link href={"/shoppingbag"}>
      <ShoppingBagIcon />
    </Link>
  );
}
