import { Link, useLocation } from "react-router-dom";

import { matchPath } from "react-router-dom";

const navigationItems = [
  { to: "/", text: "Home" },
  { to: "/destination", text: "Destination" },
  { to: "/crew", text: "Crew" },
  { to: "/technology", text: "Technology" },
];

export default function Navigation() {
  return (
    <nav className="h-1200 px-500 relative flex grow justify-end">
      <div className="absolute inset-[0] -z-40 bg-white/5 backdrop-blur-3xl"></div>
      <ul className="gap-600 flex">
        {navigationItems.map((item, index) => (
          <NavItem to={item.to} index={index}>
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
        className={`absolute bottom-[0] h-[3px] w-full bg-white transition duration-300 ${matchPath(to, pathname) ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
      ></div>
    </li>
  );
}
