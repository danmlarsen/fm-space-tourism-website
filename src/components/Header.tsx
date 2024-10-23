import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="p-300 flex items-center justify-between">
      <Logo />
      <Navigation />
    </header>
  );
}
