import { NavLink } from "react-router-dom";

function PageLink({ open, setOpen }) {
  return (
    <ul
      className={`${open ? "block" : "hidden"} absolute h-screen top-25 right-0 bg-black flex-col z-999 justify-between items-center w-[100px] text-amber-950 text-lg font-poppins laptop:flex laptop:bg-transparent laptop:relative laptop:h-0.5 laptop:top-0  laptop:flex-row laptop:w-[600px]`}
    >
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#menu">Menu </a>
      </li>
      <li>
        <a href="#textimonial">Testimonials </a>
      </li>
      <li>
        <a href="#contact">contact </a>
      </li>
    </ul>
  );
}

export default PageLink;
