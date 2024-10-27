import { useNavigate, useParams } from "react-router-dom";

import { destinations } from "../data/data.json";

import SectionTitle from "../components/SectionTitle";
import DestinationNav from "../components/DestinationNav";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const fadeVariant = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export default function Destination() {
  const { currentDestination = "Moon" } = useParams();
  const navigate = useNavigate();

  const foundDestination = destinations.find(
    (dest) =>
      dest.name ===
      currentDestination?.slice(0, 1).toUpperCase() +
        currentDestination?.slice(1),
  )!;

  useEffect(() => {
    if (!foundDestination) {
      navigate("/destination/moon");
    }
  }, [foundDestination, navigate]);

  if (!foundDestination) return;

  const { name, images, description, distance, travel } = foundDestination;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="Destination"
      className="container mx-auto grid max-w-6xl grid-rows-[auto_1fr] space-y-300 px-300 py-300 text-center md:px-500 md:py-500 lg:px-[0] lg:py-600 lg:text-left"
    >
      <div>
        <SectionTitle title="Pick your destination" sectionNumber="01" />
      </div>
      <div className="grid grid-rows-[auto_1fr] gap-300 md:grid-rows-2 md:gap-400 lg:grid-cols-2 lg:grid-rows-none lg:items-center">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0" }}
            exit={{ opacity: 0 }}
            key={name}
            className="flex items-center justify-center"
          >
            <picture>
              <source srcSet={import.meta.env.BASE_URL + images.webp} />
              <img
                className="size-[9.375rem] object-cover md:size-[18.75rem] lg:size-[30rem]"
                src={images.png}
                alt={`Image of ${name}`}
              />
            </picture>
          </motion.div>
        </AnimatePresence>
        <div className="mx-auto max-w-xl space-y-300">
          <DestinationNav
            currentDestination={currentDestination}
            destinations={destinations.map((destination) => destination.name)}
          />
          <div className="space-y-300 divide-y divide-white/25">
            <AnimatePresence mode="wait">
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={fadeVariant}
                key={name}
                className="min-h-[12.5rem] lg:min-h-[15.625rem]"
              >
                <h2 className="font-serif text-2xl uppercase md:text-[5rem]">
                  {name}
                </h2>

                <p
                  key={description}
                  className="text-sm text-blue-300 md:text-base"
                >
                  {description}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="grid pt-300 uppercase md:grid-cols-2">
              <div className="">
                <p className="text-xs text-blue-300">Avg. Distance</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={fadeVariant}
                    key={name}
                    className="font-serif text-lg"
                  >
                    {distance}
                  </motion.p>
                </AnimatePresence>
              </div>
              <div>
                <p className="text-xs text-blue-300">Est. Travel time</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={fadeVariant}
                    key={name}
                    className="font-serif text-lg"
                  >
                    {travel}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
