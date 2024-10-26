import ExploreButton from "../components/ExploreButton";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="Home"
      className="container mx-auto grid max-w-6xl gap-300 px-300 md:py-1600 lg:grid-cols-2 lg:content-end lg:gap-[0] lg:px-[0]"
    >
      <div className="container mx-auto max-w-lg text-center lg:mx-[0] lg:max-w-[540px] lg:text-left">
        <span className="font-condensed text-sm uppercase text-blue-300 md:text-lg">
          So, you want to travel to
        </span>
        <h1 className="mt-100 font-serif text-2xl uppercase md:text-4xl">
          Space
        </h1>
        <p className="mt-300 text-sm text-blue-300 lg:text-base">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex items-center justify-center lg:justify-end">
        <ExploreButton />
      </div>
    </motion.section>
  );
}
