import { Link } from "react-router-dom";
import IconLogo from "../assets/images/logo.svg";

export default function Logo() {
  return (
    <Link className="block" to="/">
      <img src={IconLogo} alt="Space Logo" />
    </Link>
  );
}
