import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="gap-100 flex">
      <Link to="/">Home</Link>
      <Link to="/destination">Destination</Link>
      <Link to="/crew">Crew</Link>
      <Link to="/technology">Technology</Link>
    </nav>
  );
}
