import Link from "next/link";
import DeliverTo from "./DeliverTo/DeliverTo";
import SearchForProducts from "./SearchForProducts/SearchForProducts";
import Sidebar from "./Sidebar/Sidebar";
import { MenuIcon } from "@/Icons";

export default function NavBar() {
  return (
    <div className="bg-light-grey">
      <div className="max-w-[1300px] mx-auto py-[20px] flex items-center gap-[35px] max-[1300px]:px-5">
        <div className="hidden flex-1 max-[750px]:block">
          <button>
            <MenuIcon />
          </button>
        </div>
        <Link href="/">
          <img
            src="/assets/logo.png"
            alt="logo"
            className="w-[180px]  max-[500px]:w-[120px]"
          />
        </Link>
        <div className="max-[750px]:hidden">
          <DeliverTo />
        </div>
        <div className="max-[1200px]:hidden">
          <SearchForProducts />
        </div>
        <div className="flex-1">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
