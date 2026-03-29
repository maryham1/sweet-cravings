import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { HiMiniPhoneArrowDownLeft } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

function SocialHandle() {
  return (
    <div className="flex flex-col gap-2 font-poppins">
      <div className="flex gap-2 items-center">
        <FaWhatsapp
          href="https://wa.me/2349045808495"
          className="text-green-700"
        />
        <p
          href="https://wa.me/2349045808495"
          className="text-white cursor-pointer"
        >
          09045808495
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <HiMiniPhoneArrowDownLeft
          href="tel:+2349045808495"
          className="text-blue-600"
        />
        <p href="tel:+2349045808495" className="text-white cursor-pointer">
          09045808495
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <MdEmail
          href="mailto:maryham4real@gmail.com"
          className="text-red-800"
        />
        <p
          href="mailto:maryham4real@gmail.com"
          className="text-white cursor-pointer"
        >
          maryham4real@gmail.com
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <FaTiktok
          href="https://www.tiktok.com/@mariamcodey_sis"
          className="text-white bg-black p-1 rounded-full text-xl cursor-pointer"
        />
        <p
          href="https://www.tiktok.com/@mariamcodey_sis"
          className="text-white cursor-pointer"
        >
          Mariam|codey_sis
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <FaXTwitter href="https://x.com/Codey_sis" />
        <p href="https://x.com/Codey_sis" className="text-white cursor-pointer">
          Mariam|codey_sis
        </p>
      </div>
    </div>
  );
}

export default SocialHandle;
