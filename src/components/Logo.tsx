import { Link } from "react-router-dom";
import IconLogo from "../assets/images/logo.svg";

export default function Logo() {
  return (
    <Link
      className="block transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
      to="/"
    >
      <img className="size-500 md:size-600" src={IconLogo} alt="Space Logo" />
    </Link>
  );
}
