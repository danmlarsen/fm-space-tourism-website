import { Link } from "react-router-dom";

export default function ExploreButton() {
  return (
    <div className="group relative">
      <div className="absolute inset-[0] -z-10 rounded-full bg-white opacity-0 transition duration-300 ease-in-out group-hover:scale-[1.75] group-hover:opacity-10"></div>
      <Link
        to="/destination"
        className="flex size-[144px] items-center justify-center rounded-full bg-white font-serif text-base uppercase text-black transition duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-900 focus-visible:ring-offset-4 md:size-[272px] md:text-xl"
      >
        Explore
      </Link>
    </div>
  );
}
