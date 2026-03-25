import { useState } from "react";
import Logo from "../../ui/Logo";
import IconButton from "./IconButton";
import PageLink from "./PageLink";

function PageNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-red-100 px-[35px] py-[10px] sticky z-50 top-0  left-0 w-full flex justify-between items-center laptop:px-[1px] laptop:justify-around ">
      <Logo />
      <PageLink open={open} setOpen={setOpen} />
      <IconButton open={open} setOpen={setOpen} />
    </nav>
  );
}

export default PageNav;
