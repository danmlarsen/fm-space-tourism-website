import { useParams } from "react-router-dom";

import { destinations } from "../data/data.json";
import SectionTitle from "../components/SectionTitle";

export default function Destination() {
  const { id = "Moon" } = useParams();

  const { name, images, description, distance, travel } = destinations.find(
    (dest) => dest.name === id?.slice(0, 1).toUpperCase() + id?.slice(1),
  )!;

  console.log(images.png);

  return (
    <section className="p-300 space-y-300 container max-w-6xl text-center">
      <div>
        <SectionTitle title="Pick your destination" sectionNumber="01" />
      </div>
      <div className="gap-300 grid grid-rows-[auto_1fr]">
        <div>
          <picture className="flex justify-center">
            <img
              className="w-1/3 object-cover"
              src={images.png}
              alt={`Image of ${name}`}
            />
          </picture>
        </div>
        <div>
          <nav>NAV</nav>
          <div className="space-y-300 divide-y divide-white/25">
            <div>
              <h2 className="font-serif text-2xl uppercase">{name}</h2>
              <p className="text-sm text-blue-300">{description}</p>
            </div>
            <div className="uppercase">
              <div className="pt-300">
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
