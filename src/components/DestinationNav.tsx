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
    <ul className="gap-400 h-400 flex justify-center lg:justify-start">
      {destinations.map((destination) => (
        <li
          className="font-condensed group relative text-sm uppercase"
          key={destination}
        >
          <Link to={`/destination/${destination.toLowerCase()}`}>
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
