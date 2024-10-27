import Logo from "./Logo";
import MobileNavButton from "./MobileNavButton";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="mx-auto grid w-full max-w-[90rem] grid-cols-[1fr_auto] items-center justify-between px-300 py-300 md:grid-cols-[auto_1fr] md:px-[0] md:py-[0] lg:grid-cols-[1fr_46rem] lg:pt-500">
      <div className="relative flex md:px-500 lg:px-800">
        <div className="absolute right-[0] top-1/2 -z-10 hidden h-[1px] w-10/12 translate-x-500 translate-y-1/2 bg-white/25 lg:block"></div>
        <Logo />
      </div>
      <div className="">
        <Navigation />
        <MobileNavButton />
      </div>
    </header>
  );
}
