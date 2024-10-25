import { useContext } from "react";
import { NavContext } from "../context/NavContext";

export default function MobileNavButton() {
  const { setMobileNavOpen } = useContext(NavContext)!;

  return (
    <button
      className="w-300 relative z-50 flex h-[21px] flex-col justify-between md:hidden"
      onClick={() => setMobileNavOpen((prev) => !prev)}
    >
      <span className="block h-[3px] w-full bg-white"></span>
      <span className="block h-[3px] w-full bg-white"></span>
      <span className="block h-[3px] w-full bg-white"></span>
    </button>
  );
}
