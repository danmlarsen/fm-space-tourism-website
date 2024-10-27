import { Link } from "react-router-dom";

type AppProps = {
  currentDestination: string;
  destinations: string[];
};

export default function DestinationNav({
  currentDestination,
  destinations,
}: AppProps) {
  return (
    <ul className="flex h-400 justify-center gap-400 lg:justify-start">
      {destinations.map((destination) => (
        <li
          className="group relative font-condensed text-sm uppercase"
          key={destination}
        >
          <Link
            to={`/destination/${destination.toLowerCase()}`}
            className="transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
          >
            {destination}
          </Link>
          <div
            className={`absolute bottom-[0] h-[3px] w-full bg-white transition duration-300 ${currentDestination.toLowerCase() === destination.toLowerCase() ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
          ></div>
        </li>
      ))}
    </ul>
  );
}
