import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { HiMiniPhoneArrowDownLeft } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

function SocialHandle() {
  const links = [
    {
      icon: <FaWhatsapp className="text-green-700" />,
      text: "09045808495",
      url: "https://wa.me/2349045808495",
    },
    {
      icon: <HiMiniPhoneArrowDownLeft className="text-blue-600" />,
      text: "09045808495",
      url: "tel:+2349045808495",
    },
    {
      icon: <MdEmail className="text-red-800" />,
      text: "maryham4real@gmail.com",
      url: "mailto:maryham4real@gmail.com",
    },
    {
      icon: (
        <FaTiktok className="text-white bg-black p-1 rounded-full text-xl" />
      ),
      text: "Mariam | codey_sis",
      url: "https://www.tiktok.com/@mariamcodey_sis",
    },
    {
      icon: <FaXTwitter className="text-white" />,
      text: "Mariam | codey_sis",
      url: "https://x.com/Codey_sis",
    },
  ];

  return (
    <div className="flex flex-col gap-3 font-poppins">
      {links.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center text-white hover:opacity-80 transition"
        >
          {item.icon}
          <span className="cursor-pointer">{item.text}</span>
        </a>
      ))}
    </div>
  );
}

export default SocialHandle;
