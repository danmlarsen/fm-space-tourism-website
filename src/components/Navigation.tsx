import { Link, useLocation } from "react-router-dom";

import { matchPath } from "react-router-dom";

import { navLinks } from "../data/navLinks.json";

export default function Navigation() {
  return (
    <nav className="h-1200 px-500 lg:px-800 relative hidden grow justify-end md:flex">
      <div className="absolute inset-[0] -z-40 bg-white/5 backdrop-blur-3xl"></div>
      <ul className="gap-600 flex">
        {navLinks.map((item, index) => (
          <NavItem to={item.to} index={index} key={item.to}>
            {item.text}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

function NavItem({
  to,
  index,
  children,
}: {
  to: string;
  index: number;
  children: string;
}) {
  const { pathname } = useLocation();

  return (
    <li className="font-condensed group relative flex items-center text-sm uppercase">
      <Link className="gap-150 flex" to={to}>
        <span className="font-bold">0{index}</span>
        <span>{children}</span>
      </Link>
      <div
        className={`absolute bottom-[0] h-[3px] w-full bg-white transition duration-300 ${matchPath(to, pathname.split("/").slice(0, 2).join("/")) ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
      ></div>
    </li>
  );
}
