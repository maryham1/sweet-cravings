import { HiOutlineTrash } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { deleteItem } from "./CartSlice";

function DeleteItem({ dessertId }) {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(deleteItem(dessertId))} className="ml-auto">
      <HiOutlineTrash className="text-red-800" />
    </button>
  );
}

export default DeleteItem;
