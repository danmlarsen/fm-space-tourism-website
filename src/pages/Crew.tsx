import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { crew } from "../data/data.json";
import Pagination from "../components/Pagination";

import { AnimatePresence, motion } from "framer-motion";

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(0);

  const { name, images, role, bio } = crew[selectedCrew];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="Crew"
      className="container mx-auto grid max-w-6xl grid-rows-[auto_1fr] space-y-300 px-300 py-300 text-center md:px-500 md:py-500 lg:px-[0] lg:py-600 lg:text-left"
    >
      <div>
        <SectionTitle title="Meet your crew" sectionNumber="02" />
      </div>
      <div className="grid h-full grid-rows-[1fr_340px] gap-300 overflow-x-hidden md:grid-rows-[1fr_auto] lg:grid-cols-2 lg:grid-rows-none">
        <div className="mx-auto grid max-w-xl grid-rows-[1fr_63px] md:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={name}
              className="space-y-200 md:min-h-[200px] lg:min-h-[250px]"
            >
              <span className="font-serif text-base uppercase text-white/50 md:text-md">
                {role}
              </span>
              <h2 className="font-serif text-md uppercase md:text-xl">
                {name}
              </h2>
              <p className="md:text_base text-sm text-blue-300">{bio}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center lg:justify-start">
            <Pagination
              curPage={selectedCrew}
              numPages={crew.length}
              selectFn={(id) => setSelectedCrew(id)}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0" }}
            exit={{ opacity: 0 }}
            key={name}
            className="flex items-center justify-center"
          >
            <picture className="h-full">
              <source srcSet={images.webp} />
              <img
                className="h-full max-w-[272px] object-cover md:max-h-[500px] md:max-w-[540px] lg:max-h-[600px]"
                src={images.png}
                alt={`Image of ${name}`}
                style={{
                  maskImage: "linear-gradient(rgb(0,0,0,1) 90%, transparent)",
                }}
              />
            </picture>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
