import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

export default function Background() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const location = useLocation();
  const page = location.pathname.split("/")[1] || "home";

  const backgroundImage = `/assets/${page}/background-${page}-${isDesktop ? "desktop" : isTablet ? "tablet" : "mobile"}.jpg`;

  return (
    <div
      className="fixed inset-[0] -z-50 bg-black bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    ></div>
  );
}
