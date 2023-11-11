import CartProductCard from "./CartProductCard";

export default function CartProducts() {
  return (
    <div className="sm-1 flex flex-col p-8 rounded-2xl bg-white gap-6">
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
    </div>
  );
}
