import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex justify-center px-10 py-10 flex-col bg-stone-50 h-screen">
      <p className="text-red-500 text-3xl">Your cart(0)</p>
      <img
        src="\video\illustration-empty-cart.svg"
        className="w-[300px] h-[300px]"
      />
      <p className="text-black">
        No desserts yet.{" "}
        <span className="text-blue-600 cursor-pointer">
          <Link to="/menu">Start picking your favourites🎂</Link>
        </span>
      </p>
    </div>
  );
}

export default EmptyCart;
