import { Link } from "react-router-dom";
import Logo from "../../ui/Logo";
import LogoWhite from "../../ui/LogoWhite";
import PageLink from "./PageLink";
import PageLinkWhite from "./PageLinkWhite";

import { useComponent } from "../../context/ScrollContext";
import SocialHandle from "./SocialHandle";

function Contact() {
  const { contactRef } = useComponent();
  return (
    <footer
      id="contact"
      ref={contactRef}
      className="bg-amber-950 mt-10  w-full  px-[35px] laptop:px-[150px] py-[20px] flex flex-col gap-10 items-start  tablet:flex-row tablet:justify-between  tablet:py-[20px] laptop:flex-row laptop:justify-between laptop:gap-0 "
    >
      <LogoWhite />

      <PageLinkWhite />
      <SocialHandle />
    </footer>
  );
}

export default Contact;
