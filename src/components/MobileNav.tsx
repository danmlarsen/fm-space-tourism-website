import { useContext } from "react";
import { NavContext } from "../context/NavContext";

import { navLinks } from "../data/navLinks.json";
import { matchPath, NavLink, useLocation } from "react-router-dom";

export default function MobileNav() {
  const { mobileNavOpen } = useContext(NavContext)!;

  const { pathname } = useLocation();

  if (!mobileNavOpen) return null;

  return (
    <nav className="pl-400 fixed inset-y-[0] right-[0] z-30 w-2/3 bg-blue-900/15 pt-[133px] text-base uppercase text-white backdrop-blur-xl md:hidden">
      <ul className="space-y-400">
        {navLinks.map((link, index) => (
          <li className="relative" key={link.to}>
            <NavLink className="gap-150 flex" to={link.to}>
              <span>0{index}</span>
              <span>{link.text}</span>
            </NavLink>
            <div
              className={`absolute inset-y-[0] right-[0] h-full w-[3px] bg-white ${matchPath(link.to, pathname.split("/").slice(0, 2).join("/")) ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
            ></div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
