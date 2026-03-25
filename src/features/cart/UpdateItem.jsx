import { useDispatch } from "react-redux";
import { decreasseItemQuantity, increaseItemQuantity } from "./CartSlice";
import { useState } from "react";

function UpdateItem({ currentQuantity, id }) {
  const dispatch = useDispatch();
  const [clicked, setIsClicked] = useState(null);

  return (
    <div className=" flex items-center justify-around gap-1 border border-gray-400 p-1 text-center w-[140px] absolute -bottom-3 rounded-full bg-red-800 border-2 border-red-800">
      <button
        className={`${clicked === "minus" ? "bg-white text-red-800" : " border-white border-2 text-white"} w-[17px] h-[17px] rounded-full text-center flex items-center justify-center p-1 text-sm`}
        onClick={() => {
          setIsClicked("minus");
          dispatch(decreasseItemQuantity(id));
        }}
      >
        -
      </button>
      <span className="text-white">{currentQuantity}</span>
      <button
        className={`${clicked === "plus" ? "bg-white text-red-800" : " border-white border-2 text-white"} w-[17px] h-[17px] rounded-full text-center flex items-center justify-center p-1 text-sm `}
        onClick={() => {
          setIsClicked("plus");
          dispatch(increaseItemQuantity(id));
        }}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItem;
