import Image from "next/image";
import Link from "next/link";
import DeliverTo from "./DeliverTo/DeliverTo";
import SearchForProducts from "./SearchForProducts/SearchForProducts";
import Sidebar from "./Sidebar/Sidebar";

export default function NavBar() {
  return (
    <div className="bg-light-grey">
      <div className="max-w-[1300px] mx-auto py-[20px] flex items-center gap-[35px]">
        <Link href="/">
          <Image src="/assets/logo.png" alt="logo" width={180} height={48} />
        </Link>
        <DeliverTo />
        <SearchForProducts />
        <Sidebar />
      </div>
    </div>
  );
}
