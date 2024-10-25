import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import SectionTitle from "../components/SectionTitle";

import { technology } from "../data/data.json";
import Pagination from "../components/Pagination";

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(0);

  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const { name, images, description } = technology[selectedTech];

  return (
    <section className="space-y-300 container mx-auto grid max-w-6xl grid-rows-[auto_1fr] text-center lg:text-start">
      <div className="px-300 md:px-500">
        <SectionTitle title="Space launch 101" sectionNumber="03" />
      </div>
      <div className="gap-400 container mx-auto grid grid-rows-[auto_1fr] lg:grid-cols-2 lg:grid-rows-none lg:items-center">
        <div className="flex justify-center lg:order-2">
          <img
            className="h-[258px] w-full object-cover object-center md:h-[357px] lg:h-[600px]"
            src={isTablet && !isDesktop ? images.landscape : images.portrait}
            alt={`Image of ${name}`}
          />
        </div>
        <div className="gap-x-800 gap-y-500 mx-auto grid max-w-xl grid-rows-[auto_1fr] lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="flex justify-center">
            <Pagination
              type="large"
              curPage={selectedTech}
              numPages={technology.length}
              selectFn={(id) => setSelectedTech(id)}
            />
          </div>
          <div>
            <span className="font-serif text-base uppercase text-white/50">
              The terminology...
            </span>
            <h2 className="text-md font-serif uppercase">{name}</h2>
            <p className="text-sm text-blue-300">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
