import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import resolveConfig from "tailwindcss/resolveConfig";
// @ts-expect-error ...
import tailwindConfig from "../../tailwind.config.js";

const { theme } = resolveConfig(tailwindConfig);

import SectionTitle from "../components/SectionTitle";

import { technology } from "../data/data.json";
import Pagination from "../components/Pagination";
import { AnimatePresence, motion } from "framer-motion";

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(0);

  const isTablet = useMediaQuery({ query: `(min-width: ${theme.screens.md})` });
  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme.screens.lg})`,
  });

  const { name, images, description } = technology[selectedTech];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="Technology"
      className="container mx-auto grid max-w-6xl grid-rows-[auto_1fr] space-y-300 py-300 text-center md:py-500 lg:py-600 lg:text-start"
    >
      <div className="px-300 lg:px-[0]">
        <SectionTitle title="Space launch 101" sectionNumber="03" />
      </div>
      <div className="container mx-auto grid grid-rows-[auto_1fr] gap-400 lg:grid-cols-2 lg:grid-rows-none lg:items-center">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={name}
            className="flex justify-center lg:order-2"
          >
            <img
              className="h-[16.125rem] w-full object-cover object-center md:h-[22.3125rem] lg:h-[37.5rem]"
              src={
                import.meta.env.BASE_URL + isTablet && !isDesktop
                  ? images.landscape
                  : images.portrait
              }
              alt={`Image of ${name}`}
            />
          </motion.div>
        </AnimatePresence>
        <div className="mx-auto grid max-w-xl grid-rows-[auto_1fr] gap-x-800 gap-y-500 px-300 lg:grid-cols-[auto_1fr] lg:items-center lg:px-[0]">
          <div className="flex justify-center">
            <Pagination
              type="large"
              curPage={selectedTech}
              numPages={technology.length}
              selectFn={(id) => setSelectedTech(id)}
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={name}
              className="min-h-[15.625rem]"
            >
              <span className="font-serif text-base uppercase text-white/50">
                The terminology...
              </span>
              <h2 className="font-serif text-md uppercase">{name}</h2>
              <p className="text-sm text-blue-300">{description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
