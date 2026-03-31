import { HiBars3, HiMiniXMark } from "react-icons/hi2";

function IconButton({ open, setOpen }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="block absolute top-5 right-5 z-[100]  laptop:hidden tablet:hidden"
    >
      {open ? (
        <span>
          <HiMiniXMark className="text-4xl text-white" />
        </span>
      ) : (
        <span>
          <HiBars3 className="text-4xl text-amber-950  " />
        </span>
      )}
    </button>
  );
}

export default IconButton;
