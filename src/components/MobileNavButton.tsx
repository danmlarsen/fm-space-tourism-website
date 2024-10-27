import { useContext } from "react";
import { NavContext } from "../context/NavContext";

import { motion } from "framer-motion";

import IconHamburger from "../assets/images/icon-hamburger.svg";
import IconClose from "../assets/images/icon-close.svg";

export default function MobileNavButton() {
  const { mobileNavOpen, setMobileNavOpen } = useContext(NavContext)!;

  return (
    <button
      className="relative z-50 flex h-[1.3125rem] w-300 flex-col justify-between md:hidden"
      onClick={() => setMobileNavOpen((prev) => !prev)}
    >
      {mobileNavOpen ? (
        <motion.img
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1] }}
          key={0}
          src={IconClose}
          alt="Hamburger Icon"
        />
      ) : (
        <motion.img
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1] }}
          key={1}
          src={IconHamburger}
          alt="Hamburger Icon"
        />
      )}
    </button>
  );
}
