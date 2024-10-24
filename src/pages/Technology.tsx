import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

import { technology } from "../data/data.json";
import Pagination from "../components/Pagination";

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(0);

  const { name, images, description } = technology[selectedTech];

  return (
    <section className="space-y-300 container grid max-w-6xl grid-rows-[auto_1fr] text-center">
      <div className="px-300">
        <SectionTitle title="Space launch 101" sectionNumber="03" />
      </div>
      <div className="space-y-500">
        <div>
          <img
            className="h-[258px] w-full object-cover object-bottom"
            src={images.portrait}
            alt={`Image of ${name}`}
          />
        </div>
        <div className="space-y-500">
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
