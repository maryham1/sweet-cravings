import { Link, NavLink } from "react-router-dom";
import LogoWhite from "../../ui/LogoWhite";
import Logo from "../../ui/Logo";
import { useComponent } from "../../context/ScrollContext";

function PageLink({ open, setOpen }) {
  const { aboutRef } = useComponent();
  const { testmoniesRef } = useComponent();
  const { contactRef } = useComponent();
  return (
    <ul
      className={`${open ? "translate-x-0" : "translate-x-full"}
  fixed top-0 right-0 h-screen w-full
  transform transition-transform duration-300 ease-in-out
  bg-pink-400 flex flex-col z-50 items-center
  text-white text-2xl py-[100px] gap-10 tablet:translate-x-0 tablet:bg-transparent  tablet:relative tablet:flex-row tablet:w-[400px] tablet:h-0 tablet:justify-between tablet:text-amber-950 tablet:text-lg tablet:py-0
  laptop:relative laptop:translate-x-0 laptop:flex-row laptop:w-[600px] laptop:h-0
  laptop:justify-between laptop:py-0 laptop:bg-transparent laptop:text-xl laptop:text-amber-950`}
    >
      <div className="flex items-center gap-0 top-5 absolute left-5 laptop:hidden tablet:hidden">
        <img src="\video\dessertLogo.svg" className="w-[40px] h-[40px]" />
        <p className="font-logo text-xl text-amber-950">
          <Link to="/">Sweet cravings</Link>
        </p>
      </div>
      <li>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
            setOpen(false);
          }}
        >
          About
        </a>
      </li>
      <li onClick={() => setOpen(false)}>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <a
          href="#textimonial"
          onClick={(e) => {
            e.preventDefault();
            testmoniesRef.current.scrollIntoView({ behavior: "smooth" });
            setOpen(false);
          }}
        >
          Testimonials{" "}
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            contactRef.current.scrollIntoView({ behavior: "smooth" });
            setOpen(false);
          }}
        >
          contact{" "}
        </a>
      </li>
    </ul>
  );
}

export default PageLink;
