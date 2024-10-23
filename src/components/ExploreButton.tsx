import { Link } from "react-router-dom";

export default function ExploreButton() {
  return (
    <Link to="/destination">
      <button
        className="flex size-[144px] items-center justify-center rounded-full bg-white font-serif text-base uppercase text-black md:size-[272px] md:text-xl"
        type="button"
      >
        Explore
      </button>
    </Link>
  );
}
