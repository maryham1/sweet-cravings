import { Link } from "react-router-dom";
import Logo from "../../ui/Logo";
import LogoWhite from "../../ui/LogoWhite";
import PageLink from "./PageLink";
import PageLinkWhite from "./PageLinkWhite";
import SocialHandle from "./SocialHandle";
import { useComponent } from "../../context/ScrollContext";

function Contact() {
  const { contactRef } = useComponent();
  return (
    <footer
      id="contact"
      ref={contactRef}
      className="bg-amber-950 px-[35px] laptop:px-[150px] py-[20px] flex flex-col gap-10 items-start   mt-10 laptop:flex-row laptop:justify-between laptop:gap-0 "
    >
      <LogoWhite />

      <PageLinkWhite />
      <SocialHandle />
    </footer>
  );
}

export default Contact;
