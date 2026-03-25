import DeleteItem from "./DeleteItem";

function CartItem({ item }) {
  const { dessertId, name, quantity, price, image, totalPrice } = item;
  return (
    <li className="flex gap-5 items-center ">
      <img src={image.png} className="w-[70px] h-[70px]" />
      <div>
        <p>{name}</p>
        <div className="flex gap-5 ">
          <p className="text-red-500">{quantity}&times;</p>
          <p className="text-amber-950/50">${price}</p>
          <p className="text-amber-900">${totalPrice}</p>
        </div>
      </div>
      <DeleteItem dessertId={dessertId} />
    </li>
  );
}

export default CartItem;
