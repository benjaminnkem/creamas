"use client";
import WidthClamp from "@/components/Common/Custom/width-clamp";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { playfair } from "@/lib/utils/fonts";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Market", path: "/market" },
    { name: "Examples", path: "/examples" },
    { name: "Login", path: "/account/login" },
  ];

  const pathname = usePathname();

  const renderNavLinks = () => {
    return navLinks.map((link, idx) => {
      const linkClass = classNames([
        "font-light py-2 border-t-4 transition-colors",
        "duration-200 border-transparent",
        {
          "border-t-white/80": pathname === link.path,
        },
      ]);

      return (
        <Link key={idx} href={link.path}>
          <li className={linkClass}>{link.name}</li>
        </Link>
      );
    });
  };

  return (
    <nav>
      <WidthClamp>
        <div className="flex items-center justify-between py-3">
          <Link href={"/"} className={`${playfair.className} font-bold text-2xl text-white`}>
            CREAMAS
          </Link>

          <ul className="flex items-center gap-4 text-white">{renderNavLinks()}</ul>
        </div>
      </WidthClamp>
    </nav>
  );
};

export default Navbar;