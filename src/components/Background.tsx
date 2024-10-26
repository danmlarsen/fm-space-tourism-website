import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const { theme } = resolveConfig(tailwindConfig);

export default function Background() {
  const isTablet = useMediaQuery({ query: `(min-width: ${theme.screens.md})` });
  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme.screens.lg})`,
  });

  const location = useLocation();
  const page = location.pathname.split("/")[1] || "home";

  const backgroundImage = `/assets/${page}/background-${page}-${isDesktop ? "desktop" : isTablet ? "tablet" : "mobile"}.jpg`;

  return (
    <div
      className="fixed inset-[0] -z-50 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    ></div>
  );
}
