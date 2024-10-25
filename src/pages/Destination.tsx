import { useParams } from "react-router-dom";

import { destinations } from "../data/data.json";

import SectionTitle from "../components/SectionTitle";
import DestinationNav from "../components/DestinationNav";

export default function Destination() {
  const { currentDestination = "Moon" } = useParams();

  const { name, images, description, distance, travel } = destinations.find(
    (dest) =>
      dest.name ===
      currentDestination?.slice(0, 1).toUpperCase() +
        currentDestination?.slice(1),
  )!;

  return (
    <section className="px-300 md:px-500 space-y-300 container mx-auto grid max-w-6xl grid-rows-[auto_1fr] text-center lg:text-left">
      <div>
        <SectionTitle title="Pick your destination" sectionNumber="01" />
      </div>
      <div className="gap-300 md:gap-400 grid grid-rows-[auto_1fr] md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-none lg:items-center">
        <div className="flex items-center justify-center">
          <img
            className="size-[150px] object-cover md:size-[300px] lg:size-[480px]"
            src={images.png}
            alt={`Image of ${name}`}
          />
        </div>
        <div className="space-y-300 mx-auto max-w-xl">
          <DestinationNav
            currentDestination={currentDestination}
            destinations={destinations.map((destination) => destination.name)}
          />
          <div className="space-y-300 divide-y divide-white/25">
            <div className="min-h-[250px]">
              <h2 className="font-serif text-2xl uppercase md:text-[80px]">
                {name}
              </h2>
              <p className="text-sm text-blue-300 md:text-base">
                {description}
              </p>
            </div>
            <div className="pt-300 grid uppercase md:grid-cols-2">
              <div className="">
                <p className="text-xs text-blue-300">Avg. Distance</p>
                <p className="font-serif text-lg">{distance}</p>
              </div>
              <div>
                <p className="text-xs text-blue-300">Est. Travel time</p>
                <p className="font-serif text-lg">{travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
