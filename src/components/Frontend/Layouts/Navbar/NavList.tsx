import React from "react";
import Link from "next/link";

export const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Tentang Kami",
    link: "/about-us",
  },
  {
    name: "Produk",
    link: "/product",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Certificates",
    link: "#certificates",
  },
];

const NavList = () => {
  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.link}
            className="nav-link h-16 flex justify-center items-center hover:text-blue-500 ease-in-out duration-200 "
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavList;
