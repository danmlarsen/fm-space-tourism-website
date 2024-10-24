import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { crew } from "../data/data.json";
import Pagination from "../components/Pagination";

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(0);

  const { name, images, role, bio } = crew[selectedCrew];

  return (
    <section className="px-300 space-y-300 container grid max-w-6xl grid-rows-[auto_1fr] text-center">
      <div>
        <SectionTitle title="Meet your crew" sectionNumber="02" />
      </div>
      <div className="gap-300 grid h-full grid-rows-[1fr_auto_340px]">
        <div>
          <div>
            <span className="font-serif text-base uppercase text-white/50">
              {role}
            </span>
            <h2 className="text-md font-serif uppercase">{name}</h2>
            <p className="text-sm text-blue-300">{bio}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Pagination
            curPage={selectedCrew}
            numPages={crew.length}
            selectFn={(id) => setSelectedCrew(id)}
          />
        </div>
        <div className="flex justify-center">
          <img
            className="max-h-full"
            src={images.png}
            alt={`Image of ${name}`}
          />
        </div>
      </div>
    </section>
  );
}
