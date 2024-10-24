import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="lg:pt-500 mx-auto grid w-full max-w-[1440px] grid-cols-[auto_1fr] items-center justify-between lg:grid-cols-2">
      <div className="px-500 relative flex">
        <div className="translate-x-500 absolute right-[0] top-1/2 -z-10 hidden h-[1px] w-10/12 translate-y-1/2 bg-white/25 lg:block"></div>
        <Logo />
      </div>
      <div className="">
        <Navigation />
      </div>
    </header>
  );
}
