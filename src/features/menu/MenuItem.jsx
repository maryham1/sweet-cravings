import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/CartSlice";
import UpdateItem from "../cart/UpdateItem";
function MenuItem({ item }) {
  const dispatch = useDispatch();
  const { id, name, price, image, category } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  console.log(isInCart);
  function handleAddItem() {
    const newItem = {
      dessertId: id,
      image,
      name,
      price,
      quantity: 1,
      totalPrice: price * 1,
    };

    dispatch(addItem(newItem));
  }

  // console.log(item);
  return (
    <li className=" flex flex-col gap-[20px]">
      <div className="relative flex flex-col items-center">
        <img
          src={image.png}
          alt={name}
          className="w-[250px] h-[200px] tablet:w-[300px] tablet:h-[250px] laptop:w-[300px] laptop:h-[250px] rounded-2xl"
        />

        {isInCart && <UpdateItem currentQuantity={currentQuantity} id={id} />}
        {!isInCart && (
          <button
            className=" flex items-center justify-center gap-1 border border-gray-400 p-1 text-center w-[140px] absolute -bottom-3 rounded-full bg-white hover:border hover:border-red-800 font-poppins"
            onClick={handleAddItem}
          >
            <HiOutlineShoppingCart className="text-red-500 text-lg" />

            <span>Add to Cart</span>
          </button>
        )}
      </div>

      <div>
        <p className="text-amber-950/50 font-poppins">{category}</p>
        <p className="text-black font-poppins">
          <b>{name}</b>
        </p>
        <p className="text-red-800 font-poppins">${price}</p>
      </div>
    </li>
  );
}

export default MenuItem;
