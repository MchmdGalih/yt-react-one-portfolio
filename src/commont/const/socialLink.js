import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://linkedin.com/in/mochamad-galih-sulistio-pratama-2766b4253/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https:///github.com/MchmdGalih",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:mochamadglh@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: "/galih.pdf",
    style: "rounded-br-md",
    download: true,
  },
];
