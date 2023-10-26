"use client";
import WidthClamp from "@/components/Common/Custom/width-clamp";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { playfair } from "@/lib/utils/fonts";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const navEl = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    navEl.current?.focus();
    const t1 = gsap.timeline();

    t1.fromTo(
      ".logo",
      { xPercent: -100, opacity: 0, duration: 1, ease: "power1.out" },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.out" }
    );
    t1.fromTo(
      ".navlink",
      { xPercent: 100, opacity: 0 },
      { opacity: 1, xPercent: 0, ease: "power1.out", stagger: { amount: 0.5, from: "start" } }
    );
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Trending", path: "/trending" },
    { name: "Marketplace", path: "/market" },
  ];

  const pathname = usePathname();

  const renderNavLinks = () => {
    return navLinks.map((link, idx) => {
      const linkClass = classNames([
        "font-light py-2 px-2 border-b-4 transition-colors",
        "duration-200 border-transparent",
        {
          "border-b-white/80": pathname === link.path,
        },
      ]);

      return (
        <Link key={idx} href={link.path} className="navlink">
          <li className={linkClass}>{link.name}</li>
        </Link>
      );
    });
  };

  return (
    <nav ref={navEl}>
      <WidthClamp>
        <div className="flex items-center justify-between py-3">
          <Link href={"/"} className={`${playfair.className} font-bold text-2xl text-white logo`}>
            CREAMAS
          </Link>

          <ul className="flex items-center gap-2 text-white">
            {renderNavLinks()}
            <Link href={"/account/login"} className="navlink">
              <button className="font-light py-1 px-4 rounded-sm border-4 duration-200 hover:bg-primaryColorLight transition-colors">Login</button>
            </Link>
          </ul>
        </div>
      </WidthClamp>
    </nav>
  );
};

export default Navbar;
