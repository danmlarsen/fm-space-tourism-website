import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import resolveConfig from "tailwindcss/resolveConfig";
// @ts-expect-error ...
import tailwindConfig from "../../tailwind.config.js";

const { theme } = resolveConfig(tailwindConfig);

const validBackgrounds = ["home", "destination", "crew", "technology"];

export default function Background() {
  const isTablet = useMediaQuery({ query: `(min-width: ${theme.screens.md})` });
  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme.screens.lg})`,
  });

  const location = useLocation();
  const currentPageName = location.pathname.split("/")[1];

  const currentPageBackground = validBackgrounds.includes(currentPageName)
    ? currentPageName
    : "home";

  const backgroundImage = `/assets/${currentPageBackground}/background-${currentPageBackground}-${isDesktop ? "desktop" : isTablet ? "tablet" : "mobile"}.jpg`;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        key={currentPageBackground}
        className="fixed inset-[0] -z-50 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></motion.div>
    </AnimatePresence>
  );
}
