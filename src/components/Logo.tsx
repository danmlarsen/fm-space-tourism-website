import { Link } from "react-router-dom";
import IconLogo from "../assets/images/logo.svg";

export default function Logo() {
  return (
    <Link className="block" to="/">
      <img className="size-500 md:size-600" src={IconLogo} alt="Space Logo" />
    </Link>
  );
}
