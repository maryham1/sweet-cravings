import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { getTotalCartPrice, getTotalCartQuantity } from "./CartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  if (!cart.length) return <EmptyCart />;
  console.log(cart);
  return (
    <main className="bg-pink-50 py-10 px-10 h-screen flex flex-col justify-between  ">
      <h1 className="text-xl laptop:text-5xl">
        You have {totalQuantity} items in your cart
      </h1>
      <ul className="divide-y divide-stone-200 ">
        {cart.map((item) => (
          <CartItem item={item} />
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <h2 className="text-amber-900 text-2xl">
          <b>Order Total</b>
        </h2>

        <p className="text-amber-900 text-lg">${totalPrice}</p>
      </div>
      <div className="bg-white w-auto  flex items-center justify-center gap-2 py-4 px-6   rounded-xl laptop:px-0 laptop:gap-10">
        <img src="\video\icon-carbon-neutral.svg" />
        <p className="text-amber-950">
          This is a <b>carbon neutral</b> delivery
        </p>
      </div>
      <button className="bg-amber-900 w-auto text-center py-4 text-xl rounded-full text-white">
        Confirm Order
      </button>
    </main>
  );
}

export default Cart;
