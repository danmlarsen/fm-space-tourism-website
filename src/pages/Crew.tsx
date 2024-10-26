import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { crew } from "../data/data.json";
import Pagination from "../components/Pagination";

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(0);

  const { name, images, role, bio } = crew[selectedCrew];

  return (
    <section className="py-300 md:py-500 lg:py-600 px-300 md:px-500 space-y-300 container mx-auto grid max-w-6xl grid-rows-[auto_1fr] text-center lg:px-[0] lg:text-left">
      <div>
        <SectionTitle title="Meet your crew" sectionNumber="02" />
      </div>
      <div className="gap-300 grid h-full grid-rows-[1fr_340px] md:grid-rows-[1fr_auto] lg:grid-cols-2 lg:grid-rows-none">
        <div className="mx-auto grid max-w-xl grid-rows-[1fr_63px] md:items-center">
          <div className="space-y-200 md:min-h-[200px] lg:min-h-[250px]">
            <span className="md:text-md font-serif text-base uppercase text-white/50">
              {role}
            </span>
            <h2 className="text-md font-serif uppercase md:text-xl">{name}</h2>
            <p className="md:text_base text-sm text-blue-300">{bio}</p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Pagination
              curPage={selectedCrew}
              numPages={crew.length}
              selectFn={(id) => setSelectedCrew(id)}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <picture className="h-full">
            <source srcSet={images.webp} />
            <img
              className="h-full max-w-[540px] object-cover md:max-h-[500px] lg:max-h-[600px]"
              src={images.png}
              alt={`Image of ${name}`}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
