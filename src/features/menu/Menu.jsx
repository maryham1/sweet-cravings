import { Link, useLoaderData } from "react-router-dom";
import fetchMenu from "../../services/apiResturant";
import CreateUser from "../Users/CreateUser";
import MenuItem from "./MenuItem";
import { HiBell, HiOutlineShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import {
  getCurrentQuantityById,
  getTotalCartQuantity,
} from "../cart/CartSlice";

function Menu() {
  const menu = useLoaderData();

  const cart = useSelector((state) => state.cart.cart);

  const totalQuantity = useSelector(getTotalCartQuantity);

  return (
    <main className="bg-pink-50 px-10 py-10 flex flex-col gap-[30px] ">
      <div className="flex justify-between items-center">
        <CreateUser />
        <button className="relative bg-red-800 rounded-full text-center flex gap-2 w-[170px] laptop:w-[170px] p-2 items-center justify-center">
          <HiOutlineShoppingCart className="text-red-400 text-lg" />
          <Link to="/cart" className="text-white font-poppins">
            Go to cart
          </Link>
          {cart.length === 0 || totalQuantity === 0 ? (
            ""
          ) : (
            <div className="absolute -top-3 right-3">
              <HiBell className="text-2xl text-red-500" />
              <p className="bg-amber-800  text-center text-[9px] text-white rounded-full w-[12px] h-[12px]  absolute -top-1 right-0 font-poppins">
                {totalQuantity}
              </p>
            </div>
          )}
        </button>
      </div>
      <ul className="flex flex-col  flex-nowrap  gap-[30px] items-center tablet:flex-row tablet:flex-wrap tablet:justify-between tablet:gap-[20px] laptop:flex-row  laptop:flex-wrap laptop:justify-between laptop:gap-[20px]">
        {menu.map((item) => (
          <MenuItem item={item} key={item.name} />
        ))}
      </ul>
    </main>
  );
}

export async function Loader() {
  const menu = await fetchMenu();
  return menu;
}
export default Menu;
