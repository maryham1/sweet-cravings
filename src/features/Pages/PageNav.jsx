import { useState } from "react";
import Logo from "../../ui/Logo";
import IconButton from "./IconButton";
import PageLink from "./PageLink";

function PageNav() {
  const [open, setOpen] = useState(false);
  const [clickedList, setClickedList] = useState(false);
  return (
    <nav className="bg-red-100 px-[35px] py-[10px] sticky z-50 top-0  left-0 w-full flex justify-between items-center laptop:px-[1px] laptop:justify-around shadow shadow-xl rounded-b-3xl laptop:shadow-lg">
      <Logo />
      <PageLink
        open={open}
        setOpen={setOpen}
        clickedList={clickedList}
        setClickedList={setClickedList}
      />
      <IconButton
        open={open}
        setOpen={setOpen}
        clickedList={clickedList}
        setClickedList={setClickedList}
      />
    </nav>
  );
}

export default PageNav;
