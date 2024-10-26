import Logo from "./Logo";
import MobileNavButton from "./MobileNavButton";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="px-300 lg:pt-500 py-300 mx-auto grid w-full max-w-[1440px] grid-cols-[1fr_auto] items-center justify-between md:grid-cols-[auto_1fr] md:px-[0] md:py-[0] lg:grid-cols-[1fr_736px]">
      <div className="md:px-500 lg:px-800 relative flex">
        <div className="translate-x-500 absolute right-[0] top-1/2 -z-10 hidden h-[1px] w-10/12 translate-y-1/2 bg-white/25 lg:block"></div>
        <Logo />
      </div>
      <div className="">
        <Navigation />
        <MobileNavButton />
      </div>
    </header>
  );
}
