import { HiBars3, HiMiniXMark } from "react-icons/hi2";

function IconButton({ open, setOpen }) {
  return (
    <button onClick={() => setOpen(!open)} className="block  laptop:hidden">
      {open ? (
        <span>
          <HiMiniXMark className="text-4xl text-amber-950" />
        </span>
      ) : (
        <span>
          <HiBars3 className="text-4xl text-amber-950" />
        </span>
      )}
    </button>
  );
}

export default IconButton;
