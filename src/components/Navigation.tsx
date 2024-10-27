import { Link, useLocation } from "react-router-dom";

import { matchPath } from "react-router-dom";

import { navLinks } from "../data/navLinks.json";

export default function Navigation() {
  return (
    <nav className="relative hidden h-1200 grow justify-end px-500 md:flex lg:px-800">
      <div className="absolute inset-[0] -z-40 bg-white/5 backdrop-blur-3xl"></div>
      <ul className="flex gap-600">
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
    <li className="group relative flex items-center font-condensed text-sm uppercase">
      <Link
        className="flex gap-150 transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
        to={to}
      >
        <span className="font-bold">0{index}</span>
        <span>{children}</span>
      </Link>
      <div
        className={`absolute bottom-[0] h-[3px] w-full bg-white transition duration-300 ${matchPath(to, pathname.split("/").slice(0, 2).join("/")) ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
      ></div>
    </li>
  );
}
