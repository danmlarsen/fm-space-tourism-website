import { useLocation } from "react-router-dom";

export default function Background() {
  const location = useLocation();
  const page = location.pathname.split("/")[1] || "home";

  const backgroundImage = `/assets/${page}/background-${page}-mobile.jpg`;

  return (
    <div
      className="fixed inset-[0] -z-10 bg-black bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    ></div>
  );
}
