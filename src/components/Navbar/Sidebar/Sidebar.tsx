import Favourite from "../Favourite/Favourite";
import Notification from "../Notification/Notification";
import Profile from "../Profile/Profile";
import ShoppingBag from "../ShoppingBag/ShoppingBag";

export default function Sidebar() {
  return (
    <div className="flex-1 flex items-center gap-[24px] justify-end">
      <Favourite />
      <Notification />
      <ShoppingBag />
      <Profile />
    </div>
  );
}
